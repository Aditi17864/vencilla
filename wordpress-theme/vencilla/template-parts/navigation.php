<?php
$nav_links = array(
    array( 'title' => 'Home', 'url' => '/', 'path' => 'home' ),
    array( 'title' => 'Textiles', 'url' => '/textiles', 'path' => 'textiles' ),
    array( 'title' => 'Pharmaceuticals', 'url' => '/pharmaceuticals', 'path' => 'pharmaceuticals' ),
    array( 'title' => 'About Us', 'url' => '/about', 'path' => 'about' ),
    array( 'title' => 'Manufacturing', 'url' => '/quality', 'path' => 'manufacturing' ),
    array( 'title' => 'Quality', 'url' => '/quality', 'path' => 'quality' ),
    array( 'title' => 'Global Markets', 'url' => '/global-presence', 'path' => 'global-markets' ),
    array( 'title' => 'Contact', 'url' => '/contact', 'path' => 'contact' ),
);

if ( ! function_exists( 'vencilla_is_active' ) ) {
    function vencilla_is_active( $url ) {
        global $wp;
        
        if ( $url === '/' ) {
            return is_front_page() || is_home();
        }
        
        $current_url = home_url( add_query_arg( array(), $wp->request ) );
        $link_url = home_url( $url );
        
        if ( trailingslashit($current_url) === trailingslashit($link_url) ) {
            return true;
        }
        
        return false;
    }
}
?>

<ul class="nav-links">
    <?php foreach ( $nav_links as $link ) : 
        $is_active = vencilla_is_active( $link['url'] );
        $active_class = $is_active ? ' active' : '';
    ?>
        <li>
            <a href="<?php echo esc_url( home_url( $link['url'] ) ); ?>" class="nav-link<?php echo esc_attr( $active_class ); ?>">
                <?php echo esc_html( $link['title'] ); ?>
            </a>
        </li>
    <?php endforeach; ?>
</ul>
