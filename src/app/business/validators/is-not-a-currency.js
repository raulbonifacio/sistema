/**
 * This function returns `true` if the provided string
 * does not represent a currency.
 */
function isNotACurrency(value) {
	return !/\d+\.\d{2}/.test(value);
}

module.exports = isNotACurrency;
