/**
 * This function returns `true` if the provided string
 * is number between the range.
 */
function isNumberOutOfRange(value, min = 0, max = Number.MAX_VALUE) {
	const number = Number.parseFloat(value);
	return number > max || number < min;
}

module.exports = isNumberOutOfRange;
