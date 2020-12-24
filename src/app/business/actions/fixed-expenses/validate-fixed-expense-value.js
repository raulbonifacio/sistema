const { isNotANumber, isNotACurrency, isNumberOutOfRange } = require("../../validators");

function validateFixedExpenseValue(context) {
	const { value } = context.input;
	const { errors } = context.result;

	if (isNotANumber(value)) {
		errors.value = "The value is not a number.";
	} else if (isNotACurrency(value)) {
		errors.value = "The value is not a currency.";
	} else if (isNumberOutOfRange(value)) {
		errors.value = "The value is not between 0 and " + Number.MAX_VALUE + ".";
	}

	return context;
}

module.exports = validateFixedExpenseValue;
