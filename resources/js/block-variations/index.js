/**
 * Registers block variations.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023-2024, Justin Tadlock
 * @license   GPL-3.0-or-later
 */

// Internal dependencies.
import commentParentLink from './comment-parent-link';
import paginationLabel   from './pagination-label';
import postFormat        from './post-format';
import readingTime       from './reading-time';
import siteCopyright     from './site-copyright';
import themeSpacer       from './theme-spacer';

// WordPress dependencies.
import { registerBlockVariation } from '@wordpress/blocks';

// Register each block variation.
registerBlockVariation(commentParentLink.block, commentParentLink.variation);
registerBlockVariation(paginationLabel.block,   paginationLabel.variation);
registerBlockVariation(postFormat.block,        postFormat.variation);
registerBlockVariation(readingTime.block,       readingTime.variation);
registerBlockVariation(siteCopyright.block,     siteCopyright.variation);
registerBlockVariation(themeSpacer.block,       themeSpacer.variation);
