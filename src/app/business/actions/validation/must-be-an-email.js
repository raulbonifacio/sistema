const { isAnEmail } = require("../../validators/string");

function mustBeAnEmail({ field, label = field }) {
	return ({ input, output }, next) => {
		const { [field]: value } = input;
		const { errors } = output;

		if (field in errors) return next();

		if (!isAnEmail(String(value))) {
			errors[field] = `The ${label} must be an e-mail.`;
		}

		return next();
	};
}

module.exports = mustBeAnEmail;
