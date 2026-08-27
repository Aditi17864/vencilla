<?php
/**
 * Template Name: About Page
 *
 * @package Vencilla
 */

get_header(); ?>

<main id="primary" class="site-main">
    
    <!-- Hero Section -->
    <section class="pt-32 pb-20 bg-[#07090E] relative overflow-hidden">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C9A24B]/5 to-transparent z-0"></div>
        <div class="container-vc relative z-10">
            <span class="eyebrow block text-[#C9A24B] uppercase tracking-widest text-sm mb-4">ABOUT VENCILLA</span>
            <h1 class="font-serif-luxury text-5xl md:text-7xl text-white mb-6">Crafting Excellence.<br/>Delivering Trust.</h1>
            <div class="gold-divider-left h-1 w-24 bg-gradient-to-r from-[#C9A24B] to-[#F3E5AB] mb-12"></div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-gray-800 pt-10">
                <div class="text-center p-4">
                    <div class="text-3xl text-[#C9A24B] mb-2 font-serif-luxury">25+</div>
                    <div class="text-sm text-gray-400 uppercase tracking-wide">Years Est.</div>
                </div>
                <div class="text-center p-4">
                    <div class="text-3xl text-[#00BCD4] mb-2 font-serif-luxury">50+</div>
                    <div class="text-sm text-gray-400 uppercase tracking-wide">Countries</div>
                </div>
                <div class="text-center p-4">
                    <div class="text-3xl text-[#C9A24B] mb-2 font-serif-luxury">200+</div>
                    <div class="text-sm text-gray-400 uppercase tracking-wide">Products</div>
                </div>
                <div class="text-center p-4">
                    <div class="text-3xl text-[#00BCD4] mb-2 font-serif-luxury">500+</div>
                    <div class="text-sm text-gray-400 uppercase tracking-wide">Employees</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mission & Values Section -->
    <section class="section bg-[#F9F6F0]">
        <div class="container-vc">
            <div class="text-center max-w-4xl mx-auto mb-16">
                <span class="eyebrow block text-[#9A772B] font-semibold uppercase tracking-widest text-sm mb-4">OUR MISSION</span>
                <p class="font-serif-luxury text-3xl md:text-4xl text-[#07090E] leading-relaxed">
                    To manufacture and supply superior quality chemical and pharmaceutical products globally, fostering sustainable partnerships and driving innovation.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <?php 
                $values = [
                    ['title' => 'Integrity', 'icon' => 'fa-shield-alt', 'desc' => 'Uncompromising adherence to moral and ethical principles in all our dealings.'],
                    ['title' => 'Consistency', 'icon' => 'fa-sync', 'desc' => 'Delivering reliable quality batch after batch, year after year.'],
                    ['title' => 'Partnership', 'icon' => 'fa-handshake', 'desc' => 'Building long-term collaborative relationships with our clients worldwide.'],
                    ['title' => 'Continuous Improvement', 'icon' => 'fa-chart-line', 'desc' => 'Constantly elevating our standards, processes and technological capabilities.']
                ];
                foreach ($values as $val) : ?>
                <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#C9A24B]">
                    <div class="text-3xl text-[#00BCD4] mb-4"><i class="fas <?php echo esc_attr($val['icon']); ?>"></i></div>
                    <h3 class="font-serif-luxury text-xl text-[#07090E] mb-3"><?php echo esc_html($val['title']); ?></h3>
                    <p class="text-gray-600 text-sm leading-relaxed"><?php echo esc_html($val['desc']); ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Company Story Section -->
    <section class="section bg-[#07090E] text-white">
        <div class="container-vc">
            <div class="flex flex-col lg:flex-row items-center gap-16">
                <div class="lg:w-1/2">
                    <span class="eyebrow text-[#C9A24B] mb-4 block">OUR STORY</span>
                    <h2 class="font-serif-luxury text-4xl md:text-5xl mb-6">A Legacy of Chemical Excellence</h2>
                    <div class="gold-divider-left h-1 w-20 bg-[#C9A24B] mb-8"></div>
                    <div class="space-y-6 text-gray-300 text-lg">
                        <p>
                            Founded in the late 90s, Vencilla emerged with a vision to bridge the gap between quality manufacturing and global accessibility in the chemical sector.
                        </p>
                        <p>
                            Starting as a specialized textile chemical manufacturer, we rapidly expanded our capabilities to include high-grade active pharmaceutical ingredients (APIs), intermediates, and industrial chemicals.
                        </p>
                        <p>
                            Today, with state-of-the-art facilities compliant with WHO-GMP and ISO standards, Vencilla stands as a trusted name across continents, empowering industries with essential building blocks for their products.
                        </p>
                    </div>
                </div>
                <div class="lg:w-1/2">
                    <div class="glass-card p-2 rounded-2xl relative">
                        <div class="absolute -top-4 -left-4 w-24 h-24 bg-[#00BCD4] opacity-20 rounded-full blur-2xl"></div>
                        <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C9A24B] opacity-20 rounded-full blur-2xl"></div>
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/about_facility.jpg" alt="Vencilla Facility" class="rounded-xl w-full h-auto object-cover border border-gray-800 shadow-2xl" onerror="this.src='https://via.placeholder.com/600x400/07090E/C9A24B?text=Vencilla+Facility'">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Manufacturing Facilities -->
    <section class="section bg-[#111520]">
        <div class="container-vc">
            <div class="text-center mb-16">
                <h2 class="font-serif-luxury text-4xl text-white mb-4">Infrastructure & Facilities</h2>
                <div class="gold-divider-center h-1 w-24 mx-auto bg-[#C9A24B]"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <!-- Facility 1 -->
                <div class="glass-card rounded-2xl overflow-hidden border border-gray-800 group">
                    <div class="h-48 bg-gray-900 relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#07090E] to-transparent z-10"></div>
                        <img src="https://via.placeholder.com/800x400/07090E/C9A24B?text=Pharma+Block" alt="Pharma Block" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="p-8">
                        <span class="bg-[#00BCD4]/20 text-[#00BCD4] px-3 py-1 text-xs uppercase tracking-widest rounded mb-4 inline-block">Pharma Division</span>
                        <h3 class="font-serif-luxury text-2xl text-white mb-4">API & Intermediates Plant</h3>
                        <ul class="space-y-3 text-gray-400 text-sm">
                            <li class="flex items-start"><i class="fas fa-check text-[#C9A24B] mt-1 mr-3"></i> WHO-GMP Certified manufacturing blocks</li>
                            <li class="flex items-start"><i class="fas fa-check text-[#C9A24B] mt-1 mr-3"></i> Clean room facilities for final processing</li>
                            <li class="flex items-start"><i class="fas fa-check text-[#C9A24B] mt-1 mr-3"></i> Dedicated pilot plant for scale-up studies</li>
                            <li class="flex items-start"><i class="fas fa-check text-[#C9A24B] mt-1 mr-3"></i> High-capacity glass-lined and SS reactors</li>
                        </ul>
                    </div>
                </div>

                <!-- Facility 2 -->
                <div class="glass-card rounded-2xl overflow-hidden border border-gray-800 group">
                    <div class="h-48 bg-gray-900 relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#07090E] to-transparent z-10"></div>
                        <img src="https://via.placeholder.com/800x400/07090E/C9A24B?text=Chemical+Block" alt="Chemical Block" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="p-8">
                        <span class="bg-[#C9A24B]/20 text-[#C9A24B] px-3 py-1 text-xs uppercase tracking-widest rounded mb-4 inline-block">Textile & Industrial</span>
                        <h3 class="font-serif-luxury text-2xl text-white mb-4">Specialty Chemicals Plant</h3>
                        <ul class="space-y-3 text-gray-400 text-sm">
                            <li class="flex items-start"><i class="fas fa-check text-[#00BCD4] mt-1 mr-3"></i> Automated liquid and powder blending lines</li>
                            <li class="flex items-start"><i class="fas fa-check text-[#00BCD4] mt-1 mr-3"></i> Zero Liquid Discharge (ZLD) ETP systems</li>
                            <li class="flex items-start"><i class="fas fa-check text-[#00BCD4] mt-1 mr-3"></i> Bulk storage capabilities for raw materials</li>
                            <li class="flex items-start"><i class="fas fa-check text-[#00BCD4] mt-1 mr-3"></i> Automated packaging and filling stations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Certifications -->
    <section class="section bg-[#07090E] py-16 border-y border-gray-800">
        <div class="container-vc text-center">
            <h3 class="font-serif-luxury text-2xl text-white mb-10">Global Quality Accreditations</h3>
            <div class="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                <div class="text-center">
                    <div class="w-24 h-24 mx-auto rounded-full border border-gray-700 flex items-center justify-center bg-gray-900 mb-3 hover:border-[#C9A24B] transition-colors">
                        <span class="font-bold text-gray-300">WHO-GMP</span>
                    </div>
                </div>
                <div class="text-center">
                    <div class="w-24 h-24 mx-auto rounded-full border border-gray-700 flex items-center justify-center bg-gray-900 mb-3 hover:border-[#C9A24B] transition-colors">
                        <span class="font-bold text-gray-300 text-sm text-center px-2">ISO 9001:2015</span>
                    </div>
                </div>
                <div class="text-center">
                    <div class="w-24 h-24 mx-auto rounded-full border border-gray-700 flex items-center justify-center bg-gray-900 mb-3 hover:border-[#C9A24B] transition-colors">
                        <span class="font-bold text-gray-300">CEP</span>
                    </div>
                </div>
                <div class="text-center">
                    <div class="w-24 h-24 mx-auto rounded-full border border-gray-700 flex items-center justify-center bg-gray-900 mb-3 hover:border-[#C9A24B] transition-colors">
                        <span class="font-bold text-gray-300 text-xs text-center px-1">OEKO-TEX</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php get_template_part('template-parts/feature-icons'); ?>

    <?php
    $cta_args = [
        'eyebrow' => 'Contact Us',
        'title'   => 'Ready to start a partnership?',
        'subtitle'=> 'Reach out to our global sales team to discuss your requirements.',
    ];
    get_template_part('template-parts/cta-section', null, $cta_args);
    ?>

</main>

<?php get_footer(); ?>
