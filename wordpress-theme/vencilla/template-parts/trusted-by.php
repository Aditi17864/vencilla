<?php
/**
 * Template part for displaying the Trusted By section.
 *
 * @package Vencilla
 */
?>

<section class="trusted-by-section py-20 bg-[#F9F6F0]">
    <div class="container-vc text-center">
        <h2 class="font-serif-luxury text-3xl md:text-4xl text-dark mb-4">
            <?php esc_html_e( 'Trusted by Businesses Worldwide', 'vencilla' ); ?>
        </h2>
        
        <div class="flex items-center justify-center gap-4 mb-12">
            <div class="h-px bg-gold/50 w-16"></div>
            <div class="w-2 h-2 rotate-45 bg-gold"></div>
            <div class="h-px bg-gold/50 w-16"></div>
        </div>

        <div class="clients-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            
            <div class="client-card bg-white border border-gold/20 p-6 rounded-lg shadow-sm hover:shadow-md hover:border-gold transition-all flex flex-col items-center justify-center text-center">
                <div class="w-12 h-12 bg-dark text-gold font-serif-luxury flex items-center justify-center rounded-full text-xl mb-3">A</div>
                <h4 class="text-sm font-bold text-dark leading-tight mb-1"><?php esc_html_e( 'Apex Global Textiles', 'vencilla' ); ?></h4>
                <p class="text-xs text-gray-500"><?php esc_html_e( 'UK Import Partner', 'vencilla' ); ?></p>
            </div>

            <div class="client-card bg-white border border-gold/20 p-6 rounded-lg shadow-sm hover:shadow-md hover:border-gold transition-all flex flex-col items-center justify-center text-center">
                <div class="w-12 h-12 bg-dark text-gold font-serif-luxury flex items-center justify-center rounded-full text-xl mb-3">M</div>
                <h4 class="text-sm font-bold text-dark leading-tight mb-1"><?php esc_html_e( 'Medica Life Sciences', 'vencilla' ); ?></h4>
                <p class="text-xs text-gray-500"><?php esc_html_e( 'EU Pharma Distributor', 'vencilla' ); ?></p>
            </div>

            <div class="client-card bg-white border border-gold/20 p-6 rounded-lg shadow-sm hover:shadow-md hover:border-gold transition-all flex flex-col items-center justify-center text-center">
                <div class="w-12 h-12 bg-dark text-gold font-serif-luxury flex items-center justify-center rounded-full text-xl mb-3">S</div>
                <h4 class="text-sm font-bold text-dark leading-tight mb-1"><?php esc_html_e( 'Sovereign Weavers', 'vencilla' ); ?></h4>
                <p class="text-xs text-gray-500"><?php esc_html_e( 'Middle East Partner', 'vencilla' ); ?></p>
            </div>

            <div class="client-card bg-white border border-gold/20 p-6 rounded-lg shadow-sm hover:shadow-md hover:border-gold transition-all flex flex-col items-center justify-center text-center">
                <div class="w-12 h-12 bg-dark text-gold font-serif-luxury flex items-center justify-center rounded-full text-xl mb-3">C</div>
                <h4 class="text-sm font-bold text-dark leading-tight mb-1"><?php esc_html_e( 'CuraHealth International', 'vencilla' ); ?></h4>
                <p class="text-xs text-gray-500"><?php esc_html_e( 'LatAm Healthcare', 'vencilla' ); ?></p>
            </div>

            <div class="client-card bg-white border border-gold/20 p-6 rounded-lg shadow-sm hover:shadow-md hover:border-gold transition-all flex flex-col items-center justify-center text-center">
                <div class="w-12 h-12 bg-dark text-gold font-serif-luxury flex items-center justify-center rounded-full text-xl mb-3">O</div>
                <h4 class="text-sm font-bold text-dark leading-tight mb-1"><?php esc_html_e( 'Orient Mills Co.', 'vencilla' ); ?></h4>
                <p class="text-xs text-gray-500"><?php esc_html_e( 'Asian Trade Partner', 'vencilla' ); ?></p>
            </div>

            <div class="client-card bg-white border border-gold/20 p-6 rounded-lg shadow-sm hover:shadow-md hover:border-gold transition-all flex flex-col items-center justify-center text-center">
                <div class="w-12 h-12 bg-dark text-gold font-serif-luxury flex items-center justify-center rounded-full text-xl mb-3">V</div>
                <h4 class="text-sm font-bold text-dark leading-tight mb-1"><?php esc_html_e( 'Vanguard Biopharma', 'vencilla' ); ?></h4>
                <p class="text-xs text-gray-500"><?php esc_html_e( 'African Distribution', 'vencilla' ); ?></p>
            </div>
            
        </div>
    </div>
</section>
