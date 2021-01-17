const {
	isNotAString,
	isStringOutOfRange,
	isStringNotAnEmail,
} = require("../../validators");

const MAX_EMAIL_LENGTH = 255;

function validateUserEmail(context) {
	const { email } = context.input;
	const { errors } = context.result;

	if (isNotAString(email)) {
		errors.email = "The email is not a string.";
	} else if (isStringOutOfRange(email, 1, MAX_EMAIL_LENGTH)) {
		errors.email = `The email must be between 1 and ${MAX_EMAIL_LENGTH} characters.`;
	} else if (isStringNotAnEmail(email)) {
		errors.email = "The email is not valid.";
	}

	return context; 
}

module.exports = validateUserEmail;
