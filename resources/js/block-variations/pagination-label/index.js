/**
 * Query pagination label variation.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023-2024, Justin Tadlock
 * @license   GPL-3.0-or-later
 */

import { labelImportantIcon } from '../../common/utils-icon';
import { __, sprintf } from '@wordpress/i18n';

export default {
	block: 'core/paragraph',
	variation: {
		name:        'x3p0/pagination-label',
		title:       __('Pagination Label', 'x3p0-ideas'),
		description: __('Displays the pagination current and total pages.', 'x3p0-ideas'),
		category:    'theme',
		icon:        labelImportantIcon,
		scope:       [ 'inserter' ],
		attributes:  {
			metadata: {
				bindings: {
					content: {
						source: 'x3p0/theme',
						args: {
							key: 'paginationLabel'
						}
					}
				}
			},
			placeholder: sprintf(__('Page %1$s / %2$s:', 'x3p0-ideas'), 3, 7),
			className: "pagination-label"
		},
		isActive: (blockAttributes) =>
			'x3p0/theme' === blockAttributes?.metadata?.bindings?.content?.source
			&& 'paginationLabel' === blockAttributes?.metadata?.bindings?.content?.args?.key
	}
};
