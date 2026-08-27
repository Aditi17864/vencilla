<?php
/**
 * Single Product View Template (Product Detail Page)
 * Replaces React ProductDetail.jsx exactly.
 *
 * @package Vencilla
 */

defined('ABSPATH') || exit;

get_header('shop');

while (have_posts()) : the_post();
    global $product;
    $product_id   = $product->get_id();
    $division     = get_post_meta($product_id, 'vencilla_division', true) ?: 'textiles';
    $is_textiles  = ($division === 'textiles');
    $accent_color = $is_textiles ? '#C9A24B' : '#00BCD4';

    // Meta Fields
    $moq             = get_post_meta($product_id, 'vencilla_moq', true);
    $composition     = get_post_meta($product_id, 'vencilla_composition', true);
    $fabric_type     = get_post_meta($product_id, 'vencilla_fabric_type', true);
    $gsm             = get_post_meta($product_id, 'vencilla_gsm', true);
    $width           = get_post_meta($product_id, 'vencilla_width', true);
    $weave           = get_post_meta($product_id, 'vencilla_weave', true);
    $finish          = get_post_meta($product_id, 'vencilla_finish', true);
    $available_colors= get_post_meta($product_id, 'vencilla_available_colors', true);
    $certifications  = get_post_meta($product_id, 'vencilla_certifications', true);
    $cas_number      = get_post_meta($product_id, 'vencilla_cas_number', true);
    $mol_formula     = get_post_meta($product_id, 'vencilla_molecular_formula', true);
    $grade           = get_post_meta($product_id, 'vencilla_grade', true);
    $regulatory      = get_post_meta($product_id, 'vencilla_regulatory_status', true);

    $applications_raw = get_post_meta($product_id, 'vencilla_applications', true);
    $applications     = $applications_raw ? json_decode($applications_raw, true) : [];
    if (!is_array($applications) && $applications_raw) {
        $applications = array_filter(array_map('trim', explode("\n", $applications_raw)));
    }

    $specifications_raw = get_post_meta($product_id, 'vencilla_specifications', true);
    $specifications     = $specifications_raw ? json_decode($specifications_raw, true) : [];

    $packaging_raw = get_post_meta($product_id, 'vencilla_packaging', true);
    $packaging     = $packaging_raw ? json_decode($packaging_raw, true) : [];
    if (!is_array($packaging) && $packaging_raw) {
        $packaging = array_filter(array_map('trim', explode("\n", $packaging_raw)));
    }

    $doc_raw = get_post_meta($product_id, 'vencilla_documentation', true);
    $documentation = $doc_raw ? json_decode($doc_raw, true) : [];
    if (!is_array($documentation) && $doc_raw) {
        $documentation = array_filter(array_map('trim', explode("\n", $doc_raw)));
    }

    // Image
    $image_url = get_the_post_thumbnail_url($product_id, 'vencilla-hero');
    if (!$image_url) {
        $image_url = $is_textiles 
            ? vencilla_get_asset_url('images/textures/luxury_fabric_drape.jpg')
            : vencilla_get_asset_url('images/textures/fabric1.jpg');
    }
?>

<div class="site-main" style="background: #07090E; padding-top: 80px; min-height: 100vh;">

    <!-- 1. Breadcrumbs & Header Banner -->
    <section class="section" style="background: <?php echo $is_textiles ? 'linear-gradient(135deg, #141008 0%, #07090E 100%)' : 'linear-gradient(135deg, #061A2B 0%, #07090E 100%)'; ?>; border-bottom: 1px solid <?php echo $is_textiles ? 'rgba(201,162,75,0.3)' : 'rgba(0,188,212,0.3)'; ?>; padding: 4rem 0 3rem; text-align: left;">
        <div class="container-vc">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; font-family: var(--font-mono); color: rgba(255,255,255,0.6); margin-bottom: 1rem;">
                <a href="<?php echo esc_url(home_url('/')); ?>">Home</a> &gt; 
                <a href="<?php echo esc_url(home_url('/products')); ?>">Catalogue</a> &gt; 
                <span style="color: <?php echo esc_attr($accent_color); ?>;"><?php echo esc_html($division); ?></span>
            </div>

            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                <span class="product-card__division-badge <?php echo $is_textiles ? 'badge-textile' : 'badge-pharma'; ?>">
                    <?php echo $is_textiles ? 'TEXTILES DIVISION' : 'PHARMA API DIVISION'; ?>
                </span>
                <?php if ($cas_number): ?>
                    <span class="spec-pill spec-pill--pharma">CAS: <?php echo esc_html($cas_number); ?></span>
                <?php endif; ?>
                <?php if ($moq): ?>
                    <span class="spec-pill spec-pill--gold">MOQ: <?php echo esc_html($moq); ?></span>
                <?php endif; ?>
            </div>

            <h1 class="font-serif-luxury" style="font-size: 3rem; font-weight: 800; color: #FFFFFF; line-height: 1.15; margin-bottom: 1rem;">
                <?php the_title(); ?>
            </h1>

            <p style="color: rgba(255,255,255,0.75); font-size: 1.05rem; line-height: 1.7; max-width: 750px;">
                <?php echo esc_html($product->get_short_description() ?: 'International grade quality export formulation and premium specifications.'); ?>
            </p>
        </div>
    </section>

    <!-- 2. Product Specifications & Gallery Grid -->
    <section class="section">
        <div class="container-vc">
            <div style="display: grid; grid-template-columns: 1fr; gap: 3rem;" class="product-detail-layout">
                <style>
                    @media (min-width: 1024px) {
                        .product-detail-layout {
                            grid-template-columns: 1.2fr 0.8fr !important;
                        }
                    }
                </style>

                <!-- Left: Full Specifications & Descriptions -->
                <div>
                    <!-- Product Feature Image -->
                    <div style="border-radius: 16px; overflow: hidden; height: 380px; background: #060A12; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 2.5rem; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
                        <img src="<?php echo esc_url($image_url); ?>" alt="<?php the_title_attribute(); ?>" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>

                    <!-- Detailed Overview -->
                    <div class="glass-card" style="padding: 2.5rem; margin-bottom: 2.5rem;">
                        <h2 class="font-serif-luxury" style="font-size: 1.5rem; font-weight: 700; color: #FFFFFF; margin-bottom: 1rem;">
                            Product Overview & Technical Description
                        </h2>
                        <div class="gold-divider"></div>
                        <div style="color: rgba(255,255,255,0.8); line-height: 1.8; font-size: 0.95rem;">
                            <?php the_content(); ?>
                        </div>
                    </div>

                    <!-- Technical Specifications Table -->
                    <?php if (!empty($specifications) || $composition || $gsm || $cas_number || $mol_formula): ?>
                    <div class="glass-card" style="padding: 2.5rem; margin-bottom: 2.5rem;">
                        <h2 class="font-serif-luxury" style="font-size: 1.5rem; font-weight: 700; color: #FFFFFF; margin-bottom: 1rem;">
                            Technical Specification Sheet
                        </h2>
                        <div class="gold-divider"></div>

                        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1.5rem;">
                            <?php if ($composition): ?>
                                <div style="display: flex; justify-content: space-between; padding: 0.75rem 1rem; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);">
                                    <span style="font-weight: 600; color: #C9A24B;">Material Composition</span>
                                    <span style="color: #FFFFFF;"><?php echo esc_html($composition); ?></span>
                                </div>
                            <?php endif; ?>

                            <?php if ($fabric_type): ?>
                                <div style="display: flex; justify-content: space-between; padding: 0.75rem 1rem; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);">
                                    <span style="font-weight: 600; color: #C9A24B;">Fabric Type</span>
                                    <span style="color: #FFFFFF;"><?php echo esc_html($fabric_type); ?></span>
                                </div>
                            <?php endif; ?>

                            <?php if ($gsm): ?>
                                <div style="display: flex; justify-content: space-between; padding: 0.75rem 1rem; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);">
                                    <span style="font-weight: 600; color: #C9A24B;">Fabric Weight (GSM)</span>
                                    <span style="color: #FFFFFF;"><?php echo esc_html($gsm); ?></span>
                                </div>
                            <?php endif; ?>

                            <?php if ($width): ?>
                                <div style="display: flex; justify-content: space-between; padding: 0.75rem 1rem; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);">
                                    <span style="font-weight: 600; color: #C9A24B;">Usable Width</span>
                                    <span style="color: #FFFFFF;"><?php echo esc_html($width); ?></span>
                                </div>
                            <?php endif; ?>

                            <?php if ($cas_number): ?>
                                <div style="display: flex; justify-content: space-between; padding: 0.75rem 1rem; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);">
                                    <span style="font-weight: 600; color: #00E5FF;">CAS Registry Number</span>
                                    <span style="color: #FFFFFF; font-family: var(--font-mono);"><?php echo esc_html($cas_number); ?></span>
                                </div>
                            <?php endif; ?>

                            <?php if ($mol_formula): ?>
                                <div style="display: flex; justify-content: space-between; padding: 0.75rem 1rem; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);">
                                    <span style="font-weight: 600; color: #00E5FF;">Molecular Formula</span>
                                    <span style="color: #FFFFFF; font-family: var(--font-mono);"><?php echo esc_html($mol_formula); ?></span>
                                </div>
                            <?php endif; ?>

                            <?php if ($grade): ?>
                                <div style="display: flex; justify-content: space-between; padding: 0.75rem 1rem; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);">
                                    <span style="font-weight: 600; color: #00E5FF;">Pharmacopeia Standard</span>
                                    <span style="color: #FFFFFF;"><?php echo esc_html($grade); ?></span>
                                </div>
                            <?php endif; ?>

                            <?php if (!empty($specifications) && is_array($specifications)): ?>
                                <?php foreach ($specifications as $spec): ?>
                                    <div style="display: flex; justify-content: space-between; padding: 0.75rem 1rem; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);">
                                        <span style="font-weight: 600; color: #C9A24B;"><?php echo esc_html($spec['label'] ?? ''); ?></span>
                                        <span style="color: #FFFFFF;"><?php echo esc_html($spec['value'] ?? ''); ?></span>
                                    </div>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php endif; ?>

                    <!-- Applications List -->
                    <?php if (!empty($applications)): ?>
                    <div class="glass-card" style="padding: 2.5rem; margin-bottom: 2.5rem;">
                        <h2 class="font-serif-luxury" style="font-size: 1.5rem; font-weight: 700; color: #FFFFFF; margin-bottom: 1rem;">
                            Industrial & Commercial Applications
                        </h2>
                        <div class="gold-divider"></div>
                        <ul class="bullet-list" style="margin-top: 1.5rem;">
                            <?php foreach ($applications as $app): ?>
                                <li class="bullet-item">
                                    <span class="bullet-dot <?php if (!$is_textiles) echo 'bullet-dot--cyan'; ?>"></span>
                                    <span><?php echo esc_html($app); ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <?php endif; ?>
                </div>

                <!-- Right: Sticky Commercial Quotation & Export Inquiry Card -->
                <div>
                    <div class="glass-card" style="padding: 2.5rem; position: sticky; top: 110px; border-color: rgba(201,162,75,0.35);">
                        <span class="eyebrow" style="color: <?php echo esc_attr($accent_color); ?>; margin-bottom: 0.5rem;">B2B EXPORT DESK</span>
                        <h3 class="font-serif-luxury" style="font-size: 1.6rem; font-weight: 700; color: #FFFFFF; margin-bottom: 1rem;">
                            Commercial Inquiries
                        </h3>
                        <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.6; margin-bottom: 1.5rem;">
                            Request technical dossiers (COA / DMF), custom packaging options, and container-load FOB/CIF price quotes directly from our export specialists.
                        </p>

                        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                            <button type="button" class="btn-primary" style="width: 100%; padding: 1rem;" 
                                    data-enquiry-btn
                                    data-product-id="<?php echo esc_attr($product_id); ?>"
                                    data-product-name="<?php the_title_attribute(); ?>"
                                    data-division="<?php echo esc_attr($division); ?>">
                                SEND SPECIFICATION ENQUIRY &rarr;
                            </button>

                            <a href="<?php echo vencilla_whatsapp_url('Hello Vencilla Export Desk, I would like to inquire about specifications and pricing for: ' . get_the_title()); ?>" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="width: 100%; text-align: center; background: rgba(37,211,102,0.1); border-color: #25D366; color: #25D366 !important;">
                                Inquire on WhatsApp
                            </a>
                        </div>

                        <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.8rem; color: rgba(255,255,255,0.65);">
                            <div><strong>Certifications:</strong> <?php echo esc_html($certifications ?: 'WHO-GMP, ISO 9001:2015, OEKO-TEX 100'); ?></div>
                            <div><strong>Shipping:</strong> Global Air / Sea Container Freight</div>
                            <div><strong>Payment:</strong> L/C, T/T, Escrow Available</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>

<?php endwhile; ?>

<!-- Global Product Enquiry Modal -->
<?php get_template_part('template-parts/enquiry-modal'); ?>

<?php
get_footer('shop');
