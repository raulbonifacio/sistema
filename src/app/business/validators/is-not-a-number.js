/**
 * This function returns `true` if the provided string
 * is not a number.
 */
function isNotANumber(value) {
	const number = Number.parseFloat(value);
	return Number.isNaN(number);
}

module.exports = isNotANumber;
