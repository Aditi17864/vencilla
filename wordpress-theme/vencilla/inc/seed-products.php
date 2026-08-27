<?php
/**
 * Vencilla Initial WooCommerce Product Seeder
 * Allows 1-click seeding of catalogue products into WooCommerce from data/products.js.
 *
 * Usage:
 * 1. Visit your WordPress admin URL with secret key:
 *    https://yourdomain.com/?seed_vencilla_products=VENCILLA_SEED_2024
 * 2. Or execute via WP-CLI:
 *    wp eval-file inc/seed-products.php
 *
 * @package Vencilla
 */

if (!defined('ABSPATH')) {
    exit;
}

function vencilla_seed_initial_products() {
    if (!class_exists('WooCommerce')) {
        return 'Error: WooCommerce plugin is not active. Please install and activate WooCommerce first.';
    }

    $products_data = [
        // 1. Textiles Products
        [
            'slug'        => 'royal-silk-floral-jacquard',
            'name'        => 'Royal Silk & Floral Jacquard Brocade',
            'division'    => 'textiles',
            'category'    => 'Silk & Jacquard Brocades',
            'short_desc'  => 'Exquisite flowing royal mulberry silk brocade adorned with intricate multi-color floral bouquets and subtle metallic luster.',
            'description' => 'Woven with centuries-old Indian artisan heritage and modern high-density computerized jacquard looms, Vencilla Royal Silk Jacquard offers an unmatched hand-feel, rich drape, and vivid colorfast brilliance suited for couture and luxury garments.',
            'featured'    => true,
            'moq'         => '200 Meters',
            'composition' => '85% Pure Mulberry Silk, 15% Metallic Zari',
            'fabric_type' => 'Pure Silk Brocade',
            'gsm'         => '95 GSM',
            'width'       => '44/45 inches (112 cm)',
            'weave'       => 'Computerized Multi-Weft Jacquard',
            'finish'      => 'Soft Luster & Anti-Static',
            'certifications' => 'OEKO-TEX Standard 100, Silk Mark India',
            'applications' => ['Haute Couture & Runway Collections', 'Bridal Gowns & Wedding Wear', 'Luxury Dupattas & Scarves', 'High-End Hotel & Residence Upholstery'],
            'specifications' => [
                ['label' => 'Fabric Type', 'value' => 'Pure Silk Brocade'],
                ['label' => 'Composition', 'value' => '85% Silk, 15% Metallic Zari'],
                ['label' => 'Usable Width', 'value' => '44/45 inches (112 cm)'],
                ['label' => 'Weight (GSM)', 'value' => '95 GSM'],
                ['label' => 'Colorfastness', 'value' => 'Grade 4-5 (ISO 105)'],
            ]
        ],
        [
            'slug'        => 'ankara-wax-print-blue-gold',
            'name'        => 'Ankara Wax Print (Blue & Golden Sunburst)',
            'division'    => 'textiles',
            'category'    => 'African Wax Prints',
            'short_desc'  => 'Premium 100% combed cotton double-sided African wax print with vivid color penetration and colorfast durability.',
            'description' => 'Engineered for high-volume exports to Nigeria, Ghana, Kenya, Tanzania, and global diaspora markets, our Ankara wax prints feature authentic geometric sunburst motifs with zero bleeding, soft skin-feel, and crisp hand-feel.',
            'featured'    => true,
            'moq'         => '500 Yards / 100 Pieces',
            'composition' => '100% Pure Long-Staple Cotton',
            'fabric_type' => 'Real Dutch/African Wax Print',
            'gsm'         => '120 GSM',
            'width'       => '44/45 inches (114 cm)',
            'weave'       => 'High Density Plain Weave (40s x 40s)',
            'finish'      => 'Wax Calendered Luster Finish',
            'certifications' => 'ISO 9001:2015, OEKO-TEX Standard 100',
            'applications' => ['Traditional African Fashion (Ankara / Kitenge)', 'Modern Everyday Shirting', 'Headwraps & Gele Accessories', 'Cultural Festive Garments'],
            'specifications' => [
                ['label' => 'Fabric Type', 'value' => 'African Wax Print (Block & Screen)'],
                ['label' => 'Yarn Count', 'value' => '40s x 40s Pure Combed Cotton'],
                ['label' => 'Construction', 'value' => '96 x 72 Threads/Inch'],
            ]
        ],
        [
            'slug'        => 'corporate-uniform-poly-viscose',
            'name'        => 'Poly-Viscose Corporate Uniform Fabric',
            'division'    => 'textiles',
            'category'    => 'Uniform Fabrics',
            'short_desc'  => 'Wrinkle-resistant durable poly-viscose blend with anti-pilling and Teflon stain-guard finish.',
            'description' => 'Developed for institutional, hospitality, aviation, and corporate uniforms. Offers superior breathability, tensile strength, and color retention across 100+ industrial wash cycles.',
            'featured'    => false,
            'moq'         => '1000 Meters',
            'composition' => '65% Polyester, 35% Viscose',
            'fabric_type' => 'Poly-Viscose Suiting',
            'gsm'         => '220 GSM',
            'width'       => '58 inches (147 cm)',
            'weave'       => '2/2 Twill',
            'finish'      => 'Teflon Stain Repellent & Anti-Pilling',
            'certifications' => 'ISO 9001:2015, OEKO-TEX Standard 100',
            'applications' => ['Corporate Suiting & Blazers', 'Aviation & Hospitality Uniforms', 'Healthcare Lab Coats', 'Security & Industrial Workwear'],
        ],

        // 2. Pharmaceuticals Products
        [
            'slug'        => 'pregabalin-api',
            'name'        => 'Pregabalin API (WHO-GMP Certified)',
            'division'    => 'pharmaceuticals',
            'category'    => 'Active Pharmaceutical Ingredients (APIs)',
            'short_desc'  => 'High-purity active pharmaceutical ingredient used in neuropathic pain and anti-epileptic formulations.',
            'description' => 'Synthesized under certified WHO-GMP cleanroom standards with strict enantiomeric purity (>99.5%). Backed by full open-part DMF, stability data according to ICH guidelines, and complete analytical testing verification.',
            'featured'    => true,
            'moq'         => '25 Kgs',
            'cas_number'  => '148553-50-8',
            'mol_formula' => 'C8H17NO2',
            'grade'       => 'USP / EP / IP',
            'regulatory'  => 'WHO-GMP, Open DMF Available, CEP Under Filing',
            'certifications' => 'WHO-GMP, ISO 9001:2015, COA with every batch',
            'applications' => ['Oral Solid Dosage Formulations (Capsules & Tablets)', 'Neuropathic Pain Management Medications', 'Central Nervous System Therapeutics', 'Adjunctive Anti-Epileptic Therapies'],
            'specifications' => [
                ['label' => 'Chemical Name', 'value' => '(S)-3-(aminomethyl)-5-methylhexanoic acid'],
                ['label' => 'CAS Number', 'value' => '148553-50-8'],
                ['label' => 'Assay (Purity)', 'value' => '99.0% - 101.0% (HPLC)'],
                ['label' => 'Enantiomeric Purity', 'value' => '> 99.5% (Chiral HPLC)'],
                ['label' => 'Heavy Metals', 'value' => '< 10 ppm'],
                ['label' => 'Loss on Drying', 'value' => '< 0.5%'],
            ]
        ],
        [
            'slug'        => 'zopiclone-api',
            'name'        => 'Zopiclone API (EP/BP Grade)',
            'division'    => 'pharmaceuticals',
            'category'    => 'Active Pharmaceutical Ingredients (APIs)',
            'short_desc'  => 'Non-benzodiazepine hypnotic agent API for insomnia and sleep disorder therapeutics.',
            'description' => 'Precision crystallization manufacturing yielding consistent particle size distribution for immediate-release solid formulations. Manufactured under stringent GMP environmental controls.',
            'featured'    => true,
            'moq'         => '10 Kgs',
            'cas_number'  => '43200-80-2',
            'mol_formula' => 'C17H17ClN6O3',
            'grade'       => 'EP / BP Grade',
            'regulatory'  => 'WHO-GMP, Full Analytical Method Validation',
            'certifications' => 'WHO-GMP, ISO 9001:2015, Batch COA',
            'applications' => ['Immediate-Release Sleep Therapy Tablets', 'Controlled Substance Formulation Blocks', 'Hospital Grade Sedative Therapeutics'],
            'specifications' => [
                ['label' => 'CAS Number', 'value' => '43200-80-2'],
                ['label' => 'Assay', 'value' => '98.5% - 101.5% (Dried Basis)'],
                ['label' => 'Related Substances', 'value' => 'Individual Impurity < 0.1%'],
            ]
        ],
        [
            'slug'        => 'tapentadol-api',
            'name'        => 'Tapentadol Hydrochloride API',
            'division'    => 'pharmaceuticals',
            'category'    => 'Active Pharmaceutical Ingredients (APIs)',
            'short_desc'  => 'Centrally acting synthetic analgesic API with dual mechanism of action for severe acute and chronic pain.',
            'description' => 'High-potency active ingredient synthesized with rigorous impurity profiling (chiral chromatography, residual solvent GC-MS) complying with international pharmacopeia standards.',
            'featured'    => true,
            'moq'         => '10 Kgs',
            'cas_number'  => '175591-09-0',
            'mol_formula' => 'C14H23NO·HCl',
            'grade'       => 'USP / In-House Pharmacopeia',
            'regulatory'  => 'WHO-GMP Compliant, Validated Synthesis Route',
            'certifications' => 'WHO-GMP, ISO 9001:2015, Complete Impurity Profile',
            'applications' => ['Extended Release Pain Formulations', 'Immediate Release Analgesic Tablets', 'Severe Chronic Pain Therapeutics'],
            'specifications' => [
                ['label' => 'CAS Number', 'value' => '175591-09-0'],
                ['label' => 'Assay (Potency)', 'value' => '99.2% - 100.8%'],
                ['label' => 'Heavy Metals', 'value' => '< 5 ppm'],
            ]
        ]
    ];

    $created_count = 0;

    foreach ($products_data as $data) {
        $existing = get_page_by_path($data['slug'], OBJECT, 'product');
        if ($existing) {
            continue; // Skip if already exists
        }

        // 1. Create WooCommerce Product Post
        $post_id = wp_insert_post([
            'post_title'   => $data['name'],
            'post_name'    => $data['slug'],
            'post_content' => $data['description'],
            'post_excerpt' => $data['short_desc'],
            'post_status'  => 'publish',
            'post_type'    => 'product',
        ]);

        if (is_wp_error($post_id) || !$post_id) {
            continue;
        }

        // 2. Set Product Type & Featured Status
        wp_set_object_terms($post_id, 'simple', 'product_type');
        if (!empty($data['featured'])) {
            wp_set_object_terms($post_id, 'featured', 'product_visibility');
        }

        // 3. Assign Categories
        $division_term = get_term_by('slug', $data['division'], 'product_cat');
        if ($division_term) {
            wp_set_object_terms($post_id, (int)$division_term->term_id, 'product_cat', true);
        }

        if (!empty($data['category'])) {
            $cat_term = get_term_by('name', $data['category'], 'product_cat');
            if ($cat_term) {
                wp_set_object_terms($post_id, (int)$cat_term->term_id, 'product_cat', true);
            }
        }

        // 4. Save Custom Meta Fields
        update_post_meta($post_id, 'vencilla_division', $data['division']);
        if (!empty($data['moq'])) update_post_meta($post_id, 'vencilla_moq', $data['moq']);
        if (!empty($data['composition'])) update_post_meta($post_id, 'vencilla_composition', $data['composition']);
        if (!empty($data['fabric_type'])) update_post_meta($post_id, 'vencilla_fabric_type', $data['fabric_type']);
        if (!empty($data['gsm'])) update_post_meta($post_id, 'vencilla_gsm', $data['gsm']);
        if (!empty($data['width'])) update_post_meta($post_id, 'vencilla_width', $data['width']);
        if (!empty($data['weave'])) update_post_meta($post_id, 'vencilla_weave', $data['weave']);
        if (!empty($data['finish'])) update_post_meta($post_id, 'vencilla_finish', $data['finish']);
        if (!empty($data['certifications'])) update_post_meta($post_id, 'vencilla_certifications', $data['certifications']);
        if (!empty($data['cas_number'])) update_post_meta($post_id, 'vencilla_cas_number', $data['cas_number']);
        if (!empty($data['mol_formula'])) update_post_meta($post_id, 'vencilla_molecular_formula', $data['mol_formula']);
        if (!empty($data['grade'])) update_post_meta($post_id, 'vencilla_grade', $data['grade']);
        if (!empty($data['regulatory'])) update_post_meta($post_id, 'vencilla_regulatory_status', $data['regulatory']);

        if (!empty($data['applications'])) {
            update_post_meta($post_id, 'vencilla_applications', json_encode($data['applications']));
        }
        if (!empty($data['specifications'])) {
            update_post_meta($post_id, 'vencilla_specifications', json_encode($data['specifications']));
        }

        $created_count++;
    }

    return "Successfully seeded {$created_count} Vencilla products into WooCommerce!";
}

// Secret URL Trigger
add_action('init', function() {
    if (isset($_GET['seed_vencilla_products']) && $_GET['seed_vencilla_products'] === 'VENCILLA_SEED_2024') {
        if (!current_user_can('manage_options') && !is_super_admin()) {
            wp_die('Access denied. Please login to WordPress admin first.');
        }
        $result = vencilla_seed_initial_products();
        wp_die(esc_html($result) . '<br><br><a href="' . admin_url('edit.php?post_type=product') . '">&larr; Go to Products Dashboard</a>');
    }
});
