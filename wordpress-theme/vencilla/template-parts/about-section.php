<?php
/**
 * Template part for displaying the About Section.
 *
 * @package Vencilla
 */
?>

<section class="about-section section">
    <div class="decorative-corner top-left">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M0 0h64v1H1v63H0V0z" fill="#C9A24B"/></svg>
    </div>
    <div class="decorative-corner top-right">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M64 0H0v1h63v63h1V0z" fill="#C9A24B"/></svg>
    </div>
    <div class="decorative-circle dashed-gold"></div>

    <div class="container-vc">
        <div class="about-grid">
            <!-- Left Column -->
            <div class="about-left">
                <div class="eyebrow"><?php esc_html_e( 'WHO WE ARE', 'vencilla' ); ?></div>
                <h2 class="font-serif-luxury text-4xl mb-4">
                    <?php echo wp_kses_post( __( 'Crafting Excellence.<br>Delivering Trust.', 'vencilla' ) ); ?>
                </h2>
                <div class="gold-divider-left mb-6"></div>
                <p class="mb-8">
                    <?php esc_html_e( 'At Vencilla, we bridge the gap between uncompromising quality and global accessibility. From our state-of-the-art textile mills weaving premium fabrics to our GMP-certified pharmaceutical units producing life-saving medications, our commitment remains singular: excellence without exception.', 'vencilla' ); ?>
                </p>
                <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="btn-primary">
                    <?php esc_html_e( 'DISCOVER OUR STORY &rarr;', 'vencilla' ); ?>
                </a>
            </div>

            <!-- Center Column -->
            <div class="about-center">
                <div class="glass-card map-card relative overflow-hidden">
                    <img src="<?php echo esc_url( vencilla_get_asset_url('images/textures/gold_world_map.jpg') ); ?>" alt="<?php esc_attr_e( 'Global Presence Map', 'vencilla' ); ?>" class="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen" />
                    <div class="map-overlay absolute inset-0 bg-dark/80"></div>
                    <div class="relative z-10 p-8 h-full flex flex-col justify-end">
                        <h3 class="font-serif-luxury text-white text-2xl mb-2"><?php esc_html_e( 'GLOBAL REACH. STRONGER TOGETHER.', 'vencilla' ); ?></h3>
                        <p class="text-gray-300 text-sm mb-4"><?php esc_html_e( 'Exporting to 50+ countries with a robust supply chain network ensuring timely and secure deliveries across continents.', 'vencilla' ); ?></p>
                        <a href="<?php echo esc_url( home_url( '/global-presence' ) ); ?>" class="text-gold hover:text-gold-light transition-colors text-sm font-semibold uppercase tracking-wider">
                            <?php esc_html_e( 'VIEW OUR GLOBAL PRESENCE &rarr;', 'vencilla' ); ?>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Right Column -->
            <div class="about-right">
                <div class="eyebrow mb-6"><?php esc_html_e( 'OUR COMMITMENT', 'vencilla' ); ?></div>
                <div class="commitments-list flex flex-col gap-6">
                    <div class="commitment-item flex gap-4">
                        <div class="check-icon text-green-500 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </div>
                        <div>
                            <h4 class="font-semibold text-lg mb-1"><?php esc_html_e( 'Uncompromising Quality', 'vencilla' ); ?></h4>
                            <p class="text-sm text-gray-600"><?php esc_html_e( 'International standards. Zero compromise.', 'vencilla' ); ?></p>
                        </div>
                    </div>
                    
                    <div class="commitment-item flex gap-4">
                        <div class="check-icon text-green-500 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </div>
                        <div>
                            <h4 class="font-semibold text-lg mb-1"><?php esc_html_e( 'Innovation Driven', 'vencilla' ); ?></h4>
                            <p class="text-sm text-gray-600"><?php esc_html_e( 'Continuous innovation for a better tomorrow.', 'vencilla' ); ?></p>
                        </div>
                    </div>

                    <div class="commitment-item flex gap-4">
                        <div class="check-icon text-green-500 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </div>
                        <div>
                            <h4 class="font-semibold text-lg mb-1"><?php esc_html_e( 'Sustainable Practices', 'vencilla' ); ?></h4>
                            <p class="text-sm text-gray-600"><?php esc_html_e( 'Responsible manufacturing for a sustainable world.', 'vencilla' ); ?></p>
                        </div>
                    </div>

                    <div class="commitment-item flex gap-4">
                        <div class="check-icon text-green-500 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </div>
                        <div>
                            <h4 class="font-semibold text-lg mb-1"><?php esc_html_e( 'Customer First', 'vencilla' ); ?></h4>
                            <p class="text-sm text-gray-600"><?php esc_html_e( 'Your success is our priority.', 'vencilla' ); ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
