/**
 * This function returns `true` if the value is not an
 * integer.
 */
function isNotInteger(value) {
	return !/^\d+$/.test(value);
}

module.exports = isNotInteger;
