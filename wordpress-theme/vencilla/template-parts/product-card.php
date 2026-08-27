<?php
/**
 * Product Card Template Part
 *
 * @package Vencilla
 */

$product = isset($args['product']) ? $args['product'] : (isset($GLOBALS['product']) ? $GLOBALS['product'] : null);
if (!$product) {
    return;
}

$product_id   = $product->get_id();
$division     = get_post_meta($product_id, 'vencilla_division', true) ?: 'textiles';
$is_textiles  = ($division === 'textiles');
$slug         = $product->get_slug();
$detail_url   = $is_textiles ? home_url('/textiles/' . $slug) : home_url('/pharmaceuticals/' . $slug);

// Image Handling
$image_url = get_the_post_thumbnail_url($product_id, 'vencilla-card');
if (!$image_url) {
    $image_url = $is_textiles 
        ? vencilla_get_asset_url('images/textures/luxury_fabric_drape.jpg')
        : vencilla_get_asset_url('images/textures/fabric1.jpg');
}

$name           = $product->get_name();
$short_desc     = $product->get_short_description();
$category_terms = get_the_terms($product_id, 'product_cat');
$category_name  = ($category_terms && !is_wp_error($category_terms)) ? $category_terms[0]->name : '';
$is_featured    = $product->is_featured();

// Textiles Meta
$moq         = get_post_meta($product_id, 'vencilla_moq', true);
$composition = get_post_meta($product_id, 'vencilla_composition', true);
$gsm         = get_post_meta($product_id, 'vencilla_gsm', true);

// Pharma Meta
$cas_number  = get_post_meta($product_id, 'vencilla_cas_number', true);
$mol_formula = get_post_meta($product_id, 'vencilla_molecular_formula', true);
$grade       = get_post_meta($product_id, 'vencilla_grade', true);
?>
<div class="product-card-wrapper" 
     data-name="<?php echo esc_attr(strtolower($name)); ?>" 
     data-category="<?php echo esc_attr(strtolower($category_name)); ?>"
     data-cas="<?php echo esc_attr(strtolower($cas_number)); ?>"
     data-division="<?php echo esc_attr($division); ?>">
  <div class="product-card reveal-item">
    <!-- Top Product Image -->
    <div class="product-card__image">
      <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($name); ?>" loading="lazy">
      <div class="product-card__image-overlay"></div>
      
      <!-- Badges -->
      <div class="product-card__badges">
        <span class="product-card__division-badge <?php echo $is_textiles ? 'badge-textile' : 'badge-pharma'; ?>">
          <?php echo $is_textiles ? 'TEXTILES' : 'PHARMA'; ?>
        </span>
        <?php if ($is_featured): ?>
          <span class="product-card__featured-badge">★ FEATURED</span>
        <?php endif; ?>
      </div>

      <?php if ($category_name): ?>
        <div class="product-card__category-badge"><?php echo esc_html($category_name); ?></div>
      <?php endif; ?>
    </div>

    <!-- Card Body -->
    <div class="product-card__body">
      <div>
        <h3 class="product-card__title font-serif-luxury"><?php echo esc_html($name); ?></h3>
        <p class="product-card__desc">
          <?php echo esc_html(wp_trim_words($short_desc ?: 'International grade quality export formulation and premium specifications.', 14, '...')); ?>
        </p>

        <!-- Quick Spec Pills -->
        <div class="product-card__specs">
          <?php if ($is_textiles): ?>
            <?php if ($composition): ?>
              <span class="spec-pill"><?php echo esc_html($composition); ?></span>
            <?php endif; ?>
            <?php if ($gsm): ?>
              <span class="spec-pill"><?php echo esc_html($gsm); ?></span>
            <?php endif; ?>
            <?php if ($moq): ?>
              <span class="spec-pill spec-pill--gold">MOQ: <?php echo esc_html($moq); ?></span>
            <?php endif; ?>
          <?php else: ?>
            <?php if ($cas_number): ?>
              <span class="spec-pill spec-pill--pharma">CAS: <?php echo esc_html($cas_number); ?></span>
            <?php endif; ?>
            <?php if ($mol_formula): ?>
              <span class="spec-pill"><?php echo esc_html($mol_formula); ?></span>
            <?php endif; ?>
            <?php if ($grade): ?>
              <span class="spec-pill spec-pill--cyan"><?php echo esc_html($grade); ?></span>
            <?php endif; ?>
          <?php endif; ?>
        </div>
      </div>

      <!-- Card Actions -->
      <div class="product-card__actions">
        <a href="<?php echo esc_url($detail_url); ?>" class="product-card__specs-link">
          Specifications &rarr;
        </a>
        <button type="button" 
                class="product-card__enquire-btn" 
                data-enquiry-btn
                data-product-id="<?php echo esc_attr($product_id); ?>"
                data-product-name="<?php echo esc_attr($name); ?>"
                data-division="<?php echo esc_attr($division); ?>">
          Enquire
        </button>
      </div>
    </div>
  </div>
</div>
