<?php
/**
 * Product Enquiry Modal Template Part
 *
 * @package Vencilla
 */

$whatsapp_url = vencilla_whatsapp_url();
?>
<div id="enquiry-modal" class="modal-overlay" style="display:none;" role="dialog" aria-modal="true" aria-label="Product Enquiry">
  <div class="modal-box">
    <!-- Modal Header -->
    <div class="modal-header">
      <div style="display:flex; align-items:center; gap:0.75rem;">
        <div style="width:40px; height:40px; border-radius:50%; background:rgba(201,162,75,0.15); border:1px solid rgba(201,162,75,0.3); display:flex; align-items:center; justify-content:center; color:#C9A24B;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <div>
          <h2 class="modal-title font-serif-luxury">Commercial Enquiry</h2>
          <p class="modal-subtitle">Direct export quotation & technical specs</p>
        </div>
      </div>
      <button type="button" class="modal-close-btn" data-modal-close aria-label="Close">&times;</button>
    </div>

    <!-- WhatsApp Quick Action -->
    <a href="<?php echo esc_url($whatsapp_url); ?>" target="_blank" rel="noopener noreferrer" class="modal-whatsapp-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.961.947 2.796.947 3.179 0 5.766-2.587 5.767-5.766.001-3.187-2.578-5.834-5.767-5.834zm3.391 8.243c-.144.405-.837.774-1.17.824-.313.047-.714.073-2.158-.522-1.846-.763-3.033-2.646-3.125-2.768-.093-.122-.746-.992-.746-1.892 0-.899.47-1.344.637-1.528.167-.184.364-.23.486-.23.121 0 .243.002.348.007.113.005.264-.043.413.315.155.372.529 1.293.576 1.386.046.094.077.203.016.326-.062.124-.093.201-.186.31-.093.108-.196.242-.28.325-.093.093-.19.194-.082.38.109.186.482.796 1.034 1.288.71.634 1.309.831 1.495.924.186.093.294.077.403-.047.109-.123.468-.544.592-.731.124-.186.248-.155.418-.093.17.062 1.077.508 1.263.601.186.093.31.139.356.216.046.077.046.45-.098.855z"/>
      </svg>
      Chat on WhatsApp (Fastest Response)
    </a>

    <div class="modal-divider"><span>or submit export enquiry</span></div>

    <!-- Form Body -->
    <div id="modal-form-body">
      <form id="vencilla-enquiry-modal-form" method="post">
        <?php wp_nonce_field('vencilla_nonce', 'nonce'); ?>
        <input type="hidden" name="product" value="">
        <input type="hidden" name="division" value="">

        <div class="form-row">
          <div class="form-group">
            <label for="modal-name">Your Name *</label>
            <input type="text" id="modal-name" name="name" required class="form-input" placeholder="Full name">
          </div>
          <div class="form-group">
            <label for="modal-company">Company *</label>
            <input type="text" id="modal-company" name="company" required class="form-input" placeholder="Company / Organization">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="modal-email">Email Address *</label>
            <input type="email" id="modal-email" name="email" required class="form-input" placeholder="procurement@company.com">
          </div>
          <div class="form-group">
            <label for="modal-phone">Phone / WhatsApp *</label>
            <input type="tel" id="modal-phone" name="phone" required class="form-input" placeholder="+1 234 567 8900">
          </div>
        </div>

        <div class="form-group">
          <label for="modal-quantity">Required Volume / MOQ</label>
          <input type="text" id="modal-quantity" name="quantity" class="form-input" placeholder="e.g. 500 Meters, 1000 Kgs, 20ft Container">
        </div>

        <div class="form-group">
          <label for="modal-message">Requirements & Specifications</label>
          <textarea id="modal-message" name="message" rows="3" class="form-textarea" placeholder="Detail your destination port, required certifications (OEKO-TEX, GMP, COA), target delivery timeline..."></textarea>
        </div>

        <div style="display:flex; gap:1rem; margin-top:1.5rem;">
          <button type="submit" class="btn-primary" style="flex:1;">
            SUBMIT ENQUIRY &rarr;
          </button>
          <button type="button" class="btn-secondary" data-modal-close>
            Cancel
          </button>
        </div>
      </form>
    </div>

    <!-- Success Message -->
    <div id="modal-success" style="display:none; text-align:center; padding:2rem 1rem;">
      <div style="width:60px; height:60px; border-radius:50%; background:rgba(0,122,72,0.15); border:1px solid #007A48; color:#007A48; display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem;">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h3 class="font-serif-luxury" style="font-size:1.4rem; margin-bottom:0.75rem; color:#FFFFFF;">Enquiry Received</h3>
      <p style="font-size:0.85rem; color:rgba(255,255,255,0.7); max-width:400px; margin:0 auto 1.5rem; line-height:1.6;">
        Thank you for contacting Vencilla Global Excellence. Our commercial export team will review your specifications and contact you shortly.
      </p>
      <button type="button" class="btn-secondary" data-modal-close>Close</button>
    </div>
  </div>
</div>
