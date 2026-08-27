<?php
/**
 * Template Name: Contact Page
 *
 * @package Vencilla
 */

get_header();
?>

<div class="site-main" style="background: #07090E; padding-top: 80px;">
    <!-- 1. Hero Header Banner with Hexagonal Accents -->
    <section class="section" style="background: linear-gradient(135deg, #0A1628 0%, #07090E 100%); border-bottom: 1px solid rgba(201,162,75,0.25); text-align: center; padding: 5rem 0 3.5rem;">
        <div class="container-vc">
            <span class="eyebrow" style="margin-bottom: 0.75rem;">GET IN TOUCH</span>
            <h1 class="font-serif-luxury" style="font-size: 3.25rem; font-weight: 800; color: #FFFFFF; margin-bottom: 1rem;">
                Send an Enquiry
            </h1>
            <div class="gold-divider-center"></div>
            <p style="color: rgba(255,255,255,0.7); max-width: 600px; margin: 0 auto; font-size: 1rem; line-height: 1.6;">
                Have a question or need product specifications? Fill out the commercial form below and our international sales desk will reply within 24 hours.
            </p>
        </div>
    </section>

    <!-- 2. Main Contact Grid -->
    <section class="section">
        <div class="container-vc">
            <div style="display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: flex-start;">
                <?php ?>
                <div style="display: grid; grid-template-columns: 1fr; gap: 2.5rem;" class="contact-layout-grid">
                    <style>
                        @media (min-width: 1024px) {
                            .contact-layout-grid {
                                grid-template-columns: 1.4fr 0.8fr !important;
                            }
                        }
                    </style>

                    <!-- Left: Interactive AJAX Enquiry Form -->
                    <div class="glass-card" style="padding: 2.5rem; border-radius: 16px; background: #0D1B2E; border: 1px solid rgba(201,162,75,0.25);">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                            <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(201,162,75,0.15); border: 1px solid rgba(201,162,75,0.3); display: flex; align-items: center; justify-content: center; color: #C9A24B;">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                            </div>
                            <div>
                                <h2 class="font-serif-luxury" style="font-size: 1.4rem; font-weight: 700; color: #FFFFFF;">Enquiry Details</h2>
                                <p style="font-size: 0.8rem; color: rgba(255,255,255,0.6);">Direct transmission to commercial export managers</p>
                            </div>
                        </div>

                        <!-- Success / Error Notice Banners -->
                        <div id="contact-success" style="display: none; padding: 1rem 1.25rem; border-radius: 8px; background: rgba(0,122,72,0.2); border: 1px solid #007A48; color: #72E5A8; font-size: 0.9rem; margin-bottom: 1.5rem;"></div>
                        <div id="contact-error" style="display: none; padding: 1rem 1.25rem; border-radius: 8px; background: rgba(220,53,69,0.2); border: 1px solid #DC3545; color: #FF8D97; font-size: 0.9rem; margin-bottom: 1.5rem;"></div>

                        <form id="vencilla-contact-form" method="post">
                            <?php wp_nonce_field('vencilla_nonce', 'nonce'); ?>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="contact-name">Your Full Name *</label>
                                    <input type="text" id="contact-name" name="name" required class="form-input" placeholder="e.g. John Doe">
                                </div>
                                <div class="form-group">
                                    <label for="contact-company">Company / Organization *</label>
                                    <input type="text" id="contact-company" name="company" required class="form-input" placeholder="e.g. Apex Global Traders Ltd">
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="contact-email">Corporate Email *</label>
                                    <input type="email" id="contact-email" name="email" required class="form-input" placeholder="procurement@company.com">
                                </div>
                                <div class="form-group">
                                    <label for="contact-phone">Phone / WhatsApp Number</label>
                                    <input type="tel" id="contact-phone" name="phone" class="form-input" placeholder="+1 (555) 000-0000">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="contact-type">Inquiry Division</label>
                                <select id="contact-type" name="enquiryType" class="form-select">
                                    <option value="General Commercial Inquiry">General Commercial Inquiry</option>
                                    <option value="Textiles Division (Fabrics & Jacquards)">Textiles Division (Fabrics & Jacquards)</option>
                                    <option value="Pharmaceuticals Division (APIs & Formulations)">Pharmaceuticals Division (APIs & Formulations)</option>
                                    <option value="Distributor Partnership Request">Distributor Partnership Request</option>
                                    <option value="Custom Chemical Synthesis / Weaving">Custom Chemical Synthesis / Weaving</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="contact-message">Inquiry Message *</label>
                                <textarea id="contact-message" name="message" required rows="5" class="form-textarea" placeholder="Please specify your product interest, quantity requirements, destination port, target certifications (WHO-GMP, OEKO-TEX), and delivery timelines..."></textarea>
                            </div>

                            <button type="submit" class="btn-primary" style="width: 100%; padding: 1rem; font-size: 0.9rem; margin-top: 1rem;">
                                SEND ENQUIRY &rarr;
                            </button>
                        </form>
                    </div>

                    <!-- Right: Direct Contact Cards & WhatsApp Direct -->
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <!-- WhatsApp Direct Action Card -->
                        <div class="glass-card" style="padding: 2rem; border-color: rgba(37,211,102,0.4); background: linear-gradient(135deg, rgba(37,211,102,0.08) 0%, rgba(7,9,14,0.9) 100%);">
                            <span class="eyebrow" style="color: #25D366; margin-bottom: 0.5rem;">FASTEST COMMERCE DESK</span>
                            <h3 class="font-serif-luxury" style="font-size: 1.35rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.75rem;">Instant WhatsApp Chat</h3>
                            <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.6; margin-bottom: 1.5rem;">Connect with our senior export managers directly on WhatsApp for real-time quotation and spec sheets.</p>
                            <a href="<?php echo vencilla_whatsapp_url(); ?>" target="_blank" rel="noopener noreferrer" class="btn-primary" style="background: #25D366; color: #FFFFFF !important; border-color: #25D366; width: 100%;">
                                Open WhatsApp Chat &rarr;
                            </a>
                        </div>

                        <!-- Direct Address & Email Info -->
                        <div class="glass-card" style="padding: 2rem;">
                            <h3 class="font-serif-luxury" style="font-size: 1.2rem; font-weight: 700; color: #FFFFFF; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(201,162,75,0.2); padding-bottom: 0.75rem;">
                                Global Corporate Office
                            </h3>
                            <ul style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.9rem; color: rgba(255,255,255,0.8);">
                                <li style="display: flex; gap: 0.75rem; align-items: flex-start;">
                                    <span style="color: #C9A24B; font-size: 1.1rem; line-height: 1;">📍</span>
                                    <span>434/3b, Somakanji wadi, Khatodara, Surat, Gujarat 395002, India</span>
                                </li>
                                <li style="display: flex; gap: 0.75rem; align-items: center;">
                                    <span style="color: #C9A24B; font-size: 1.1rem; line-height: 1;">✉️</span>
                                    <span>export@vencilla.com</span>
                                </li>
                                <li style="display: flex; gap: 0.75rem; align-items: center;">
                                    <span style="color: #C9A24B; font-size: 1.1rem; line-height: 1;">📞</span>
                                    <span>+91 7622009300</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<?php
get_footer();
