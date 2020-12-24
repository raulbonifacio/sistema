
/**
 * This function returns `true` if the value is not an
 * integer.
 */
function isNotAnInteger(value) {
	return !/^\d+$/.test(value);
}

module.exports = isNotAnInteger;
