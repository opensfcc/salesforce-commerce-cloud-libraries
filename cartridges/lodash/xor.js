'use strict';

var baseXor = require('./internal/baseXor');
var isArrayLikeObject = require('./isArrayLikeObject');

/**
 * Creates an array of unique values that is the
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * of the given arrays. The order of result values is determined by the order
 * they occur in the arrays.
 *
 * @since 2.4.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @see difference, union, unionBy, unionWith, without, xorBy, xorWith
 * @example
 *
 * xor([2, 1], [2, 3]) => [1, 3]
 */
function xor() {
    var arrays = Array.prototype.slice.call(arguments);
    return baseXor(arrays.filter(isArrayLikeObject));
}

module.exports = xor;
