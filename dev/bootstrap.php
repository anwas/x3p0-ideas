<?php

/**
 * Bootstraps dev features.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023-2024, Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPL-3.0-or-later
 * @link      https://github.com/x3p0-dev/x3p0-ideas
 */

declare(strict_types=1);

namespace X3P0\Ideas\Dev;

# Prevent direct execution.
if (! defined('ABSPATH')) {
	return;
}

# Bootstrap dev.
add_action('after_setup_theme', __NAMESPACE__ . '\\bootstrap', PHP_INT_MIN);
