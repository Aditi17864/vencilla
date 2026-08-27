<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package Vencilla
 */

get_header(); ?>

<main id="primary" class="site-main bg-[#07090E] min-h-screen flex items-center justify-center pt-20">
    <div class="container-vc text-center">
        <div class="max-w-2xl mx-auto glass-card p-12 rounded-2xl relative overflow-hidden">
            <!-- Decorative elements -->
            <div class="absolute -top-20 -left-20 w-40 h-40 bg-[#C9A24B]/10 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-20 -right-20 w-40 h-40 bg-[#00BCD4]/10 rounded-full blur-3xl"></div>
            
            <div class="relative z-10">
                <h1 class="font-serif-luxury text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C9A24B] via-[#F3E5AB] to-[#9A772B] mb-2 leading-none">
                    404
                </h1>
                
                <h2 class="font-serif-luxury text-3xl md:text-4xl text-white mb-6">Page Not Found</h2>
                
                <div class="gold-divider-center h-1 w-24 mx-auto bg-gradient-to-r from-[#C9A24B] to-[#F3E5AB] mb-8"></div>
                
                <p class="text-gray-300 text-lg mb-10 max-w-md mx-auto">
                    The page you are looking for may have moved, been renamed, or no longer exists.
                </p>
                
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn-primary w-full sm:w-auto px-8 py-3 rounded text-sm font-semibold tracking-wider hover:shadow-lg hover:shadow-[#C9A24B]/20 transition-all text-center">
                        Return to Homepage →
                    </a>
                    
                    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn-secondary border-2 border-gray-600 text-white hover:border-[#00BCD4] hover:text-[#00BCD4] w-full sm:w-auto px-8 py-3 rounded text-sm font-semibold uppercase tracking-wider transition-all text-center">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
