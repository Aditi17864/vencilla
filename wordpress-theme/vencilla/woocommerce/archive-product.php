<?php
/**
 * The Template for displaying product archives (Products Catalogue Page)
 * Replaces React Products.jsx exactly.
 *
 * @package Vencilla
 */

defined('ABSPATH') || exit;

get_header('shop');
?>

<div class="site-main" style="background: #07090E; padding-top: 80px; min-height: 100vh;">

    <!-- 1. Hero Header Banner -->
    <section class="section" style="background: linear-gradient(135deg, #0C121D 0%, #07090E 100%); border-bottom: 1px solid rgba(201,162,75,0.25); text-align: left; padding: 4.5rem 0 3.5rem;">
        <div class="container-vc">
            <span class="eyebrow" style="margin-bottom: 0.5rem;">VENCILLA B2B PRODUCT CATALOGUE</span>
            <h1 class="font-serif-luxury" style="font-size: 3rem; font-weight: 800; color: #FFFFFF; margin-bottom: 1rem;">
                Textiles & Pharmaceuticals Portfolio
            </h1>
            <p style="color: rgba(255,255,255,0.7); max-width: 700px; font-size: 1rem; line-height: 1.6; margin-bottom: 2rem;">
                Browse our full export portfolio of high-grade fabrics, custom jacquards, active pharmaceutical ingredients (APIs), and sterile formulations.
            </p>

            <!-- Division Switcher Buttons -->
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                <a href="<?php echo esc_url(wc_get_page_permalink('shop')); ?>" class="btn-primary" style="background: #FFFFFF; color: #07090E !important; border-color: #FFFFFF; font-size: 0.75rem; padding: 0.65rem 1.4rem;">
                    ALL DIVISIONS
                </a>
                <a href="<?php echo esc_url(get_term_link('textiles', 'product_cat')); ?>" class="btn-primary" style="font-size: 0.75rem; padding: 0.65rem 1.4rem;">
                    TEXTILES CATALOGUE
                </a>
                <a href="<?php echo esc_url(get_term_link('pharmaceuticals', 'product_cat')); ?>" class="btn-primary btn-pharma" style="font-size: 0.75rem; padding: 0.65rem 1.4rem;">
                    PHARMACEUTICALS & APIS
                </a>
            </div>
        </div>
    </section>

    <!-- 2. Sticky Realtime Filter & Search Bar -->
    <section class="sticky-filter-bar">
        <div class="container-vc filter-bar-inner">
            <!-- Search Input -->
            <div style="position: relative; width: 100%; max-width: 320px;">
                <input type="text" class="product-search-input" placeholder="Search by name, CAS, composition..." aria-label="Search catalogue">
            </div>

            <!-- Categories Tabs -->
            <div class="category-filter-list">
                <button type="button" class="category-filter-btn active" data-category="all">All</button>
                <?php
                $terms = get_terms([
                    'taxonomy'   => 'product_cat',
                    'hide_empty' => false,
                ]);
                if (!empty($terms) && !is_wp_error($terms)) {
                    foreach ($terms as $term) {
                        if ($term->slug !== 'uncategorized' && $term->slug !== 'textiles' && $term->slug !== 'pharmaceuticals') {
                            echo '<button type="button" class="category-filter-btn" data-category="' . esc_attr($term->name) . '">' . esc_html($term->name) . '</button>';
                        }
                    }
                }
                ?>
            </div>
        </div>
    </section>

    <!-- 3. Products Grid Section -->
    <section class="section" style="padding-top: 3.5rem;">
        <div class="container-vc">
            <?php if (woocommerce_product_loop()) : ?>
                <div class="product-grid">
                    <?php
                    while (have_posts()) : the_post();
                        do_action('woocommerce_shop_loop');
                        wc_get_template_part('content', 'product');
                    endwhile;
                    ?>
                </div>

                <!-- Empty Filter State (Hidden by default, triggered by JS search) -->
                <div class="products-empty-state glass-card" style="display: none; padding: 4rem 2rem; text-align: center; max-width: 550px; margin: 2rem auto;">
                    <h3 class="font-serif-luxury" style="color: #FFFFFF; margin-bottom: 0.5rem;">No Matching Products</h3>
                    <p style="color: rgba(255,255,255,0.65); font-size: 0.9rem;">Try adjusting your keyword search or category filter.</p>
                </div>

                <!-- Pagination -->
                <div style="margin-top: 3.5rem; text-align: center;">
                    <?php woocommerce_pagination(); ?>
                </div>
            <?php else : ?>
                <div class="glass-card" style="padding: 4rem 2rem; text-align: center; max-width: 550px; margin: 0 auto;">
                    <h3 class="font-serif-luxury" style="color: #FFFFFF; margin-bottom: 0.5rem;">Catalogue Updating</h3>
                    <p style="color: rgba(255,255,255,0.65); font-size: 0.9rem; margin-bottom: 1.5rem;">Products are currently being loaded into the catalog.</p>
                    <a href="<?php echo esc_url(home_url('/request-a-quote')); ?>" class="btn-primary">
                        Submit Custom RFQ &rarr;
                    </a>
                </div>
            <?php endif; ?>
        </div>
    </section>

</div>

<!-- Global Product Enquiry Modal -->
<?php get_template_part('template-parts/enquiry-modal'); ?>

<?php
get_footer('shop');
