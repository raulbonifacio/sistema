const pipeline = require("../../core/pipeline");

function innerPipeline(...actions) {
	return pipeline(...actions);
}

module.exports = innerPipeline;
