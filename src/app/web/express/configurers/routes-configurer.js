const { Router, static } = require("express");

const controllers = require("../controllers");
const middlewares = require("../middlewares");

const APP_PREFIX = "/app";

/**
 * This function performs the route setup
 * for the application.
 */
async function routesConfigurer(app) {
	const router = new Router();
	
	router.use(middlewares);
	router.use(controllers);
	router.use("/assets", static("src/public"));

	app.use(router); 

	return app;
}

module.exports = routesConfigurer;
