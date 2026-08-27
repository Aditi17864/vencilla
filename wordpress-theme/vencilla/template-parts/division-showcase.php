<?php
/**
 * Template part for displaying the Division Showcase section.
 *
 * @package Vencilla
 */
?>

<section class="division-showcase section bg-dark text-white">
    <div class="container-vc">
        <div class="section-header text-center mb-12">
            <span class="eyebrow block mb-2"><?php esc_html_e( 'EXPLORE OUR DIVISIONS IN INTERACTIVE 3D', 'vencilla' ); ?></span>
            <h2 class="font-serif-luxury text-4xl mb-4"><?php esc_html_e( 'Mastery in Textiles & Excellence in Pharmaceuticals', 'vencilla' ); ?></h2>
            <div class="gold-divider-center mb-6"></div>
            <p class="max-w-2xl mx-auto text-gray-400">
                <?php esc_html_e( 'Experience the intricate details of our premium fabrics and the precision of our pharmaceutical packaging through our interactive 3D viewers.', 'vencilla' ); ?>
            </p>
        </div>

        <div class="division-tabs flex justify-center gap-4 mb-12">
            <button class="division-tab-btn active bg-dark border border-gold text-gold hover:bg-gold/10 px-6 py-3 rounded uppercase tracking-wider font-semibold text-sm transition-all flex items-center gap-2" data-tab="textiles">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h13.4a2 2 0 0 1 1.6 3.2l-2.67 2.13a2 2 0 0 0 0 3.14l2.67 2.13a2 2 0 0 1-1.6 3.2H6a2 2 0 0 0-2 2z"></path></svg>
                <?php esc_html_e( '3D ROYAL SILK & FABRIC DRAPERY', 'vencilla' ); ?>
            </button>
            <button class="division-tab-btn bg-dark border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-6 py-3 rounded uppercase tracking-wider font-semibold text-sm transition-all flex items-center gap-2" data-tab="pharma">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="9" width="16" height="10" rx="2" ry="2"></rect><path d="M4 13h16"></path><path d="M12 9V5"></path><path d="M9 5h6"></path></svg>
                <?php esc_html_e( '3D PHARMA & POPPING CAP', 'vencilla' ); ?>
            </button>
        </div>

        <div class="division-tab-content grid grid-cols-12 gap-8 active" data-content="textiles">
            <div class="col-span-12 lg:col-span-7">
                <div class="textile-3d-container relative rounded-xl overflow-hidden shadow-2xl shadow-gold/20" style="perspective: 1000px;">
                    <div class="w-full aspect-[4/3] bg-dark relative border border-gold/30 rounded-xl overflow-hidden transition-transform duration-500 hover:rotate-y-[-5deg]" style="transform: rotateY(-15deg); transform-style: preserve-3d;">
                        <img src="<?php echo esc_url( vencilla_get_asset_url('images/textures/luxury_fabric_drape.jpg') ); ?>" alt="<?php esc_attr_e( 'Luxury Fabric Drape', 'vencilla' ); ?>" class="absolute inset-0 w-full h-full object-cover opacity-80" />
                        <div class="absolute inset-0 bg-gradient-to-tr from-dark/80 via-transparent to-gold/20 mix-blend-overlay"></div>
                        <div class="absolute inset-0 shimmer-effect pointer-events-none"></div>
                        <div class="absolute bottom-4 right-4 bg-dark/80 border border-gold backdrop-blur px-4 py-2 rounded text-xs text-gold uppercase tracking-widest font-semibold flex items-center gap-2">
                            <span class="animate-pulse w-2 h-2 rounded-full bg-gold"></span> <?php esc_html_e( 'Interactive 3D View', 'vencilla' ); ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-5 flex flex-col justify-center">
                <div class="eyebrow text-gold mb-2"><?php esc_html_e( 'VENCILLA TEXTILES DIVISION', 'vencilla' ); ?></div>
                <h3 class="font-serif-luxury text-3xl mb-4"><?php esc_html_e( 'Royal Persian & Indian Jacquard Fabrics', 'vencilla' ); ?></h3>
                <p class="text-gray-400 mb-6">
                    <?php esc_html_e( 'Discover our meticulously woven jacquards and silks. Experience the luxurious drape, intricate patterns, and unparalleled thread quality that define Vencilla Textiles.', 'vencilla' ); ?>
                </p>
                <ul class="space-y-3 mb-8 text-sm text-gray-300">
                    <li class="flex items-start gap-3">
                        <svg class="text-gold shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <?php esc_html_e( 'Custom Woven Jacquards', 'vencilla' ); ?>
                    </li>
                    <li class="flex items-start gap-3">
                        <svg class="text-gold shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <?php esc_html_e( 'Exporting to 50+ Countries', 'vencilla' ); ?>
                    </li>
                    <li class="flex items-start gap-3">
                        <svg class="text-gold shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <?php esc_html_e( 'Sustainable fibers and eco-friendly dyes', 'vencilla' ); ?>
                    </li>
                </ul>
                <a href="<?php echo esc_url( home_url( '/textiles' ) ); ?>" class="btn-primary inline-flex self-start">
                    <?php esc_html_e( 'VIEW TEXTILES CATALOGUE &rarr;', 'vencilla' ); ?>
                </a>
            </div>
        </div>

        <div class="division-tab-content grid grid-cols-12 gap-8 hidden" data-content="pharma">
            <div class="col-span-12 lg:col-span-7">
                <div class="pharma-3d-container relative rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 glass-card bg-dark/60 border-cyan-500/30 p-8 flex items-center justify-center min-h-[400px]">
                    <div class="relative z-10 text-center flex flex-col items-center">
                        <svg class="text-cyan-400 mb-6" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.5"></path><path d="M14 2v7.5"></path><path d="M8 2h8"></path><path d="M7 10h10"></path><path d="M7 10a5 5 0 0 0-5 5v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a5 5 0 0 0-5-5"></path></svg>
                        <h4 class="font-serif-luxury text-2xl text-white mb-2"><?php esc_html_e( '3D Interactive Glass Vial', 'vencilla' ); ?></h4>
                        <p class="text-cyan-200/60 text-sm mb-4"><?php esc_html_e( 'High-precision sterile packaging visualization', 'vencilla' ); ?></p>
                        <div class="bg-cyan-900/40 border border-cyan-500/50 px-4 py-2 rounded text-xs text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                            <span class="animate-ping w-2 h-2 rounded-full bg-cyan-400"></span> <?php esc_html_e( 'Interactive 3D View', 'vencilla' ); ?>
                        </div>
                    </div>
                    <div class="absolute top-4 right-4 bg-dark/80 border border-cyan-500/50 px-3 py-1 rounded text-xs text-cyan-400 uppercase font-bold">
                        <?php esc_html_e( 'ISO 9001:2015', 'vencilla' ); ?>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-5 flex flex-col justify-center">
                <div class="eyebrow text-cyan-400 mb-2"><?php esc_html_e( 'VENCILLA PHARMACEUTICALS DIVISION', 'vencilla' ); ?></div>
                <h3 class="font-serif-luxury text-3xl mb-4"><?php esc_html_e( 'GMP Certified Formulations & Sterile Liquids', 'vencilla' ); ?></h3>
                <p class="text-gray-400 mb-6">
                    <?php esc_html_e( 'Explore our highly regulated pharmaceutical manufacturing processes. From sterile injectables to specialized formulations, our facilities adhere to stringent global standards.', 'vencilla' ); ?>
                </p>
                <ul class="space-y-3 mb-8 text-sm text-gray-300">
                    <li class="flex items-start gap-3">
                        <svg class="text-cyan-500 shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <?php esc_html_e( 'WHO-GMP Compliant Facilities', 'vencilla' ); ?>
                    </li>
                    <li class="flex items-start gap-3">
                        <svg class="text-cyan-500 shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <?php esc_html_e( 'Sterile Injectables & Liquid Orals', 'vencilla' ); ?>
                    </li>
                    <li class="flex items-start gap-3">
                        <svg class="text-cyan-500 shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <?php esc_html_e( 'Advanced R&D capabilities', 'vencilla' ); ?>
                    </li>
                </ul>
                <a href="<?php echo esc_url( home_url( '/pharmaceuticals' ) ); ?>" class="btn-primary inline-flex self-start" style="background: linear-gradient(to right, #008ba3, #00BCD4); border-color: #00BCD4; color: white;">
                    <?php esc_html_e( 'VIEW PHARMA CATALOGUE &rarr;', 'vencilla' ); ?>
                </a>
            </div>
        </div>
    </div>
</section>
