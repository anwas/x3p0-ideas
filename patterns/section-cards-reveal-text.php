<?php

/**
 * Title: Section: Text Reveal Cards
 * Slug: x3p0-ideas/section-cards-reveal-text
 * Categories: x3p0-section
 * Keywords: card, cover, grid, hover, reveal
 * Block Types: core/cover
 * Viewport Width: 1376
 */

declare(strict_types=1);

# Prevent direct access.
defined('ABSPATH') || exit;

?>
<!-- wp:group {
	"tagName":"section",
	"metadata":{"name":"<?= esc_attr__('Section', 'x3p0-ideas') ?>"},
	"style":{
		"spacing":{
			"padding":{
				"right":"var:preset|spacing|plus-3",
				"left":"var:preset|spacing|plus-3"
			}
		}
	},
	"align":"full",
	"className":"is-style-section",
	"layout":{
		"type":"constrained",
		"contentSize":"40rem",
		"wideSize":"80rem"
	}
} -->
<section class="wp-block-group alignfull is-style-section" style="padding-right:var(--wp--preset--spacing--plus-3);padding-left:var(--wp--preset--spacing--plus-3)">

	<!-- wp:pattern {"slug":"x3p0-ideas/section-header"} /-->
	<!-- wp:pattern {"slug":"x3p0-ideas/grid-cards-reveal-text"} /-->

</section>
<!-- /wp:group -->
