const { isNotADate } = require("../../validators");

function validateFixedExpenseStartsAt(context) {
	const { startsAt } = context.input;
	const { errors } = context.result;

	if (isNotADate(startsAt)) {
		errors.startsAt = "The starts at field is not a date.";
	}

	return context;
}

module.exports = validateFixedExpenseStartsAt;
