const isNotABoolean = require("../../validators/is-not-a-boolean");

function validateFixedExpenseDueAtBusinessDay(context) {
	const { dueAtBusinessDay } = context.input;
	const { errors } = context.result;

	if (isNotABoolean(dueAtBusinessDay)) {
		errors.dueAtBusinessDay = "The due date at business day must be either 'true' of 'false'.";
	}

	return context;
}

module.exports = validateFixedExpenseDueAtBusinessDay;
