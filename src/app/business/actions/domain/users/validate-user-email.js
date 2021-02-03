const innerPipeline = require("../../control/inner-pipeline");
const mustBeAnEmail = require("../../validation/must-be-an-email");
const mustBeBetweenLength = require("../../validation/must-be-between-length");
const mustBeFilled = require("../../validation/must-be-filled");

function validateUserEmail() {

	const options = { field: "email", minLength: 5, maxLength: 255 };

	return innerPipeline(
		mustBeFilled(options),
		mustBeBetweenLength(options),
		mustBeAnEmail(options),
	);
}

module.exports = validateUserEmail;
