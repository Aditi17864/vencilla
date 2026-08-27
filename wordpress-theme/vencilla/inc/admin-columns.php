<?php
// Admin Columns customization

add_filter('manage_product_posts_columns', 'vencilla_product_columns');
function vencilla_product_columns($columns) {
    $new_columns = [];
    foreach ($columns as $key => $column) {
        $new_columns[$key] = $column;
        if ($key === 'name') {
            $new_columns['vencilla_division'] = 'Division';
            $new_columns['vencilla_moq'] = 'MOQ';
        }
    }
    return $new_columns;
}

add_action('manage_product_posts_custom_column', 'vencilla_product_column_content', 10, 2);
function vencilla_product_column_content($column, $post_id) {
    if ($column === 'vencilla_division') {
        $division = get_post_meta($post_id, 'vencilla_division', true);
        echo $division ? ucfirst(esc_html($division)) : '-';
    }
    if ($column === 'vencilla_moq') {
        $moq = get_post_meta($post_id, 'vencilla_moq', true);
        echo $moq ? esc_html($moq) : '-';
    }
}

add_action('restrict_manage_posts', 'vencilla_filter_by_division');
function vencilla_filter_by_division() {
    global $typenow;
    if ($typenow === 'product') {
        $selected = isset($_GET['vencilla_division']) ? sanitize_text_field($_GET['vencilla_division']) : '';
        echo '<select name="vencilla_division" id="vencilla_division">';
        echo '<option value="">All Divisions</option>';
        echo '<option value="textiles" ' . selected($selected, 'textiles', false) . '>Textiles</option>';
        echo '<option value="pharmaceuticals" ' . selected($selected, 'pharmaceuticals', false) . '>Pharmaceuticals</option>';
        echo '</select>';
    }
}

add_filter('parse_query', 'vencilla_filter_products_by_division');
function vencilla_filter_products_by_division($query) {
    global $pagenow, $typenow;
    if ($pagenow === 'edit.php' && $typenow === 'product' && isset($_GET['vencilla_division']) && $_GET['vencilla_division'] !== '') {
        $meta_query = $query->get('meta_query');
        if (!is_array($meta_query)) {
            $meta_query = [];
        }
        $meta_query[] = [
            'key' => 'vencilla_division',
            'value' => sanitize_text_field($_GET['vencilla_division']),
            'compare' => '='
        ];
        $query->set('meta_query', $meta_query);
    }
}

add_action('admin_notices', 'vencilla_wc_admin_notice');
function vencilla_wc_admin_notice() {
    if (!class_exists('WooCommerce')) {
        echo '<div class="notice notice-warning is-dismissible">';
        echo '<p><strong>Vencilla Theme:</strong> WooCommerce is not active. Please install and activate WooCommerce to use product features.</p>';
        echo '</div>';
    }
}

add_action('admin_head', 'vencilla_admin_styles');
function vencilla_admin_styles() {
    echo '<style>
        #vencilla_product_meta { border-left: 4px solid #C9A24B; }
        #vencilla_product_meta h2 { font-family: "Cinzel", serif; color: #07090E; }
        #vencilla_product_meta label { margin-top: 10px; display: inline-block; color: #07090E; }
        #vencilla_product_meta input, #vencilla_product_meta textarea, #vencilla_product_meta select { border-radius: 4px; border: 1px solid #ccc; padding: 5px; box-sizing: border-box; }
        #vencilla_product_meta input:focus, #vencilla_product_meta textarea:focus, #vencilla_product_meta select:focus { border-color: #00BCD4; box-shadow: 0 0 2px rgba(0,188,212,0.8); outline: none; }
    </style>';
}
