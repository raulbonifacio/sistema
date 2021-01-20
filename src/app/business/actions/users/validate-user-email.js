const validateString = require("../validate-string");

function validateUserEmail() {
	return validateString( { 
		field: "email",
		mustBeAnEmail: true,
	});
}

module.exports = validateUserEmail;
