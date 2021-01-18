<?php
/**
* The main template file
*
* This is the most generic template file in a WordPress theme
* and one of the two required files for a theme (the other being style.css).
* It is used to display a page when nothing more specific matches a query.
* E.g., it puts together the home page when no home.php file exists.
*
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/
*
* @package electric-eskimo
*/

get_header();
?>
<!-- <div id=border></div> -->

<div id="primary" class="content-area">
	<main id="main" class="site-main">
		
		<div id="first-section" class="above-the-fold"><p>&lt;html&gt;</p><br>
			<p>&lt;head&gt;</p><br>
			<div class="sticky"><p>&lt;title&gt;</p><h1>zoetrope</h1><p>&lt;/title&gt;</p></div>
			<p>&lt;/head&gt;</p><br>
			<p>&lt;body&gt;</p><br>
			<span class="blurb">
				web design and development<br>
				specializing in e-commerce<br>
			</span>
			<p>&lt;/body&gt;</p><br>
			
				<p class="console">
				    <span></span><span id="caption"></span>
				    <!-- <span id="cursor">|</span> -->
				</p>
			</div>
		<!-- 	<div id="confetti-wrapper">
				<div id="confetti">
				</div>
			</div> -->
		</div>

		<div id="second-section">
		</div>

	</main><!-- #main -->
</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
