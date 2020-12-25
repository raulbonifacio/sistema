/**
 * This function returns `true` if the provided string
 * does not represent a boolean.
 */
function isNotABoolean(value) {
	return !/^(false|true)$/.test(value);
}

module.exports = isNotABoolean;
