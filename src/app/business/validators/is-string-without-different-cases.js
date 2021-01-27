/**
 * This function returns `true` if the provided
 * value does not have different cases.
 */
function isStringWithoutDifferentCases(value, not) {
	return (value.toUpperCase() == value || value.toLowerCase() == value) && !not; 
}

module.exports = isStringWithoutDifferentCases;
