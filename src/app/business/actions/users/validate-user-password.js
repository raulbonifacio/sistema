const validateString = require("../validate-string");

function validateUserPassword() {

	return validateString({
		field: "password",
		mustHaveDifferentCases: true,
	});

}

module.exports = validateUserPassword;
