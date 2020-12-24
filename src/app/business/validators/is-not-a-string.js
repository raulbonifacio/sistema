/**
 * This function returns `true` if the value is not a
 * string.
 */
function isNotString(value) {
	return !(typeof value == "string");
}

module.exports = isNotString;
