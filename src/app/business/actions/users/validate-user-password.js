const {
	isNotAString,
	isStringWithoutDifferentCases,
	isStringOutOfRange,
} = require("../../validators");

const MAX_PASSWORD_LENGTH = 255;

function validateUserPassword(context, next) {

	const { password } = context.input;
	const { errors } = context.result;

	if (isNotAString(password)) {
		errors.password = "The password is not a string.";
	} else if (isStringOutOfRange(password, 1, MAX_PASSWORD_LENGTH)) {
		errors.password = `The password must be between 1 and ${MAX_PASSWORD_LENGTH} characters.`;
	} else if (isStringWithoutDifferentCases(password)) {
		errors.password = "The password must contain lower and upper case letters.";
	}

	return next();
}

module.exports = validateUserPassword;
