<?php
/**
 * The front page template file
 *
 * @package Vencilla
 */

get_header(); ?>

<main id="main">
    <?php get_template_part('template-parts/hero-home'); ?>
    <?php get_template_part('template-parts/stats-bar'); ?>
    <?php get_template_part('template-parts/about-section'); ?>
    <?php get_template_part('template-parts/division-showcase'); ?>
    <?php get_template_part('template-parts/feature-icons'); ?>
    <?php get_template_part('template-parts/trusted-by'); ?>
    
    <?php
    $cta_args = [
        'eyebrow'  => 'Partner With Us',
        'title'    => 'Looking for a specific product?',
        'subtitle' => 'Our team is ready to assist you with product information, samples and bulk enquiries.',
    ];
    get_template_part('template-parts/cta-section', null, $cta_args);
    ?>
</main>

<?php get_footer(); ?>
