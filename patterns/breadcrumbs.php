<?php
/**
 * Title: Breadcrumbs
 * Slug: x3p0-ideas/breadcrumbs
 * Description:
 * Categories: banner
 * Keywords: breadcrumbs, trail
 * Block Types: x3p0/breadcrumbs
 */

if ( WP_Block_Type_Registry::get_instance()->is_registered( 'x3p0/breadcrumbs' ) ) : ?>
	<!-- wp:x3p0/breadcrumbs {
		"metadata":{"name":"<?= esc_attr__( 'Breadcrumbs', 'x3p0-ideas' ) ?>"},
		"itemsJustification":"left",
		"align":"full",
		"style":{
			"spacing":{
				"padding":{
					"top":"var:preset|spacing|base",
					"right":"var:preset|spacing|plus-3",
					"bottom":"var:preset|spacing|base",
					"left":"var:preset|spacing|plus-3"
				}
			}
		},
		"gradient":"90-deg-neutral-base-transparent"
	} /-->
<?php endif ?>
