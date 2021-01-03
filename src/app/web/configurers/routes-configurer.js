const { Router, static } = require("express");

const controllers = require("../controllers");
const middlewares = require("../middlewares");

async function routesConfigurer(app) {
	const router = new Router();
	
	router.use(middlewares);
	router.use(controllers);

	app.use(router); 

	app.use(static("src/public"));

	return app;
}

module.exports = routesConfigurer;
