'use strict';

/**
 * Utility to return a selector that excludes all passed selectors
 * @module deselect
 *
 * @param {Array} selectors - Array of selectors to exclude; value is split against ',' if string is passed
 * @return {String} CSS selector to not select elements matching passed selectors value
 */
var deselect = function (selectors) {
	selectors = selectors || null;

	if (!selectors) {
		return '';
	}

	if (typeof selectors === 'string') {
		selectors = selectors.split(',');
	}

	return selectors.map(function (selector) {
		return ['*:not(', selector, ')'].join('');
	}).join(' ');
};

module.exports = deselect;
