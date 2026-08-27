<?php
/**
 * The template for displaying all pages
 *
 * @package Vencilla
 */

get_header(); ?>

<main id="primary" class="site-main pt-28 bg-[#07090E] text-white min-h-screen">
    <div class="container-vc">
        <?php
        while ( have_posts() ) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header mb-8">
                    <?php the_title( '<h1 class="entry-title font-serif-luxury text-4xl md:text-5xl text-gold-gradient mb-4">', '</h1>' ); ?>
                    <div class="gold-divider-left h-1 w-24 bg-gradient-to-r from-[#C9A24B] to-[#F3E5AB]"></div>
                </header><!-- .entry-header -->

                <div class="entry-content prose prose-invert max-w-none">
                    <?php
                    the_content();

                    wp_link_pages(
                        array(
                            'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'vencilla' ),
                            'after'  => '</div>',
                        )
                    );
                    ?>
                </div><!-- .entry-content -->
            </article><!-- #post-<?php the_ID(); ?> -->
            <?php
        endwhile; // End of the loop.
        ?>
    </div>
</main><!-- #main -->

<?php get_footer(); ?>
