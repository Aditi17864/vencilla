<?php
// Custom REST API endpoints

add_action('rest_api_init', 'vencilla_register_api_endpoints');
function vencilla_register_api_endpoints() {
    register_rest_route('vencilla/v1', '/products', [
        'methods' => 'GET',
        'callback' => 'vencilla_api_get_products',
        'permission_callback' => '__return_true'
    ]);
    
    register_rest_route('vencilla/v1', '/products/(?P<slug>[\w-]+)', [
        'methods' => 'GET',
        'callback' => 'vencilla_api_get_product',
        'permission_callback' => '__return_true'
    ]);

    register_rest_route('vencilla/v1', '/categories', [
        'methods' => 'GET',
        'callback' => 'vencilla_api_get_categories',
        'permission_callback' => '__return_true'
    ]);

    register_rest_route('vencilla/v1', '/blog', [
        'methods' => 'GET',
        'callback' => 'vencilla_api_get_blog',
        'permission_callback' => '__return_true'
    ]);

    register_rest_route('vencilla/v1', '/blog/(?P<slug>[\w-]+)', [
        'methods' => 'GET',
        'callback' => 'vencilla_api_get_post',
        'permission_callback' => '__return_true'
    ]);
}

function vencilla_api_get_products(WP_REST_Request $request) {
    $division = $request->get_param('division');
    $category = $request->get_param('category');
    $search = $request->get_param('search');
    $featured = $request->get_param('featured');
    $limit = $request->get_param('limit') ? intval($request->get_param('limit')) : 100;

    $args = [
        'post_type' => 'product',
        'post_status' => 'publish',
        'posts_per_page' => $limit,
        'tax_query' => [],
        'meta_query' => []
    ];

    if ($search) {
        $args['s'] = sanitize_text_field($search);
    }

    if ($featured) {
        $args['tax_query'][] = [
            'taxonomy' => 'product_visibility',
            'field'    => 'name',
            'terms'    => 'featured',
            'operator' => 'IN',
        ];
    }

    if ($division && $division !== 'All') {
        $args['meta_query'][] = [
            'key' => 'vencilla_division',
            'value' => sanitize_text_field($division),
            'compare' => '='
        ];
    }

    if ($category && $category !== 'All') {
        $args['tax_query'][] = [
            'taxonomy' => 'product_cat',
            'field' => 'slug',
            'terms' => sanitize_text_field($category)
        ];
    }

    $query = new WP_Query($args);
    $products = [];

    foreach ($query->posts as $post) {
        $product = wc_get_product($post->ID);
        $cats = get_the_terms($post->ID, 'product_cat');
        $cat_name = $cats && !is_wp_error($cats) ? $cats[0]->name : '';
        
        $img_url = wp_get_attachment_url(get_post_thumbnail_id($post->ID));
        if (!$img_url && function_exists('wc_placeholder_img_src')) {
            $img_url = wc_placeholder_img_src();
        }

        $meta = vencilla_get_product_meta($post->ID);

        $prod_data = [
            'id' => $post->ID,
            'slug' => $post->post_name,
            'name' => $post->post_title,
            'shortDescription' => get_the_excerpt($post),
            'category' => $cat_name,
            'division' => $meta['vencilla_division'] ?? '',
            'image' => $img_url,
            'featured' => $product ? $product->is_featured() : false
        ];
        
        $products[] = array_merge($prod_data, $meta);
    }

    return rest_ensure_response([
        'success' => true,
        'total' => $query->found_posts,
        'pages' => $query->max_num_pages,
        'products' => $products
    ]);
}

function vencilla_api_get_product($request) {
    $slug = sanitize_text_field($request->get_param('slug'));
    
    $args = [
        'name' => $slug,
        'post_type' => 'product',
        'post_status' => 'publish',
        'posts_per_page' => 1
    ];
    
    $query = new WP_Query($args);
    
    if (empty($query->posts)) {
        return new WP_Error('no_product', 'Product not found', ['status' => 404]);
    }
    
    $post = $query->posts[0];
    $product = wc_get_product($post->ID);
    
    $cats = get_the_terms($post->ID, 'product_cat');
    $cat_name = $cats && !is_wp_error($cats) ? $cats[0]->name : '';
    
    $img_url = wp_get_attachment_url(get_post_thumbnail_id($post->ID));
    if (!$img_url && function_exists('wc_placeholder_img_src')) {
        $img_url = wc_placeholder_img_src();
    }
    
    $meta = vencilla_get_product_meta($post->ID);
    
    $prod_data = [
        'id' => $post->ID,
        'slug' => $post->post_name,
        'name' => $post->post_title,
        'description' => $post->post_content,
        'shortDescription' => get_the_excerpt($post),
        'category' => $cat_name,
        'image' => $img_url,
        'featured' => $product ? $product->is_featured() : false
    ];
    
    return rest_ensure_response([
        'success' => true,
        'product' => array_merge($prod_data, $meta)
    ]);
}

function vencilla_api_get_categories($request) {
    $division = $request->get_param('division');
    $args = ['taxonomy' => 'product_cat', 'hide_empty' => false];
    
    if ($division && $division !== 'All') {
        $parent_term = get_term_by('slug', strtolower(sanitize_text_field($division)), 'product_cat');
        if ($parent_term) {
            $args['parent'] = $parent_term->term_id;
        } else {
            return rest_ensure_response([]);
        }
    }
    
    $terms = get_terms($args);
    $categories = [];
    
    if (!is_wp_error($terms)) {
        foreach ($terms as $term) {
            $categories[] = [
                'name' => $term->name,
                'slug' => $term->slug,
                'count' => $term->count
            ];
        }
    }
    
    return rest_ensure_response($categories);
}

function vencilla_api_get_blog($request) {
    $args = [
        'post_type' => 'post',
        'post_status' => 'publish',
        'posts_per_page' => 10
    ];
    
    $query = new WP_Query($args);
    $posts = [];
    
    foreach ($query->posts as $post) {
        $img_url = wp_get_attachment_url(get_post_thumbnail_id($post->ID));
        $posts[] = [
            'id' => $post->ID,
            'slug' => $post->post_name,
            'title' => $post->post_title,
            'excerpt' => get_the_excerpt($post),
            'date' => get_the_date('c', $post),
            'image' => $img_url
        ];
    }
    
    return rest_ensure_response([
        'posts' => $posts,
        'total' => $query->found_posts
    ]);
}

function vencilla_api_get_post($request) {
    $slug = sanitize_text_field($request->get_param('slug'));
    
    $args = [
        'name' => $slug,
        'post_type' => 'post',
        'post_status' => 'publish',
        'posts_per_page' => 1
    ];
    
    $query = new WP_Query($args);
    
    if (empty($query->posts)) {
        return new WP_Error('no_post', 'Post not found', ['status' => 404]);
    }
    
    $post = $query->posts[0];
    $img_url = wp_get_attachment_url(get_post_thumbnail_id($post->ID));
    
    $post_data = [
        'id' => $post->ID,
        'slug' => $post->post_name,
        'title' => $post->post_title,
        'content' => apply_filters('the_content', $post->post_content),
        'date' => get_the_date('c', $post),
        'image' => $img_url
    ];
    
    return rest_ensure_response([
        'post' => $post_data
    ]);
}
