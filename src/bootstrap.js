const path = require("path");

const dotenv = require("dotenv");
const express = require("express");
const session = require("express-session");

dotenv.config();

const { sequelize } = require("./app/domain/models");
const controllers = require("./app/web/controllers");
const middlewares = require("./app/web/controllers");

/**
 * This function configures the Pug templating engine in
 * the application.
 */
async function pugConfigurer(app) {
	app.set("views", path.resolve(__dirname, "assets/views"));
	app.set("view engine", "pug");
	app.use(express.static("src/public"));
	app.locals.basedir = path.resolve(__dirname, "assets/views");
}

/**
 * This function configures the session in the application.
 */
async function sessionConfigurer(app) {
	const SequelizeStore = require("connect-session-sequelize")(session.Store);

	const store = new SequelizeStore({
		db: sequelize,
		checkExpirationInterval: 5 * 60 * 1000,
		expiration: 60 * 60 * 1000,
	});

	await sequelize.authenticate();
	await store.sync();

	app.use(
		session({
			store,
			resave: false, // we support the touch method so per the express-session docs this should be set to false
			proxy: true, // if you do SSL outside of node.
			secret: "The Secret - Vengeance",
			saveUninitialized: false,
		})
	);
}

/**
 * This function adds the controllers router to the application.
 */
async function controllersConfigurer(app) {
	app.use(controllers);
}

/**
 * This function adds the middlewares router to the application.
 */
async function middlewaresConfigurer(app) {
	app.use(middlewares);
}

/**
 * This is a list of the configurers required by the application
 * to be bootstraped.
 */
const configurers = [pugConfigurer, sessionConfigurer, middlewaresConfigurer, controllersConfigurer];

/**
 * This function calls the configurers and starts the application.
 */
module.exports = async () => {

	try {
		const app = express();

		const port = process.env.PORT || 8080;

		for (configurer of configurers) {
			await configurer(app);
		}

		app.listen(port, () => console.log(`Listening to localhost:${port}`));
	} catch (error) {
		console.error(error);
	}
};
