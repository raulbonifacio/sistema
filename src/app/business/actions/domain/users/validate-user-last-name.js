const innerPipeline = require("../../control/inner-pipeline");
const mustBeBetweenLength = require("../../validation/must-be-between-length");
const mustBeFilled = require("../../validation/must-be-filled");

function validateUserLastName() {
	const options = {
		field: "lastName",
		label: "last name",
		minLength: 1,
		maxLength: 255,
	};

	return innerPipeline(mustBeFilled(options), mustBeBetweenLength(options));
}

module.exports = validateUserLastName;
