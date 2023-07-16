<?php
/**
 * Title: Post Grid: Cards
 * Slug: x3p0-ideas/post-grid-cards
 * Description: Displays a grid of post cards.
 * Categories: posts
 * Keywords: query, loop, grid, posts, card
 * Block Types: core/query
 * Viewport Width: 1376
 */
?>
<!-- wp:query {"queryId":0,"query":{"perPage":6,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"align":"full","className":"pattern-post-grid-cards","layout":{"type":"constrained"}} -->
<div class="wp-block-query alignfull pattern-post-grid-cards"><!-- wp:group {"align":"full","layout":{"type":"default"}} -->
<div class="wp-block-group alignfull"><!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var(\u002d\u002dtheme-spacing\u002d\u002dplus-3)","right":"var:preset|spacing|plus-3","bottom":"var(\u002d\u002dtheme-spacing\u002d\u002dplus-3)","left":"var:preset|spacing|plus-3"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group alignwide" style="padding-top:var(--theme-spacing--plus-3);padding-right:var(--wp--preset--spacing--plus-3);padding-bottom:var(--theme-spacing--plus-3);padding-left:var(--wp--preset--spacing--plus-3)"><!-- wp:post-template {"style":{"spacing":{"blockGap":"var:preset|spacing|plus-3"}},"className":"is-style-flex-grow","layout":{"type":"grid","columnCount":3}} -->
<!-- wp:group {"tagName":"article","style":{"spacing":{"blockGap":"0"},"dimensions":{"minHeight":"100%"},"border":{"width":"1px","color":"#e2e8f0"}},"className":"","layout":{"type":"flex","orientation":"vertical"}} -->
<article class="wp-block-group has-border-color" style="border-color:#e2e8f0;border-width:1px;min-height:100%"><!-- wp:post-featured-image {"isLink":true,"aspectRatio":"auto","width":"100%","height":"18rem","style":{"border":{"bottom":{"color":"#0284c7","width":"5px"},"radius":"0px"},"layout":{"selfStretch":"fixed","flexSize":"18rem"}}} /-->

<!-- wp:group {"style":{"dimensions":{"minHeight":""},"layout":{"selfStretch":"fill","flexSize":null},"spacing":{"blockGap":"0"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"stretch","verticalAlignment":"space-between"}} -->
<div class="wp-block-group"><!-- wp:group {"style":{"spacing":{"padding":{"right":"var(\u002d\u002dtheme-spacing\u002d\u002dplus-3)","left":"var(\u002d\u002dtheme-spacing\u002d\u002dplus-3)","top":"var:preset|spacing|plus-3","bottom":"var:preset|spacing|plus-3"},"blockGap":"var:preset|spacing|base"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--plus-3);padding-right:var(--theme-spacing--plus-3);padding-bottom:var(--wp--preset--spacing--plus-3);padding-left:var(--theme-spacing--plus-3)"><!-- wp:group {"tagName":"header","style":{"spacing":{"blockGap":"var:preset|spacing|minus-2"}},"layout":{"type":"constrained"}} -->
<header class="wp-block-group"><!-- wp:post-title {"isLink":true} /--></header>
<!-- /wp:group -->

<!-- wp:post-excerpt {"moreText":"Continue reading →","showMoreOnNewLine":false,"excerptLength":20} /--></div>
<!-- /wp:group -->

<!-- wp:group {"tagName":"footer","layout":{"type":"constrained"}} -->
<footer class="wp-block-group"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|plus-3","padding":{"top":"var(\u002d\u002dtheme-spacing\u002d\u002dbase)","bottom":"var(\u002d\u002dtheme-spacing\u002d\u002dbase)","left":"var:preset|spacing|plus-3","right":"var:preset|spacing|plus-3"}},"border":{"top":{"color":"var:preset|color|neutral-base","width":"1px"}}},"layout":{"type":"flex","flexWrap":"wrap"},"fontSize":"sm"} -->
<div class="wp-block-group has-sm-font-size" style="border-top-color:var(--wp--preset--color--neutral-base);border-top-width:1px;padding-top:var(--theme-spacing--base);padding-right:var(--wp--preset--spacing--plus-3);padding-bottom:var(--theme-spacing--base);padding-left:var(--wp--preset--spacing--plus-3)"><!-- wp:post-author-name {"isLink":true,"className":"is-style-icon"} /-->

<!-- wp:post-date {"className":"is-style-icon"} /--></div>
<!-- /wp:group --></footer>
<!-- /wp:group --></div>
<!-- /wp:group --></article>
<!-- /wp:group -->
<!-- /wp:post-template --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:query-pagination {"paginationArrow":"arrow","layout":{"type":"flex","justifyContent":"space-between"}} -->
<!-- wp:query-pagination-previous /-->

<!-- wp:query-pagination-numbers /-->

<!-- wp:query-pagination-next /-->
<!-- /wp:query-pagination --></div>
<!-- /wp:query -->
