<?php
/**
 * The template for displaying archive pages
 *
 * @package Vencilla
 */

get_header(); ?>

<main id="primary" class="site-main bg-[#07090E] min-h-screen">
    <!-- Archive Hero Section -->
    <section class="pt-32 pb-16 relative overflow-hidden">
        <div class="container-vc relative z-10 text-center">
            <span class="eyebrow block text-[#C9A24B] uppercase tracking-widest text-sm mb-4">ARCHIVES</span>
            <?php the_archive_title( '<h1 class="font-serif-luxury text-4xl md:text-6xl text-white mb-6">', '</h1>' ); ?>
            <?php the_archive_description( '<div class="archive-description text-gray-300 max-w-2xl mx-auto mb-6">', '</div>' ); ?>
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
                                    <?php the_post_thumbnail( 'large', array( 'class' => 'w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500' ) ); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="flex items-center space-x-2 text-sm text-[#00BCD4] mb-3">
                            <?php
                            $tags = get_the_tags();
                            if ( $tags ) {
                                foreach ( $tags as $tag ) {
                                    echo '<span class="px-2 py-1 bg-[#00BCD4]/10 rounded text-xs">' . esc_html( $tag->name ) . '</span> ';
                                }
                            } else {
                                $categories = get_the_category();
                                if ( ! empty( $categories ) ) {
                                    echo esc_html( $categories[0]->name );
                                }
                            }
                            ?>
                        </div>

                        <h2 class="font-serif-luxury text-xl md:text-2xl text-white mb-3 hover:text-[#C9A24B] transition-colors">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>

                        <div class="text-gray-400 mb-6 flex-grow">
                            <?php echo wp_trim_words( get_the_excerpt(), 20, '...' ); ?>
                        </div>

                        <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
                            <a href="<?php the_permalink(); ?>" class="text-[#C9A24B] hover:text-white uppercase text-sm tracking-wider flex items-center gap-2 group">
                                Read Article <span class="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                            <div class="text-gray-500 text-xs text-right">
                                <div><?php echo get_the_date(); ?></div>
                                <div class="text-[#F9F6F0]/60">by <?php the_author(); ?></div>
                            </div>
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
