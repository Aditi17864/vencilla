<?php
/**
 * The main template file
 *
 * @package Vencilla
 */

get_header(); ?>

<main id="primary" class="site-main bg-[#07090E] min-h-screen">
    <!-- Blog Hero Section -->
    <section class="pt-32 pb-16 relative overflow-hidden">
        <div class="container-vc relative z-10 text-center">
            <span class="eyebrow block text-[#C9A24B] uppercase tracking-widest text-sm mb-4">INSIGHTS</span>
            <h1 class="font-serif-luxury text-4xl md:text-6xl text-white mb-6">Industry News & Updates</h1>
            <div class="gold-divider-center h-1 w-24 mx-auto bg-gradient-to-r from-[#C9A24B] to-[#F3E5AB]"></div>
        </div>
        <div class="absolute inset-0 bg-[#07090E]/80 z-0"></div>
    </section>

    <div class="container-vc section">
        <?php if ( have_posts() ) : ?>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                while ( have_posts() ) :
                    the_post();
                    ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('glass-card p-6 rounded-xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300'); ?>>
                        <?php if ( has_post_thumbnail() ) : ?>
                            <div class="post-thumbnail mb-4 rounded-lg overflow-hidden">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail( 'large', array( 'class' => 'w-full h-48 object-cover hover:scale-105 transition-transform duration-500' ) ); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="flex items-center space-x-2 text-sm text-[#00BCD4] mb-3">
                            <?php
                            $categories = get_the_category();
                            if ( ! empty( $categories ) ) {
                                echo esc_html( $categories[0]->name );
                            }
                            ?>
                        </div>

                        <h2 class="font-serif-luxury text-xl md:text-2xl text-white mb-3 hover:text-[#C9A24B] transition-colors">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>

                        <div class="text-gray-400 mb-6 flex-grow">
                            <?php the_excerpt(); ?>
                        </div>

                        <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
                            <a href="<?php the_permalink(); ?>" class="text-[#C9A24B] hover:text-white uppercase text-sm tracking-wider flex items-center gap-2 group">
                                Read More <span class="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                            <span class="text-gray-500 text-sm"><?php echo get_the_date(); ?></span>
                        </div>
                    </article>
                <?php
                endwhile;
                ?>
            </div>

            <div class="mt-12 flex justify-center">
                <?php
                the_posts_pagination( array(
                    'mid_size'  => 2,
                    'prev_text' => __( '← Prev', 'vencilla' ),
                    'next_text' => __( 'Next →', 'vencilla' ),
                    'class'     => 'pagination-vc'
                ) );
                ?>
            </div>

        <?php else : ?>
            <div class="text-center text-white py-12">
                <h2 class="font-serif-luxury text-2xl text-[#C9A24B] mb-4">Nothing Found</h2>
                <p>Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
