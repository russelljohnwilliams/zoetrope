<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package electric-eskimo
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=PT+Mono&family=Roboto+Mono:wght@300&display=swap" rel="stylesheet">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'electric-eskimo' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() ) :
				?>
				<p>&lt;head&gt;</p><br>
				<div id="site-logo" class="sticky"><p>&lt;title&gt;</p><h1>zoetrope</h1><p>&lt;/title&gt;</p></div>
				<p>&lt;/head&gt;</p><br>
				<p>&lt;body&gt;</p><br>
				<span class="blurb">
					web design and development<br>
					specializing in e-commerce<br>
				</span>
				<p>&lt;/body&gt;</p><br>
				
				<?php
			else :
				?>
	
	<div class="sticky"><p>&lt;title&gt;</p><h1>zoetrope</h1><p>&lt;/title&gt;</p></div>
	

				<?php
			endif;
			$electric_eskimo_description = get_bloginfo( 'description', 'display' );
			if ( $electric_eskimo_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $electric_eskimo_description; /* WPCS: xss ok. */ ?></p>
			<?php endif; ?>
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">
			<button id="navigation-button"><p>&lt;nav&gt;</p><span class="menu-button-txt">open navigation</span><p>&lt;/nav&gt;</p></button>
<!-- 			&lt;! &hyphen; &hyphen;     
			&hyphen; &hyphen; &gt; -->
			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
				'menu_class'		=> 'closed',
			) );
			?>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">
