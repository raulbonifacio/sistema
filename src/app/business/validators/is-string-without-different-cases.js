/**
 * This function returns `true` if the provided
 * value does not have different cases.
 */
function isStringWithoutDifferentCases(value) {
	return value.toUpperCase() == value || value.toLowerCase() == value;
}

module.exports = isStringWithoutDifferentCases;
