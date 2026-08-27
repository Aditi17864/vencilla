<?php
/**
 * Template Name: Quality & Manufacturing Page
 *
 * @package Vencilla
 */

get_header();
?>

<div class="site-main" style="background: #07090E; padding-top: 80px;">
    <!-- 1. Hero Banner -->
    <section class="section" style="background: linear-gradient(135deg, #0A1628 0%, #07090E 100%); border-bottom: 1px solid rgba(0,188,212,0.3); text-align: left; padding: 5rem 0 4rem;">
        <div class="container-vc">
            <span class="eyebrow" style="color: #00E5FF; margin-bottom: 0.75rem;">QUALITY ASSURANCE & STANDARDS</span>
            <h1 class="font-serif-luxury" style="font-size: 3.25rem; font-weight: 800; color: #FFFFFF; max-width: 850px; line-height: 1.15; margin-bottom: 1.5rem;">
                State-of-the-Art Manufacturing & Global Compliance
            </h1>
            <div class="gold-divider" style="background: linear-gradient(90deg, #00BCD4, transparent);"></div>
            <p style="color: rgba(255,255,255,0.75); font-size: 1.1rem; line-height: 1.7; max-width: 750px;">
                Operating in strict compliance with WHO-GMP, ISO 9001:2015, and OEKO-TEX Standard 100 protocols across all synthesis, weaving, testing, and cleanroom packaging facilities.
            </p>
        </div>
    </section>

    <!-- 2. Certifications Grid -->
    <section class="section">
        <div class="container-vc">
            <div style="text-align: center; max-width: 700px; margin: 0 auto 3.5rem;">
                <span class="eyebrow" style="margin-bottom: 0.5rem;">INTERNATIONAL ACCREDITATIONS</span>
                <h2 class="font-serif-luxury" style="font-size: 2.5rem; font-weight: 800; color: #FFFFFF;">
                    Certified Quality Benchmarks
                </h2>
                <div class="gold-divider-center"></div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
                <div class="glass-card reveal-item" style="padding: 2.5rem 2rem; border-color: rgba(0,188,212,0.3);">
                    <div style="font-family: var(--font-mono); font-size: 1.5rem; font-weight: 800; color: #00E5FF; margin-bottom: 0.75rem;">WHO-GMP</div>
                    <h3 class="font-serif-luxury" style="font-size: 1.15rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem;">Good Manufacturing Practice</h3>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.65); line-height: 1.6;">Full compliance with World Health Organization guidelines for sterile and oral solid active ingredients.</p>
                </div>
                <div class="glass-card reveal-item" style="padding: 2.5rem 2rem; border-color: rgba(201,162,75,0.3);">
                    <div style="font-family: var(--font-mono); font-size: 1.5rem; font-weight: 800; color: #C9A24B; margin-bottom: 0.75rem;">ISO 9001:2015</div>
                    <h3 class="font-serif-luxury" style="font-size: 1.15rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem;">Quality Management System</h3>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.65); line-height: 1.6;">Standardized manufacturing, supply chain tracking, analytical verification, and document management.</p>
                </div>
                <div class="glass-card reveal-item" style="padding: 2.5rem 2rem; border-color: rgba(0,188,212,0.3);">
                    <div style="font-family: var(--font-mono); font-size: 1.5rem; font-weight: 800; color: #00E5FF; margin-bottom: 0.75rem;">CEP / DMF</div>
                    <h3 class="font-serif-luxury" style="font-size: 1.15rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem;">Regulatory Documentation</h3>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.65); line-height: 1.6;">Open part DMFs, stability study dossiers (Zone IVb), and full analytical testing packages ready for MOH submissions.</p>
                </div>
                <div class="glass-card reveal-item" style="padding: 2.5rem 2rem; border-color: rgba(201,162,75,0.3);">
                    <div style="font-family: var(--font-mono); font-size: 1.5rem; font-weight: 800; color: #C9A24B; margin-bottom: 0.75rem;">OEKO-TEX 100</div>
                    <h3 class="font-serif-luxury" style="font-size: 1.15rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.5rem;">Eco-Friendly Textiles</h3>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.65); line-height: 1.6;">Certified free from harmful aromatic amines, formaldehyde, heavy metals, and chlorinated phenols.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. CTA Section -->
    <?php
    get_template_part('template-parts/cta-section', null, [
        'eyebrow'  => 'Request Documentation',
        'title'    => 'Need a Certificate of Analysis (COA) or DMF dossier?',
        'subtitle' => 'Our regulatory affairs team provides expedited technical dossiers and analytical test reports upon request.',
    ]);
    ?>
</div>

<?php
get_footer();
