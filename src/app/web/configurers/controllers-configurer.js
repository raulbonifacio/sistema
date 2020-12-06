const controllers = require("../controllers");

/**
 * This function adds the controllers router to the application.
 */
async function controllersConfigurer(app) {
	app.use(controllers);
}

module.exports = controllersConfigurer;
