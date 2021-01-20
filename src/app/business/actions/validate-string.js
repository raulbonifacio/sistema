const {
	isNotAString,
	isStringOutOfRange,
	isStringWithoutSpecialCharacters,
	isStringWithoutDifferentCases,
	isStringNotAnEmail,
	isStringWithoutNumbers,
} = require("../validators");

const defaultOptions = {
	label: "",
	min: 1,
	max: 255,
	mustBeInRange: true,
	mustHaveSpecialCharacters: false,
	mustHaveDifferentCases: false,
	mustBeAnEmail: false,
};

function validateString(customOptions) {

	return (context, next) => {

		if(!customOptions.field) throw "The string validation needs a field.";

		const options = { ...defaultOptions, ...customOptions };
		const { errors } = context.result;
		const { [options.field]: value } = context.input;

		const label = options.label || options.field;

		let error = "";

		if (isNotAString(value)) {
			error = `The ${label} is not a string.`;
		} else if ( options.mustBeInRange && isStringOutOfRange(value, options.min, options.max)) {
			error = `The ${label} must be between ${options.min} and ${options.max} charcters.`;
		} else if ( options.mustHaveSpecialCharacters && isStringWithoutSpecialCharacters(value)) {
			error = `The ${label} must include special characters`;
		} else if (options.mustHaveNumbers && isStringWithoutNumbers(value)) {
			error = `The ${label} must include numbers.`;
		} else if ( options.mustHaveDifferentCases && isStringWithoutDifferentCases(value)) {
			error = `The ${label} must have different cases.`;
		} else if (options.mustBeAnEmail && isStringNotAnEmail(value)) {
			error = `The ${label} must be an e-mail.`;
		}

		if (error) {
			errors[options.field] = error;
		}

		return next();
	};
}

module.exports = validateString;
