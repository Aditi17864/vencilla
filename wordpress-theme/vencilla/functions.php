<?php
/**
 * Vencilla Theme Functions and Definitions
 *
 * @package Vencilla
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * 1. Theme Setup
 */
function vencilla_theme_setup() {
    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');

    // Switch default core markup for search form, comment form, and comments to output valid HTML5.
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ]);

    // Add support for WooCommerce
    add_theme_support('woocommerce');
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');

    // Register Navigation Menus
    register_nav_menus([
        'primary' => __('Primary Navigation', 'vencilla'),
        'footer'  => __('Footer Navigation', 'vencilla'),
    ]);

    // Custom Image Sizes
    add_image_size('vencilla-product', 800, 600, true);
    add_image_size('vencilla-card', 600, 400, true);
    add_image_size('vencilla-hero', 1920, 1080, true);
}
add_action('after_setup_theme', 'vencilla_theme_setup');

/**
 * 2. Enqueue Scripts and Styles
 */
function vencilla_enqueue_scripts() {
    // Master Stylesheet
    wp_enqueue_style('vencilla-style', get_stylesheet_uri(), [], '1.0.0');

    // Google Fonts
    wp_enqueue_style(
        'vencilla-google-fonts',
        'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap',
        [],
        null
    );

    // Three.js CDN for 3D hero visualization
    wp_enqueue_script('three-js', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js', [], '134', true);

    // Main Theme JavaScript
    wp_enqueue_script('vencilla-main', get_template_directory_uri() . '/assets/js/vencilla-main.js', [], '1.0.0', true);

    // Forms AJAX Handler JavaScript
    wp_enqueue_script('vencilla-forms', get_template_directory_uri() . '/assets/js/vencilla-forms.js', [], '1.0.0', true);

    // 3D Scene Controller
    wp_enqueue_script('vencilla-3d', get_template_directory_uri() . '/assets/js/vencilla-3d.js', ['three-js'], '1.0.0', true);

    // Localize Script for AJAX URLs and Nonces
    wp_localize_script('vencilla-forms', 'vencillaAjax', [
        'url'   => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('vencilla_nonce'),
    ]);
}
add_action('wp_enqueue_scripts', 'vencilla_enqueue_scripts');

/**
 * 3. Disable Default WooCommerce Styles to Prevent Clashes
 */
add_filter('woocommerce_enqueue_styles', '__return_empty_array');

/**
 * 4. Custom Excerpt Length
 */
function vencilla_custom_excerpt_length($length) {
    return 22;
}
add_filter('excerpt_length', 'vencilla_custom_excerpt_length', 999);

/**
 * 5. Helper Functions
 */
function vencilla_get_asset_url($path = '') {
    return esc_url(get_template_directory_uri() . '/assets/' . ltrim($path, '/'));
}

function vencilla_get_division_color($division = 'textiles') {
    return ($division === 'textiles') ? '#C9A24B' : '#00BCD4';
}

function vencilla_whatsapp_url($message = '') {
    $phone = '917622009300';
    $text = $message ? urlencode($message) : urlencode('Hello Vencilla Commercial Team, I am interested in inquiring about your export products.');
    return 'https://wa.me/' . $phone . '?text=' . $text;
}

/**
 * 6. Register Custom Post Types for Storing Leads
 */
function vencilla_register_lead_cpts() {
    register_post_type('vc_enquiry', [
        'labels' => [
            'name'          => __('Enquiries', 'vencilla'),
            'singular_name' => __('Enquiry', 'vencilla'),
        ],
        'public'       => false,
        'show_ui'      => true,
        'supports'     => ['title', 'custom-fields'],
        'menu_icon'    => 'dashicons-email',
        'show_in_menu' => true,
    ]);

    register_post_type('vc_quote_request', [
        'labels' => [
            'name'          => __('Quote Requests', 'vencilla'),
            'singular_name' => __('Quote Request', 'vencilla'),
        ],
        'public'       => false,
        'show_ui'      => true,
        'supports'     => ['title', 'custom-fields'],
        'menu_icon'    => 'dashicons-media-document',
        'show_in_menu' => true,
    ]);
}
add_action('init', 'vencilla_register_lead_cpts');

/**
 * 7. Load Modular Theme Includes
 */
require_once get_template_directory() . '/inc/woocommerce.php';
require_once get_template_directory() . '/inc/rest-api.php';
require_once get_template_directory() . '/inc/enquiry-handler.php';
require_once get_template_directory() . '/inc/quote-handler.php';
require_once get_template_directory() . '/inc/admin-columns.php';
require_once get_template_directory() . '/inc/seed-products.php';

