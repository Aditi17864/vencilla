<?php
// WooCommerce Configuration and Meta Fields

// 1. Remove default WC breadcrumbs
remove_action('woocommerce_before_main_content', 'woocommerce_breadcrumb', 20);

// 2. Remove default WC wrappers and replace with theme wrappers
remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

add_action('woocommerce_before_main_content', 'vencilla_wrapper_start', 10);
add_action('woocommerce_after_main_content', 'vencilla_wrapper_end', 10);

function vencilla_wrapper_start() {
    echo '<div class="container-vc section pt-32"><div class="row"><main id="main" class="site-main col-12" role="main">';
}

function vencilla_wrapper_end() {
    echo '</main></div></div>';
}

// 3. Register custom product meta fields
add_action('init', 'vencilla_register_product_meta');
function vencilla_register_product_meta() {
    $fields = [
        'vencilla_division', 'vencilla_moq', 'vencilla_fabric_type', 'vencilla_composition', 
        'vencilla_gsm', 'vencilla_width', 'vencilla_weave', 'vencilla_finish', 'vencilla_available_colors', 
        'vencilla_certifications', 'vencilla_brochure_url', 'vencilla_cas_number', 'vencilla_molecular_formula', 
        'vencilla_grade', 'vencilla_regulatory_status', 'vencilla_storage_conditions', 'vencilla_shelf_life', 
        'vencilla_applications', 'vencilla_specifications', 'vencilla_packaging', 'vencilla_documentation'
    ];

    foreach ($fields as $field) {
        register_meta('post', $field, [
            'object_subtype' => 'product',
            'type' => 'string',
            'single' => true,
            'show_in_rest' => true
        ]);
    }
}

// 4. Add product meta box in admin
add_action('add_meta_boxes', 'vencilla_add_product_meta_box');
function vencilla_add_product_meta_box() {
    add_meta_box(
        'vencilla_product_meta', 
        'Vencilla Product Details', 
        'vencilla_render_product_meta_box', 
        'product', 
        'normal', 
        'high'
    );
}

// 5. Render product meta box
function vencilla_render_product_meta_box($post) {
    wp_nonce_field('vencilla_save_product_meta', 'vencilla_product_meta_nonce');
    
    $fields = [
        'vencilla_division' => 'Division',
        'vencilla_moq' => 'MOQ',
        'vencilla_fabric_type' => 'Fabric Type',
        'vencilla_composition' => 'Composition',
        'vencilla_gsm' => 'GSM',
        'vencilla_width' => 'Width',
        'vencilla_weave' => 'Weave',
        'vencilla_finish' => 'Finish',
        'vencilla_available_colors' => 'Available Colors',
        'vencilla_certifications' => 'Certifications',
        'vencilla_cas_number' => 'CAS Number',
        'vencilla_molecular_formula' => 'Molecular Formula',
        'vencilla_grade' => 'Grade',
        'vencilla_regulatory_status' => 'Regulatory Status',
        'vencilla_applications' => 'Applications (one per line)',
        'vencilla_specifications' => 'Specifications (label|value pairs, one per line)',
        'vencilla_packaging' => 'Packaging (one per line)',
        'vencilla_documentation' => 'Documentation (one per line)'
    ];
    
    echo '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">';
    
    foreach ($fields as $key => $label) {
        $value = get_post_meta($post->ID, $key, true);
        echo '<div>';
        echo '<label for="' . esc_attr($key) . '" style="display: block; font-weight: bold; margin-bottom: 5px;">' . esc_html($label) . '</label>';
        
        if ($key === 'vencilla_division') {
            echo '<select id="' . esc_attr($key) . '" name="' . esc_attr($key) . '" style="width: 100%;">';
            echo '<option value="">Select Division</option>';
            echo '<option value="textiles"' . selected($value, 'textiles', false) . '>Textiles</option>';
            echo '<option value="pharmaceuticals"' . selected($value, 'pharmaceuticals', false) . '>Pharmaceuticals</option>';
            echo '</select>';
        } elseif (in_array($key, ['vencilla_applications', 'vencilla_specifications', 'vencilla_packaging', 'vencilla_documentation', 'vencilla_available_colors'])) {
            if (is_string($value) && is_array(json_decode($value, true))) {
                $decoded = json_decode($value, true);
                if ($key === 'vencilla_specifications') {
                    $text_val = '';
                    foreach ($decoded as $spec) {
                        if (isset($spec['label']) && isset($spec['value'])) {
                            $text_val .= $spec['label'] . '|' . $spec['value'] . "\n";
                        }
                    }
                    $value = trim($text_val);
                } else {
                    $value = implode("\n", $decoded);
                }
            }
            echo '<textarea id="' . esc_attr($key) . '" name="' . esc_attr($key) . '" style="width: 100%; height: 100px;">' . esc_textarea($value) . '</textarea>';
        } else {
            echo '<input type="text" id="' . esc_attr($key) . '" name="' . esc_attr($key) . '" value="' . esc_attr($value) . '" style="width: 100%;">';
        }
        echo '</div>';
    }
    
    echo '</div>';
}

// 6. Save product meta
add_action('save_post_product', 'vencilla_save_product_meta');
function vencilla_save_product_meta($post_id) {
    if (!isset($_POST['vencilla_product_meta_nonce']) || !wp_verify_nonce($_POST['vencilla_product_meta_nonce'], 'vencilla_save_product_meta')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $text_fields = [
        'vencilla_division', 'vencilla_moq', 'vencilla_fabric_type', 'vencilla_composition', 
        'vencilla_gsm', 'vencilla_width', 'vencilla_weave', 'vencilla_finish', 'vencilla_available_colors', 
        'vencilla_certifications', 'vencilla_brochure_url', 'vencilla_cas_number', 'vencilla_molecular_formula', 
        'vencilla_grade', 'vencilla_regulatory_status', 'vencilla_storage_conditions', 'vencilla_shelf_life'
    ];
    
    foreach ($text_fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, $field, sanitize_text_field($_POST[$field]));
        }
    }
    
    $json_fields = ['vencilla_applications', 'vencilla_packaging', 'vencilla_documentation'];
    foreach ($json_fields as $field) {
        if (isset($_POST[$field])) {
            $lines = explode("\n", str_replace("\r", "", sanitize_textarea_field($_POST[$field])));
            $lines = array_filter(array_map('trim', $lines));
            update_post_meta($post_id, $field, wp_slash(json_encode(array_values($lines))));
        }
    }
    
    if (isset($_POST['vencilla_specifications'])) {
        $lines = explode("\n", str_replace("\r", "", sanitize_textarea_field($_POST['vencilla_specifications'])));
        $specs = [];
        foreach ($lines as $line) {
            $line = trim($line);
            if (empty($line)) continue;
            $parts = explode('|', $line, 2);
            if (count($parts) == 2) {
                $specs[] = ['label' => trim($parts[0]), 'value' => trim($parts[1])];
            }
        }
        update_post_meta($post_id, 'vencilla_specifications', wp_slash(json_encode($specs)));
    }
}

// 7. Get product meta
function vencilla_get_product_meta($product_id) {
    $meta = get_post_meta($product_id);
    $result = [];
    foreach ($meta as $key => $values) {
        if (strpos($key, 'vencilla_') === 0) {
            $result[$key] = $values[0];
            if (in_array($key, ['vencilla_applications', 'vencilla_specifications', 'vencilla_packaging', 'vencilla_documentation'])) {
                $decoded = json_decode($values[0], true);
                if (json_last_error() === JSON_ERROR_NONE) {
                    $result[$key] = $decoded;
                }
            }
        }
    }
    return $result;
}

// 8. Create default categories
add_action('init', 'vencilla_create_default_categories');
function vencilla_create_default_categories() {
    if (!taxonomy_exists('product_cat')) return;

    $textiles = term_exists('textiles', 'product_cat');
    if (!$textiles) {
        $textiles = wp_insert_term('Textiles', 'product_cat', ['slug' => 'textiles']);
    }
    
    $pharmaceuticals = term_exists('pharmaceuticals', 'product_cat');
    if (!$pharmaceuticals) {
        $pharmaceuticals = wp_insert_term('Pharmaceuticals', 'product_cat', ['slug' => 'pharmaceuticals']);
    }

    if (!is_wp_error($textiles) && is_array($textiles)) {
        $textile_subs = ['African Wax Prints', 'Uniform Fabrics', 'Cotton Fabrics', 'Embroidered Fabrics', 'Silk & Jacquard Brocades', 'Scarves & Dupatta', 'Carpet & Rugs'];
        foreach ($textile_subs as $sub) {
            if (!term_exists($sub, 'product_cat')) {
                wp_insert_term($sub, 'product_cat', ['parent' => $textiles['term_id']]);
            }
        }
    }
    
    if (!is_wp_error($pharmaceuticals) && is_array($pharmaceuticals)) {
        $pharma_subs = ['Active Pharmaceutical Ingredients', 'Analgesic', 'Anti-Biotic', 'Antidepressant', 'Antidiabetic', 'Antifungal', 'Antiviral', 'NSAID', 'Nutraceuticals'];
        foreach ($pharma_subs as $sub) {
            if (!term_exists($sub, 'product_cat')) {
                wp_insert_term($sub, 'product_cat', ['parent' => $pharmaceuticals['term_id']]);
            }
        }
    }
}
