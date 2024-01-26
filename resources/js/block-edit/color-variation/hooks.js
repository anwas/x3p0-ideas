/**
 * The hooks file houses custom React hooks for use with the component.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023-2024, Justin Tadlock
 * @license   GPL-3.0-or-later
 */

// Internal dependencies.
import { VARIATIONS, COLOR_SHADES } from "./constants";

// WordPress dependencies.
import { useSetting } from '@wordpress/block-editor';

/**
 * React hook that returns an array of colors.
 * @returns {Object}
 */
export const useVariationColors = () => {
	// Gets the variations as registered in `theme.json`.
	const palette = useSetting('color.palette');

	let colors = {};

	Object.keys(VARIATIONS).forEach((type) => {
		let shades = {};

		if ('default' === type) {
			const base = palette.find(
				({ slug }) => slug == 'base'
			);
			const contrast = palette.find(
				({ slug }) => slug == 'contrast'
			);

			if (base && contrast) {
				shades[ 'base' ] = base.color;
				shades[ 'contrast' ] = contrast.color;
			}
		}

		COLOR_SHADES.forEach((shade) => {
			if ('default' !== type) {

				const name = 'default' === type
					? shade
					: `${ type }-${ shade }`;

				const result = palette.find(
					({ slug }) => slug == name
				);

				if (result) {
					shades[ shade ] = result.color;
				}
			}
		});

		if (0 < Object.keys(shades).length) {
			colors[ type ] = shades;
		}
	});

	return colors;
};