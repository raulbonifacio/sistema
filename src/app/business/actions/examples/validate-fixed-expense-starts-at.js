const { isNotADate } = require("../../validators");

function validateFixedExpenseStartsAt(context) {

	const { startsAt } = input;
	const { errors } = result;
	const { isNotADate } = globals.validators;

	if (isNotADate(startsAt)) {
		errors.set("startsAt", "The starts at field is not a date.");
	}

	return context;
}

module.exports = validateFixedExpenseStartsAt;
