/**
 * This function returns `true` if the provided string
 * is not a date.
 */
function isNotADate(value) {
	return new Date(value || "" ) == "Invalid Date";
}

module.exports = isNotADate;
