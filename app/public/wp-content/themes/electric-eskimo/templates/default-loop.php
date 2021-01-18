<div class="script-posts script-posts-default-loop">

	<?php if ( $posts->have_posts() ) : ?>

		<?php while ( $posts->have_posts() ) : $posts->the_post(); ?>

			<div  id="script-post-<?php the_ID(); ?>" class="script-post">

				<?php if ( has_post_thumbnail( get_the_ID() ) ) : ?>
					<div class="script-post-thumbnail"><?php the_post_thumbnail(); ?></div>
				<?php endif; ?>
				<div class="script-post-title-wrapper">
					<h2 class="script-post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				</div>
			</div>

		<?php endwhile; ?>

		<?php else : ?>
			<h4><?php _e( 'Posts not found', 'shortcodes-ultimate' ); ?></h4>
		<?php endif; ?>

	</div>
