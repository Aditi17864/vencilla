<?php
/**
 * Template Name: Global Presence Page
 *
 * @package Vencilla
 */

get_header();
?>

<div class="site-main" style="background: #07090E; padding-top: 80px;">
    <!-- 1. Hero Banner -->
    <section class="section" style="background: linear-gradient(135deg, #07131E 0%, #07090E 100%); border-bottom: 1px solid rgba(201,162,75,0.25); text-align: left; padding: 5rem 0 4rem;">
        <div class="container-vc">
            <span class="eyebrow" style="margin-bottom: 0.75rem;">WORLDWIDE EXPORT MARKETS</span>
            <h1 class="font-serif-luxury" style="font-size: 3.25rem; font-weight: 800; color: #FFFFFF; max-width: 850px; line-height: 1.15; margin-bottom: 1.5rem;">
                Connecting Continents Through Quality & Precision
            </h1>
            <div class="gold-divider"></div>
            <p style="color: rgba(255,255,255,0.75); font-size: 1.1rem; line-height: 1.7; max-width: 750px;">
                Exporting pharmaceutical active ingredients and luxury textile products to over 50 countries across Africa, Europe, the Middle East, CIS, Asia, and Latin America.
            </p>
        </div>
    </section>

    <!-- 2. Global World Map Display -->
    <section class="section" style="padding-top: 3rem;">
        <div class="container-vc">
            <div class="glass-card" style="overflow: hidden; border-radius: 16px; border: 1px solid rgba(201,162,75,0.3); box-shadow: 0 25px 60px rgba(0,0,0,0.8); margin-bottom: 4rem;">
                <div style="height: 480px; position: relative; background: #07131E;">
                    <img src="<?php echo vencilla_get_asset_url('images/textures/gold_world_map.jpg'); ?>" alt="Vencilla Worldwide Export Presence Map" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(1.1) contrast(1.2);">
                    <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(7,9,14,0.95) 0%, transparent 50%, rgba(7,9,14,0.4) 100%);"></div>
                    <div style="position: absolute; bottom: 2rem; left: 2rem; right: 2rem; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 1rem;">
                        <div>
                            <span class="eyebrow" style="color: #C9A24B; margin-bottom: 0.25rem;">INTERNATIONAL REACH</span>
                            <h3 class="font-serif-luxury" style="font-size: 1.5rem; font-weight: 700; color: #FFFFFF;">50+ Destination Ports & Regulated Markets</h3>
                        </div>
                        <a href="<?php echo esc_url(home_url('/request-a-quote')); ?>" class="btn-primary">
                            Initiate Export Shipment &rarr;
                        </a>
                    </div>
                </div>
            </div>

            <!-- Regional Breakdowns -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                <div class="glass-card reveal-item" style="padding: 2rem;">
                    <h3 class="font-serif-luxury text-gold-gradient" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem;">African Markets</h3>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.6;">Nigeria, Ghana, Kenya, Tanzania, South Africa, Ethiopia, Uganda, Ivory Coast, Senegal, Angola.</p>
                </div>
                <div class="glass-card reveal-item" style="padding: 2rem;">
                    <h3 class="font-serif-luxury text-gold-gradient" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem;">Middle East & GCC</h3>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.6;">United Arab Emirates (Dubai hub), Saudi Arabia, Oman, Qatar, Kuwait, Jordan, Egypt.</p>
                </div>
                <div class="glass-card reveal-item" style="padding: 2rem;">
                    <h3 class="font-serif-luxury text-gold-gradient" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem;">European Union & CIS</h3>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.6;">United Kingdom, Germany, Poland, Uzbekistan, Kazakhstan, Azerbaijan, Georgia.</p>
                </div>
                <div class="glass-card reveal-item" style="padding: 2rem;">
                    <h3 class="font-serif-luxury text-gold-gradient" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem;">Latin America & Asia</h3>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.6;">Brazil, Colombia, Peru, Mexico, Vietnam, Philippines, Bangladesh, Sri Lanka.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. CTA Section -->
    <?php
    get_template_part('template-parts/cta-section', null, [
        'eyebrow'  => 'Expand Your Supply Chain',
        'title'    => 'Partner With India\'s Trusted Export Leader',
        'subtitle' => 'From FOB port delivery to CIF door distribution, we ensure seamless customs clearance and temperature-controlled cargo security.',
    ]);
    ?>
</div>

<?php
get_footer();
