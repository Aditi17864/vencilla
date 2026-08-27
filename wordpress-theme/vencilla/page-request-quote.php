<?php
/**
 * Template Name: Request a Quote Page
 *
 * @package Vencilla
 */

get_header();
?>

<div class="site-main" style="background: #07090E; padding-top: 80px; min-height: 90vh;">
    <!-- 1. Hero Header Banner -->
    <section class="section" style="background: linear-gradient(135deg, #0A1628 0%, #07090E 100%); border-bottom: 1px solid rgba(201,162,75,0.25); text-align: center; padding: 5rem 0 3.5rem;">
        <div class="container-vc">
            <span class="eyebrow" style="margin-bottom: 0.75rem;">COMMERCIAL EXPORT PROCUREMENT</span>
            <h1 class="font-serif-luxury" style="font-size: 3.25rem; font-weight: 800; color: #FFFFFF; margin-bottom: 1rem;">
                Request Commercial Quotation
            </h1>
            <div class="gold-divider-center"></div>
            <p style="color: rgba(255,255,255,0.7); max-width: 650px; margin: 0 auto; font-size: 1rem; line-height: 1.6;">
                Submit your bill of quantities, tender specifications, or custom product requirements for FOB/CIF pricing.
            </p>
        </div>
    </section>

    <!-- 2. Quote Request Form Section -->
    <section class="section">
        <div class="container-vc" style="max-width: 900px;">
            <!-- Form State View -->
            <div id="quote-form-state" class="glass-card" style="padding: 3rem 2.5rem; border-radius: 16px;">
                <form id="vencilla-quote-form" method="post" enctype="multipart/form-data">
                    <?php wp_nonce_field('vencilla_nonce', 'nonce'); ?>

                    <h3 class="font-serif-luxury" style="font-size: 1.3rem; font-weight: 700; color: #C9A24B; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(201,162,75,0.2); padding-bottom: 0.75rem;">
                        1. Company & Contact Information
                    </h3>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="quote-name">Full Name *</label>
                            <input type="text" id="quote-name" name="name" required class="form-input" placeholder="Procurement manager name">
                        </div>
                        <div class="form-group">
                            <label for="quote-company">Company Name *</label>
                            <input type="text" id="quote-company" name="company" required class="form-input" placeholder="Company / Trade agency">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="quote-email">Corporate Email *</label>
                            <input type="email" id="quote-email" name="email" required class="form-input" placeholder="procurement@company.com">
                        </div>
                        <div class="form-group">
                            <label for="quote-phone">Direct Phone / WhatsApp *</label>
                            <input type="tel" id="quote-phone" name="phone" required class="form-input" placeholder="+1 (555) 000-0000">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="quote-country">Destination Country / Port *</label>
                        <input type="text" id="quote-country" name="country" required class="form-input" placeholder="e.g. United Kingdom (London Gateway) / UAE (Jebel Ali)">
                    </div>

                    <h3 class="font-serif-luxury" style="font-size: 1.3rem; font-weight: 700; color: #C9A24B; margin: 2rem 0 1.5rem; border-bottom: 1px solid rgba(201,162,75,0.2); padding-bottom: 0.75rem;">
                        2. Procurement Specifications
                    </h3>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="quote-product">Product of Interest *</label>
                            <input type="text" id="quote-product" name="product" required class="form-input" placeholder="e.g. Pregabalin API / African Wax Prints">
                        </div>
                        <div class="form-group">
                            <label for="quote-quantity">Required Quantity / Order Volume</label>
                            <input type="text" id="quote-quantity" name="quantity" class="form-input" placeholder="e.g. 500 Kgs / 10,000 Yards">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="quote-message">Technical Requirements / Target Specifications</label>
                        <textarea id="quote-message" name="message" rows="4" class="form-textarea" placeholder="Detail purity standards (USP/BP/EP), mesh size, packaging requirements, target delivery date, or special certifications required..."></textarea>
                    </div>

                    <div class="form-group">
                        <label for="quote-document">Attach RFQ Document / Specification Sheet (Optional, PDF or DOC)</label>
                        <input type="file" id="quote-document" name="document" accept=".pdf,.doc,.docx" class="form-input" style="padding: 0.5rem;">
                    </div>

                    <button type="submit" class="btn-primary" style="width: 100%; padding: 1.1rem; font-size: 0.95rem; margin-top: 1.5rem;">
                        SUBMIT QUOTE REQUEST &rarr;
                    </button>
                </form>
            </div>

            <!-- Success State View (Hidden by Default) -->
            <div id="quote-success-state" class="glass-card" style="display: none; padding: 4rem 2rem; text-align: center; border-radius: 16px; border-color: #007A48;">
                <div style="width: 70px; height: 70px; border-radius: 50%; background: rgba(0,122,72,0.15); border: 2px solid #007A48; color: #007A48; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <span class="eyebrow" style="color: #72E5A8; margin-bottom: 0.5rem;">REQUEST RECEIVED</span>
                <h2 class="font-serif-luxury" style="font-size: 2.25rem; font-weight: 700; color: #FFFFFF; margin-bottom: 1rem;">
                    Thank You for Your RFQ Submission
                </h2>
                <div class="gold-divider-center"></div>
                <p style="color: rgba(255,255,255,0.75); max-width: 550px; margin: 0 auto 2rem; font-size: 1rem; line-height: 1.7;">
                    Our commercial international export managers have logged your request. We will review the specifications and formulate an official commercial quotation.
                </p>
                <a href="<?php echo esc_url(home_url('/products')); ?>" class="btn-primary">
                    Return to Catalogue &rarr;
                </a>
            </div>
        </div>
    </section>
</div>

<?php
get_footer();
