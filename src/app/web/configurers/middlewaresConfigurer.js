const middlewares = require("../middlewares");

/**
 * This function adds the middlewares router to the application.
 */
async function middlewaresConfigurer(app) {
	app.use(middlewares);
}

module.exports = middlewaresConfigurer;
