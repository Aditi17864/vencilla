<?php
/**
 * Template part for displaying the Hero section on the homepage.
 *
 * @package Vencilla
 */
?>

<section class="hero-section" id="hero-home">
    <div class="hero-canvas-container" id="hero-canvas">
        <!-- Three.js will render here -->
    </div>
    <div class="hero-overlay-gradient"></div>
    
    <div class="container-vc hero-content">
        <div class="hero-left">
            <div class="hero-badge">
                <span class="gold-dot"></span> <?php esc_html_e( 'TRUSTED IN 50+ COUNTRIES', 'vencilla' ); ?>
            </div>
            
            <div class="hero-eyebrow eyebrow">
                <?php esc_html_e( 'VENCILLA GLOBAL EXCELLENCE', 'vencilla' ); ?>
            </div>
            
            <h1 class="hero-title font-serif-luxury">
                <?php echo wp_kses_post( __( 'Precision Textiles. <br> <span class="text-gold-gradient">Pharmaceutical</span> Excellence.', 'vencilla' ) ); ?>
            </h1>
            
            <p class="hero-subtitle">
                <?php esc_html_e( 'Vencilla is a premier manufacturer and exporter delivering uncompromising quality in textiles and pharmaceuticals to over 50 countries worldwide.', 'vencilla' ); ?>
            </p>
            
            <div class="hero-actions">
                <a href="<?php echo esc_url( home_url( '/products' ) ); ?>" class="btn-primary">
                    <?php esc_html_e( 'EXPLORE PRODUCTS &rarr;', 'vencilla' ); ?>
                </a>
                <a href="<?php echo esc_url( home_url( '/request-a-quote' ) ); ?>" class="btn-secondary">
                    <?php esc_html_e( 'REQUEST QUOTE', 'vencilla' ); ?>
                </a>
            </div>
            
            <div class="hero-certifications">
                <span class="cert-badge"><?php esc_html_e( 'WHO-GMP', 'vencilla' ); ?></span>
                <span class="cert-badge"><?php esc_html_e( 'ISO 9001:2015', 'vencilla' ); ?></span>
                <span class="cert-badge"><?php esc_html_e( 'OEKO-TEX', 'vencilla' ); ?></span>
                <span class="cert-badge"><?php esc_html_e( 'CEP', 'vencilla' ); ?></span>
            </div>
        </div>
        
        <div class="hero-right hidden-mobile">
            <canvas id="three-canvas"></canvas>
            <div class="fallback-3d-card glass-card">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 2v7.5"></path>
                    <path d="M14 2v7.5"></path>
                    <path d="M8 2h8"></path>
                    <path d="M7 10h10"></path>
                    <path d="M7 10a5 5 0 0 0-5 5v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a5 5 0 0 0-5-5"></path>
                </svg>
            </div>
        </div>
    </div>
    
    <div class="hero-particles"></div>
    <div class="gold-grid-lines"></div>
</section>
