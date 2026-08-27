<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" id="site-header">
    <div class="container-vc header-inner">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo-link">
            <?php if ( function_exists('vencilla_get_asset_url') ) : ?>
                <img src="<?php echo esc_url( vencilla_get_asset_url( 'images/logo-transparent.png' ) ); ?>" alt="Vencilla" class="logo-img">
            <?php else: ?>
                <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/logo-transparent.png' ); ?>" alt="Vencilla" class="logo-img">
            <?php endif; ?>
            <div class="logo-text">
                <span class="font-serif-luxury text-xl tracking">VENCILLA</span>
                <span class="eyebrow" style="color: #C9A24B; text-transform: uppercase;">GLOBAL EXCELLENCE</span>
            </div>
        </a>

        <nav class="nav-desktop">
            <?php
            if ( has_nav_menu( 'primary' ) ) {
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'nav-links',
                ) );
            } else {
                get_template_part( 'template-parts/navigation' );
            }
            ?>
        </nav>

        <a href="<?php echo esc_url( home_url( '/request-a-quote' ) ); ?>" class="btn-primary">REQUEST QUOTE &rarr;</a>

        <button class="hamburger-btn" id="hamburger-btn" aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>

    <div class="mobile-menu" id="mobile-menu" style="display: none;">
        <?php get_template_part( 'template-parts/navigation' ); ?>
        <a href="<?php echo esc_url( home_url( '/request-a-quote' ) ); ?>" class="btn-primary">REQUEST QUOTE &rarr;</a>
    </div>
</header>
