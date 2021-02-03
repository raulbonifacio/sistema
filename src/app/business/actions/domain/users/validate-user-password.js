const innerPipeline = require("../../control/inner-pipeline");
const mustBeBetweenLength = require("../../validation/must-be-between-length");
const mustBeFilled = require("../../validation/must-be-filled");
const mustHaveDifferentCases = require("../../validation/must-have-different-cases");
const mustHaveSpecialCharacters = require("../../validation/must-have-special-characters");

function validateUserPassword() {
	const options = { field: "password", minLength: 6, maxLength: 255 };

	return innerPipeline(
		mustBeFilled(options),
		mustBeBetweenLength(options),
		mustHaveDifferentCases(options),
		mustHaveSpecialCharacters(options)
	);
}

module.exports = validateUserPassword;
