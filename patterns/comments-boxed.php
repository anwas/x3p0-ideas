<?php

/**
 * Title: Comments: Boxed
 * Slug: x3p0-ideas/comments-boxed
 * Keywords: comments, discussion
 * Block Types: core/comments, core/template-part/comments
 * Viewport Width: 1376
 */

declare(strict_types=1);

# Prevent direct access.
defined('ABSPATH') || exit;

?>
<!-- wp:comments {
	"style":{
		"spacing":{
			"padding":{
				"top":"var:preset|spacing|plus-3",
				"bottom":"var:preset|spacing|plus-3"
			}
		}
	},
	"layout":{"type":"constrained"}
} -->
<div class="wp-block-comments" style="padding-top:var(--wp--preset--spacing--plus-3);padding-bottom:var(--wp--preset--spacing--plus-3)">

	<!-- wp:group {
		"metadata":{"name":"<?= esc_attr__('Comments Container', 'x3p0-ideas') ?>"},
		"className":"has-global-border is-style-section-1",
		"layout":{"type":"constrained"}
	} -->
	<div class="wp-block-group has-global-border is-style-section-1">

		<!-- wp:comments-title {
			"showPostTitle":false,
			"fontSize":"xl"
		} /-->

		<!-- wp:comment-template -->
			<!-- wp:pattern {"slug":"x3p0-ideas/comment"} /-->
		<!-- /wp:comment-template -->

		<!-- wp:post-comments-form {"className":"has-icons"} /-->

	</div>
	<!-- /wp:group -->

</div>
<!-- /wp:comments -->
