<?php
/**
 * Template part for displaying the Stats Bar.
 *
 * @package Vencilla
 */
?>

<div class="stats-bar">
    <div class="container-vc">
        <div class="stats-grid">
            <!-- Stat 1 -->
            <div class="stat-item">
                <div class="stat-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div class="stat-text">
                    <div class="stat-number font-serif-luxury text-3xl font-bold"><?php esc_html_e( '50+', 'vencilla' ); ?></div>
                    <div class="stat-label uppercase"><?php esc_html_e( 'COUNTRIES', 'vencilla' ); ?></div>
                    <div class="stat-sublabel text-gold uppercase"><?php esc_html_e( 'GLOBAL PRESENCE', 'vencilla' ); ?></div>
                </div>
            </div>

            <div class="stats-divider hidden-mobile"></div>

            <!-- Stat 2 -->
            <div class="stat-item">
                <div class="stat-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                </div>
                <div class="stat-text">
                    <div class="stat-number font-serif-luxury text-3xl font-bold"><?php esc_html_e( '2', 'vencilla' ); ?></div>
                    <div class="stat-label uppercase"><?php esc_html_e( 'STATE-OF-THE-ART', 'vencilla' ); ?></div>
                    <div class="stat-sublabel text-gold uppercase"><?php esc_html_e( 'MANUFACTURING UNITS', 'vencilla' ); ?></div>
                </div>
            </div>

            <div class="stats-divider hidden-mobile"></div>

            <!-- Stat 3 -->
            <div class="stat-item">
                <div class="stat-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div class="stat-text">
                    <div class="stat-number font-serif-luxury text-3xl font-bold"><?php esc_html_e( '1000+', 'vencilla' ); ?></div>
                    <div class="stat-label uppercase"><?php esc_html_e( 'SATISFIED', 'vencilla' ); ?></div>
                    <div class="stat-sublabel text-gold uppercase"><?php esc_html_e( 'GLOBAL CLIENTS', 'vencilla' ); ?></div>
                </div>
            </div>

            <div class="stats-divider hidden-mobile"></div>

            <!-- Stat 4 -->
            <div class="stat-item">
                <div class="stat-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                </div>
                <div class="stat-text">
                    <div class="stat-number font-serif-luxury text-3xl font-bold"><?php esc_html_e( '100+', 'vencilla' ); ?></div>
                    <div class="stat-label uppercase"><?php esc_html_e( 'QUALITY-CERTIFIED', 'vencilla' ); ?></div>
                    <div class="stat-sublabel text-gold uppercase"><?php esc_html_e( 'PRODUCTS', 'vencilla' ); ?></div>
                </div>
            </div>

            <div class="stats-divider hidden-mobile"></div>

            <!-- Stat 5 -->
            <div class="stat-item">
                <div class="stat-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                </div>
                <div class="stat-text">
                    <div class="stat-number font-serif-luxury text-3xl font-bold"><?php esc_html_e( '20+', 'vencilla' ); ?></div>
                    <div class="stat-label uppercase"><?php esc_html_e( 'YEARS OF EXPORT', 'vencilla' ); ?></div>
                    <div class="stat-sublabel text-gold uppercase"><?php esc_html_e( 'EXCELLENCE', 'vencilla' ); ?></div>
                </div>
            </div>
        </div>
    </div>
</div>
