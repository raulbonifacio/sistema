/**
 * This function returns `true` if the string
 * is out of the specified range.
 */
function isStringOutOfRange(value, min = 0, max = 255) {
	return value.length > max || value.length < min;
}

module.exports = isStringOutOfRange;
