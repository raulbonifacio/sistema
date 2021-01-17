const validateString = require("../validate-string");

function validateUserPassword(context) {
	return validateString.call(
		{
			field: "password",
			label: "user password",
			mustHaveDifferentCases: true,
		},
		context
	);
}

module.exports = validateUserPassword;
