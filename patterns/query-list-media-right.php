<?php

/**
 * Title: Post List: Media Right
 * Slug: x3p0-ideas/query-list-media-right
 * Description: Displays the queried posts with each post in a column. The title, byline, and excerpt are on the left and the featured media is on the right.
 * Categories: posts
 * Keywords: query, posts
 * Block Types: core/query
 */

declare(strict_types=1);

# Prevent direct access.
defined('ABSPATH') || exit;

$content_size = wp_get_global_settings([ 'layout', 'contentSize' ]);

?>
<!-- wp:query {
	"metadata":{"name":"<?= esc_attr__('Posts Query', 'x3p0-ideas') ?>"},
	"queryId":0,
	"query":{
		"perPage":6,
		"pages":0,
		"offset":0,
		"postType":"post",
		"order":"desc",
		"orderBy":"date",
		"author":"",
		"search":"",
		"exclude":[],
		"sticky":"",
		"inherit":true,
		"taxQuery":null,
		"parents":[]
	},
	"align":"full",
	"style":{
		"spacing":{
			"blockGap":"var:preset|spacing|plus-6",
			"padding":{
				"top":"var:preset|spacing|plus-6",
				"right":"var:preset|spacing|plus-3",
				"bottom":"var:preset|spacing|plus-6",
				"left":"var:preset|spacing|plus-3"
			}
		}
	},
	"layout":{
		"type":"constrained",
		"wideSize":"80rem",
		"contentSize":"<?= esc_attr(is_string($content_size) ? $content_size : '40rem') ?>"
	}
} -->
<div class="wp-block-query alignfull" style="padding-top:var(--wp--preset--spacing--plus-6);padding-right:var(--wp--preset--spacing--plus-3);padding-bottom:var(--wp--preset--spacing--plus-6);padding-left:var(--wp--preset--spacing--plus-3)">

	<!-- wp:post-template {
		"align":"wide",
		"style":{
			"spacing":{
				"blockGap":"var:preset|spacing|plus-6"
			}
		},
		"layout":{"type":"default"}
	} -->

		<!-- wp:columns {"className":"is-style-reverse-stack"} -->
		<div class="wp-block-columns is-style-reverse-stack">

			<!-- wp:column {
				"verticalAlignment":"center",
				"width":"40%",
				"style":{
					"spacing":{
						"blockGap":"var:preset|spacing|base"
					}
				},
				"layout":{"type":"constrained"}
			} -->
			<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:40%">

				<!-- wp:group {
					"tagName":"header",
					"style":{
						"spacing":{
							"blockGap":"var:preset|spacing|minus-2"
						}
					},
					"layout":{"type":"constrained"}
				} -->
				<header class="wp-block-group">
					<!-- wp:post-title {"isLink":true} /-->

					<!-- wp:group {
						"metadata":{
							"name":"<?= esc_attr__('Post Byline', 'x3p0-ideas') ?>"
						},
						"style":{
							"spacing":{
								"blockGap":"var:preset|spacing|base"
							}
						},
						"layout":{"type":"flex","flexWrap":"nowrap"},
						"className":"is-style-post-byline"
					} -->
					<div class="wp-block-group is-style-post-byline">
						<!-- wp:post-author-name {
							"isLink":true
						} /-->

						<!-- wp:paragraph {
							"metadata":{
								"name":"<?= esc_attr('Separator', 'x3p0-ideas') ?>"
							}
						} -->
						<p><?=
							// Translators: Metadata separator.
							esc_html__('&middot;', 'x3p0-ideas')
						?></p>
						<!-- /wp:paragraph -->

						<!-- wp:post-date /-->
					</div>
					<!-- /wp:group -->

				</header>
				<!-- /wp:group -->

				<!-- wp:post-excerpt {
					"moreText":"<?= esc_attr__('Continue reading &rarr;', 'x3p0-ideas') ?>",
					"showMoreOnNewLine":false,
					"excerptLength":25
				} /-->

			</div>
			<!-- /wp:column -->

			<!-- wp:column {"width":"60%"} -->
			<div class="wp-block-column" style="flex-basis:60%">
				<!-- wp:post-featured-image {
					"isLink":true,
					"aspectRatio":"16/9",
					"width":"",
					"height":"",
					"align":"wide"
				} /-->
			</div>
			<!-- /wp:column -->

		</div>
		<!-- /wp:columns -->

	<!-- /wp:post-template -->

	<!-- wp:query-pagination {
		"paginationArrow":"arrow",
		"layout":{
			"type":"flex",
			"justifyContent":"right"
		}
	} -->
		<!-- wp:paragraph {
			"metadata":{
				"bindings":{
					"content":{
						"source":"x3p0/theme",
						"args":{
							"key":"paginationLabel"
						}
					}
				},
				"@ifAttribute":"content"
			},
			"placeholder":"<?= esc_attr__('Page 3 / 7:', 'x3p0-ideas') ?>",
			"className":"pagination-label"
		} -->
		<p class="pagination-label"></p>
		<!-- /wp:paragraph -->
		<!-- wp:query-pagination-previous /-->
		<!-- wp:query-pagination-numbers /-->
		<!-- wp:query-pagination-next /-->
	<!-- /wp:query-pagination -->

</div>
<!-- /wp:query -->
