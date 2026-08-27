<?php
/**
 * The template for displaying product content within loops
 *
 * @package Vencilla
 */

defined('ABSPATH') || exit;

global $product;

if (empty($product) || !$product->is_visible()) {
    return;
}

get_template_part('template-parts/product-card', null, ['product' => $product]);
