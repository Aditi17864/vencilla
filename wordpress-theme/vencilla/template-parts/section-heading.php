<?php
/**
 * Template part for displaying a reusable section heading.
 *
 * @package Vencilla
 */

$eyebrow  = isset( $args['eyebrow'] ) ? $args['eyebrow'] : '';
$title    = isset( $args['title'] ) ? $args['title'] : '';
$subtitle = isset( $args['subtitle'] ) ? $args['subtitle'] : '';
$align    = isset( $args['align'] ) ? $args['align'] : 'center';

$align_class = ( 'left' === $align ) ? 'text-left' : 'text-center';
$divider_class = ( 'left' === $align ) ? 'gold-divider-left' : 'gold-divider-center';
$subtitle_margin = ( 'left' === $align ) ? 'mr-auto' : 'mx-auto';
?>

<div class="section-header <?php echo esc_attr( $align_class ); ?> mb-12">
    <?php if ( ! empty( $eyebrow ) ) : ?>
        <span class="eyebrow block mb-2"><?php echo esc_html( $eyebrow ); ?></span>
    <?php endif; ?>
    
    <?php if ( ! empty( $title ) ) : ?>
        <h2 class="font-serif-luxury text-3xl md:text-4xl mb-4 text-inherit">
            <?php echo esc_html( $title ); ?>
        </h2>
    <?php endif; ?>
    
    <div class="<?php echo esc_attr( $divider_class ); ?> mb-6"></div>
    
    <?php if ( ! empty( $subtitle ) ) : ?>
        <p class="max-w-2xl text-gray-500 <?php echo esc_attr( $subtitle_margin ); ?>">
            <?php echo esc_html( $subtitle ); ?>
        </p>
    <?php endif; ?>
</div>
