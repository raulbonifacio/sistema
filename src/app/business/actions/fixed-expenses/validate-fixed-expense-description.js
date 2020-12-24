const { isNotAString, isStringEmpty, isStringOutOfRange } = require("../../validators");

function validateFixedExpenseDescription(context) {

	const { description } = context.input;
	const { errors } = context.result;

	if (isNotAString(description)) {
		errors.description = "The description is not a string.";
	} else if (isStringEmpty(description)) {
		errors.description = "The description is empty.";
	} else if (isStringOutOfRange(description)) {
		errors.description = "The description must be between 0 and 255 characters.";
	}

	return context;
}

module.exports = validateFixedExpenseDescription;
