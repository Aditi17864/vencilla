<?php
/**
 * Template part for displaying the Feature Icons section.
 *
 * @package Vencilla
 */
?>

<section class="feature-icons-section section bg-dark text-white">
    <div class="container-vc">
        <div class="section-header text-center mb-12">
            <span class="eyebrow block mb-2"><?php esc_html_e( 'WHY CHOOSE VENCILLA', 'vencilla' ); ?></span>
            <h2 class="font-serif-luxury text-4xl mb-4"><?php esc_html_e( 'Quality That Defines Us', 'vencilla' ); ?></h2>
            <div class="gold-divider-center"></div>
        </div>

        <div class="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <!-- Feature 1 -->
            <div class="feature-card glass-card text-center p-8 transition-transform hover:-translate-y-2 hover:border-gold reveal-item border border-white/10 rounded-xl bg-white/5 backdrop-blur">
                <div class="icon-wrapper w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <svg class="text-gold" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <h3 class="font-serif-luxury text-xl mb-3 text-gold-light"><?php esc_html_e( 'Premium Quality', 'vencilla' ); ?></h3>
                <p class="text-sm text-gray-400"><?php esc_html_e( 'We use raw materials and follow strict quality controls.', 'vencilla' ); ?></p>
            </div>

            <!-- Feature 2 -->
            <div class="feature-card glass-card text-center p-8 transition-transform hover:-translate-y-2 hover:border-gold reveal-item border border-white/10 rounded-xl bg-white/5 backdrop-blur" style="transition-delay: 100ms;">
                <div class="icon-wrapper w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <svg class="text-gold" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </div>
                <h3 class="font-serif-luxury text-xl mb-3 text-gold-light"><?php esc_html_e( 'Custom Solutions', 'vencilla' ); ?></h3>
                <p class="text-sm text-gray-400"><?php esc_html_e( 'Customization services as per your specific needs.', 'vencilla' ); ?></p>
            </div>

            <!-- Feature 3 -->
            <div class="feature-card glass-card text-center p-8 transition-transform hover:-translate-y-2 hover:border-gold reveal-item border border-white/10 rounded-xl bg-white/5 backdrop-blur" style="transition-delay: 200ms;">
                <div class="icon-wrapper w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <svg class="text-gold" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3 class="font-serif-luxury text-xl mb-3 text-gold-light"><?php esc_html_e( 'Timely Delivery', 'vencilla' ); ?></h3>
                <p class="text-sm text-gray-400"><?php esc_html_e( 'On-time delivery with safe & secure packaging.', 'vencilla' ); ?></p>
            </div>

            <!-- Feature 4 -->
            <div class="feature-card glass-card text-center p-8 transition-transform hover:-translate-y-2 hover:border-gold reveal-item border border-white/10 rounded-xl bg-white/5 backdrop-blur" style="transition-delay: 300ms;">
                <div class="icon-wrapper w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <svg class="text-gold" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <h3 class="font-serif-luxury text-xl mb-3 text-gold-light"><?php esc_html_e( 'Global Standards', 'vencilla' ); ?></h3>
                <p class="text-sm text-gray-400"><?php esc_html_e( 'Consistent with international quality standards worldwide.', 'vencilla' ); ?></p>
            </div>
            
        </div>
    </div>
</section>
