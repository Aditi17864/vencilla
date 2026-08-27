<?php
/**
 * The template for displaying all single posts
 *
 * @package Vencilla
 */

get_header(); ?>

<main id="primary" class="site-main bg-[#07090E] min-h-screen pt-28 pb-20">
    <?php
    while ( have_posts() ) :
        the_post();
        ?>
        <!-- Single Post Hero -->
        <header class="container-vc text-center mb-16">
            <div class="flex justify-center mb-6">
                <span class="bg-[#C9A24B]/20 text-[#C9A24B] px-4 py-1 rounded-full text-sm uppercase tracking-wider font-semibold">
                    <?php
                    $categories = get_the_category();
                    if ( ! empty( $categories ) ) {
                        echo esc_html( $categories[0]->name );
                    }
                    ?>
                </span>
            </div>
            
            <?php the_title( '<h1 class="font-serif-luxury text-4xl md:text-6xl text-white mb-6 leading-tight max-w-4xl mx-auto">', '</h1>' ); ?>
            
            <div class="flex items-center justify-center space-x-4 text-gray-400 text-sm">
                <span><i class="far fa-calendar-alt mr-2"></i><?php echo get_the_date(); ?></span>
                <span>•</span>
                <span><i class="far fa-user mr-2"></i><?php the_author(); ?></span>
            </div>
        </header>

        <div class="container-vc single-post-layout flex flex-col lg:flex-row gap-12">
            
            <!-- Main Content Area -->
            <article id="post-<?php the_ID(); ?>" <?php post_class('lg:w-2/3'); ?>>
                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="mb-10 rounded-xl overflow-hidden shadow-2xl">
                        <?php the_post_thumbnail( 'full', array( 'class' => 'w-full h-auto object-cover max-h-[600px]' ) ); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content prose prose-invert prose-lg max-w-none text-[#F9F6F0]/80 marker:text-[#C9A24B]">
                    <?php
                    the_content();
                    wp_link_pages( array(
                        'before' => '<div class="page-links mt-8"><span class="mr-2 text-white">' . esc_html__( 'Pages:', 'vencilla' ) . '</span>',
                        'after'  => '</div>',
                    ) );
                    ?>
                </div>

                <!-- Social Share -->
                <div class="mt-12 pt-8 border-t border-gray-800 flex items-center justify-between">
                    <h3 class="text-white font-semibold">Share this article:</h3>
                    <div class="flex space-x-4">
                        <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode(get_permalink()); ?>&text=<?php echo urlencode(get_the_title()); ?>" target="_blank" class="text-gray-400 hover:text-[#00BCD4] transition-colors"><i class="fab fa-twitter text-xl"></i></a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>" target="_blank" class="text-gray-400 hover:text-[#00BCD4] transition-colors"><i class="fab fa-facebook text-xl"></i></a>
                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo urlencode(get_permalink()); ?>&title=<?php echo urlencode(get_the_title()); ?>" target="_blank" class="text-gray-400 hover:text-[#00BCD4] transition-colors"><i class="fab fa-linkedin text-xl"></i></a>
                    </div>
                </div>
            </article>

            <!-- Sidebar -->
            <aside class="lg:w-1/3 space-y-10">
                <!-- Categories Widget -->
                <div class="glass-card p-8 rounded-xl">
                    <h3 class="font-serif-luxury text-2xl text-white mb-6 border-b border-gray-800 pb-4">Categories</h3>
                    <ul class="space-y-3">
                        <?php
                        $cats = get_categories();
                        foreach($cats as $cat) {
                            echo '<li><a href="'.get_category_link($cat->term_id).'" class="text-gray-400 hover:text-[#C9A24B] flex justify-between items-center transition-colors"><span>' . $cat->name . '</span> <span class="bg-gray-800 text-xs px-2 py-1 rounded">' . $cat->count . '</span></a></li>';
                        }
                        ?>
                    </ul>
                </div>

                <!-- Related Posts -->
                <div class="glass-card p-8 rounded-xl">
                    <h3 class="font-serif-luxury text-2xl text-white mb-6 border-b border-gray-800 pb-4">Recent News</h3>
                    <div class="space-y-6">
                        <?php
                        $recent_posts = new WP_Query(array(
                            'post_type'      => 'post',
                            'posts_per_page' => 3,
                            'post__not_in'   => array(get_the_ID())
                        ));
                        
                        if ($recent_posts->have_posts()) :
                            while ($recent_posts->have_posts()) : $recent_posts->the_post();
                        ?>
                            <div class="flex gap-4 group">
                                <?php if (has_post_thumbnail()) : ?>
                                    <div class="w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                                        <?php the_post_thumbnail('thumbnail', array('class' => 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-300')); ?>
                                    </div>
                                <?php endif; ?>
                                <div>
                                    <h4 class="text-white font-medium text-sm leading-tight mb-2 group-hover:text-[#C9A24B] transition-colors">
                                        <a href="<?php the_permalink(); ?>"><?php echo wp_trim_words(get_the_title(), 8); ?></a>
                                    </h4>
                                    <span class="text-gray-500 text-xs"><?php echo get_the_date(); ?></span>
                                </div>
                            </div>
                        <?php
                            endwhile;
                            wp_reset_postdata();
                        endif;
                        ?>
                    </div>
                </div>
            </aside>
            
        </div><!-- .single-post-layout -->
        <?php
    endwhile; // End of the loop.
    ?>
</main>

<?php get_footer(); ?>
