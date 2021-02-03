const innerPipeline = require("../../control/inner-pipeline");
const mustBeBetweenLength = require("../../validation/must-be-between-length");
const mustBeFilled = require("../../validation/must-be-filled");

function validateUserFirstName() {
	const options = {
		field: "firstName",
		label: "first name",
		minLength: 1,
		maxLength: 255,
	};

	return innerPipeline(mustBeFilled(options), mustBeBetweenLength(options));
}

module.exports = validateUserFirstName;
