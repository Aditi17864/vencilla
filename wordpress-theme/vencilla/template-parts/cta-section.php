<?php
/**
 * Template part for displaying a CTA section.
 *
 * @package Vencilla
 */

$eyebrow  = isset( $args['eyebrow'] ) ? $args['eyebrow'] : __( 'READY TO PARTNER WITH US?', 'vencilla' );
$title    = isset( $args['title'] ) ? $args['title'] : __( 'Let\'s Build a Successful Business Relationship', 'vencilla' );
$subtitle = isset( $args['subtitle'] ) ? $args['subtitle'] : __( 'Reach out to our global sales team to request product catalogs, samples, and competitive quotes tailored to your market needs.', 'vencilla' );
?>

<section class="cta-section section relative overflow-hidden bg-dark text-white">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/20 via-dark to-dark opacity-50"></div>
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    
    <div class="container-vc relative z-10">
        <div class="cta-box glass-card border border-gold/30 rounded-2xl max-w-4xl mx-auto p-12 md:p-16 text-center shadow-2xl shadow-gold/5 bg-dark/40 backdrop-blur-md">
            <span class="eyebrow block mb-4"><?php echo esc_html( $eyebrow ); ?></span>
            
            <h2 class="font-serif-luxury text-3xl md:text-5xl mb-6 leading-tight">
                <?php echo esc_html( $title ); ?>
            </h2>
            
            <div class="gold-divider-center mb-6"></div>
            
            <p class="text-gray-300 mb-10 max-w-2xl mx-auto">
                <?php echo esc_html( $subtitle ); ?>
            </p>
            
            <div class="cta-actions flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="<?php echo esc_url( home_url( '/request-a-quote' ) ); ?>" class="btn-primary w-full sm:w-auto">
                    <?php esc_html_e( 'Send Inquiry &rarr;', 'vencilla' ); ?>
                </a>
                <a href="<?php echo esc_url( 'https://wa.me/917622009300' ); ?>" target="_blank" rel="noopener noreferrer" class="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    <?php esc_html_e( 'Chat on WhatsApp', 'vencilla' ); ?>
                </a>
            </div>
        </div>
    </div>
</section>
