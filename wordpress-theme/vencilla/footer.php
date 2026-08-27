<footer class="site-footer">
    <div class="gold-gradient-top-border" style="height: 4px; background: linear-gradient(90deg, #C9A24B, #F3E5AB, #9A772B); width: 100%;"></div>
    
    <div class="container-vc footer-grid">
        <!-- Column 1: Brand -->
        <div class="footer-col brand-col">
            <div class="footer-logo">
                <span class="v-glyph" style="background: linear-gradient(to right, #C9A24B, #F3E5AB); -webkit-background-clip: text; color: transparent; font-family: 'Cinzel', serif; font-size: 2rem;">V</span>
                <span class="font-serif-luxury text-xl">VENCILLA</span>
            </div>
            <div class="eyebrow" style="color: #C9A24B; margin-top: 0.5rem; display: block;">GLOBAL EXCELLENCE</div>
            <p>Vencilla is a premier exporter of high-quality textiles and pharmaceutical products, bridging global markets with excellence and integrity.</p>
            <div class="social-links">
                <a href="#" aria-label="LinkedIn" class="social-icon">L</a>
                <a href="#" aria-label="Twitter" class="social-icon">T</a>
                <a href="#" aria-label="Instagram" class="social-icon">I</a>
            </div>
        </div>

        <!-- Column 2: Textiles -->
        <div class="footer-col links-col">
            <h4 class="font-serif-luxury">Textiles</h4>
            <ul>
                <li><a href="<?php echo esc_url( home_url( '/products' ) ); ?>">African Wax Prints</a></li>
                <li><a href="<?php echo esc_url( home_url( '/products' ) ); ?>">Uniform Fabrics</a></li>
                <li><a href="<?php echo esc_url( home_url( '/products' ) ); ?>">Cotton Fabrics</a></li>
                <li><a href="<?php echo esc_url( home_url( '/products' ) ); ?>">Embroidered Fabrics</a></li>
                <li><a href="<?php echo esc_url( home_url( '/products' ) ); ?>">Scarves & Dupatta</a></li>
            </ul>
        </div>

        <!-- Column 3: Pharmaceuticals -->
        <div class="footer-col links-col">
            <h4 class="font-serif-luxury">Pharmaceuticals</h4>
            <ul>
                <li><a href="<?php echo esc_url( home_url( '/products' ) ); ?>">Product Catalogue</a></li>
                <li><a href="<?php echo esc_url( home_url( '/products/pregabalin-api' ) ); ?>">Pregabalin API</a></li>
                <li><a href="<?php echo esc_url( home_url( '/products/zopiclone-api' ) ); ?>">Zopiclone API</a></li>
                <li><a href="<?php echo esc_url( home_url( '/products/tapentadol-api' ) ); ?>">Tapentadol API</a></li>
                <li><a href="<?php echo esc_url( home_url( '/quality' ) ); ?>">Quality Standards</a></li>
            </ul>
        </div>

        <!-- Column 4: Contact -->
        <div class="footer-col contact-col">
            <h4 class="font-serif-luxury">Contact</h4>
            <div class="contact-info">
                <p><a href="mailto:export@vencilla.com">export@vencilla.com</a></p>
                <p><a href="tel:+917622009300">+91 7622009300</a></p>
                <p>434/3b Somakanji wadi<br>Khatodara Surat 395002</p>
            </div>
            <div class="contact-buttons" style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
                <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn-primary" style="text-align: center;">Send Inquiry</a>
                <a href="https://wa.me/917622009300" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="text-align: center;">Chat on WhatsApp</a>
            </div>
        </div>
    </div>

    <div class="footer-bottom container-vc" style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; margin-top: 2rem;">
        <div class="copyright">
            &copy; <?php echo date('Y'); ?> Vencilla Global Excellence
        </div>
        <div class="certifications eyebrow">
            WHO-GMP &middot; ISO 9001:2015 &middot; CEP &middot; OEKO-TEX
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
