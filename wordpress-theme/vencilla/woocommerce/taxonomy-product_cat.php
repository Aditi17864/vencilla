<?php
/**
 * Product Category Taxonomy Archive Template
 * Renders dedicated custom layouts for /textiles and /pharmaceuticals divisions.
 *
 * @package Vencilla
 */

defined('ABSPATH') || exit;

get_header('shop');

$current_term = get_queried_object();
$is_textiles  = ($current_term->slug === 'textiles' || term_is_ancestor_of(get_term_by('slug', 'textiles', 'product_cat')->term_id ?? 0, $current_term->term_id, 'product_cat'));
$division_name = $is_textiles ? 'Textiles' : 'Pharmaceuticals';
$accent_color  = $is_textiles ? '#C9A24B' : '#00BCD4';
?>

<div class="site-main" style="background: #07090E; padding-top: 80px; min-height: 100vh;">

    <!-- 1. Dedicated Division Hero Banner -->
    <section class="section" style="background: <?php echo $is_textiles ? 'linear-gradient(135deg, #141008 0%, #07090E 100%)' : 'linear-gradient(135deg, #061A2B 0%, #07090E 100%)'; ?>; border-bottom: 1px solid <?php echo $is_textiles ? 'rgba(201,162,75,0.3)' : 'rgba(0,188,212,0.3)'; ?>; padding: 5rem 0 4rem; text-align: left;">
        <div class="container-vc">
            <span class="eyebrow" style="color: <?php echo esc_attr($accent_color); ?>; margin-bottom: 0.75rem;">
                VENCILLA <?php echo esc_html(strtoupper($division_name)); ?> DIVISION
            </span>
            <h1 class="font-serif-luxury" style="font-size: 3.25rem; font-weight: 800; color: #FFFFFF; max-width: 850px; line-height: 1.15; margin-bottom: 1.25rem;">
                <?php echo $is_textiles ? 'Royal Jacquards, Silk Brocades & African Wax Prints' : 'WHO-GMP Certified Active Pharmaceutical Ingredients'; ?>
            </h1>
            <div class="gold-divider" style="background: linear-gradient(90deg, <?php echo esc_attr($accent_color); ?>, transparent);"></div>
            <p style="color: rgba(255,255,255,0.75); font-size: 1.05rem; line-height: 1.7; max-width: 750px; margin-bottom: 2rem;">
                <?php echo $is_textiles 
                    ? 'Supplying international fashion houses, uniform contractors, and garment distributors across 50+ countries with OEKO-TEX certified fabrics.'
                    : 'Supplying precision-manufactured APIs, reference standards, and sterile formulations with complete open DMF dossiers, COAs, and stability data packages.'; ?>
            </p>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="<?php echo esc_url(home_url('/request-a-quote')); ?>" class="btn-primary" style="<?php if (!$is_textiles) echo 'background: linear-gradient(135deg, #00BCD4 0%, #00838F 100%); border-color: #80DEEA; color: #07090E;'; ?>">
                    Request Batch Quotation &rarr;
                </a>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn-secondary">
                    Speak With Export Specialist
                </a>
            </div>
        </div>
    </section>

    <!-- 2. Sticky Category & Search Filter Bar -->
    <section class="sticky-filter-bar">
        <div class="container-vc filter-bar-inner">
            <div style="position: relative; width: 100%; max-width: 320px;">
                <input type="text" class="product-search-input" placeholder="Search within <?php echo esc_attr($division_name); ?>..." aria-label="Search division products">
            </div>

            <div class="category-filter-list">
                <button type="button" class="category-filter-btn active" data-category="all">All <?php echo esc_html($division_name); ?></button>
                <?php
                $child_terms = get_terms([
                    'taxonomy'   => 'product_cat',
                    'parent'     => $current_term->term_id,
                    'hide_empty' => false,
                ]);
                if (!empty($child_terms) && !is_wp_error($child_terms)) {
                    foreach ($child_terms as $cterm) {
                        echo '<button type="button" class="category-filter-btn" data-category="' . esc_attr($cterm->name) . '">' . esc_html($cterm->name) . '</button>';
                    }
                }
                ?>
            </div>
        </div>
    </section>

    <!-- 3. Category Products Grid -->
    <section class="section" style="padding-top: 3.5rem;">
        <div class="container-vc">
            <?php if (have_posts()) : ?>
                <div class="product-grid">
                    <?php
                    while (have_posts()) : the_post();
                        wc_get_template_part('content', 'product');
                    endwhile;
                    ?>
                </div>

                <div class="products-empty-state glass-card" style="display: none; padding: 4rem 2rem; text-align: center; max-width: 550px; margin: 2rem auto;">
                    <h3 class="font-serif-luxury" style="color: #FFFFFF; margin-bottom: 0.5rem;">No Matching Products</h3>
                    <p style="color: rgba(255,255,255,0.65); font-size: 0.9rem;">No products match your keyword criteria in this division.</p>
                </div>

                <div style="margin-top: 3.5rem; text-align: center;">
                    <?php woocommerce_pagination(); ?>
                </div>
            <?php else : ?>
                <div class="glass-card" style="padding: 4rem 2rem; text-align: center; max-width: 550px; margin: 0 auto;">
                    <h3 class="font-serif-luxury" style="color: #FFFFFF; margin-bottom: 0.5rem;">Catalogue Ingestion In Progress</h3>
                    <p style="color: rgba(255,255,255,0.65); font-size: 0.9rem; margin-bottom: 1.5rem;">Products under <?php echo esc_html($division_name); ?> are being populated.</p>
                    <a href="<?php echo esc_url(home_url('/request-a-quote')); ?>" class="btn-primary">
                        Submit Custom Specification &rarr;
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
