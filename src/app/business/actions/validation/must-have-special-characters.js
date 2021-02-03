const { containsSpecialCharacters } = require("../../validators/string");

function mustHaveSpecialCharacters({ field, label = field }) {
	return ({ input, output }, next) => {
		const { [field]: value } = input;
		const { errors } = output;

		if (field in errors) return next();

		if (!containsSpecialCharacters(String(value))) {
			errors[field] = `The ${label} must have special characters.`;
		}

		return next();
	};
}

module.exports = mustHaveSpecialCharacters;
