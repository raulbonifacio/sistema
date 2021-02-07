const { isADate } = require("../../validators/string");

function mustBeADate({ field, label = field }) {
	return ({ input, output }, next) => {
		const { [field]: value } = input;
		const { errors } = output;

		if (field in errors) return next();

		if (!isADate(String(value))) {
			errors[field] = `The ${label} must be a valid date.`;
		}

		return next();
	};
}

module.exports = mustBeADate;
