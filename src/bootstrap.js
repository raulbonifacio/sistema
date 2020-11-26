const path = require("path");

const dotenv = require("dotenv");
const express = require("express");
const session = require("express-session");
const Sequelize = require("sequelize");

//IMPORTANT: This method call makes the
dotenv.config();

const controllers = require("./app/web/controllers");
const middlewares = require("./app/web/controllers");

/**
 * This function configures the Pug templating engine in
 * the application.
 */
function pugConfigurer(app) {
	app.set("views", path.resolve(__dirname, "assets/views"));
	app.set("view engine", "pug");
	app.use(express.static("src/public"));
	app.locals.basedir = path.resolve(__dirname, "assets/views");
}

/**
 * This function configures the session in the application.
 */
function sessionConfigurer(app) {
	//const SequelizeStore = require("connect-session-sequelize")(session.Store);

	//TODO:Replace fields with proper values;
	//const sequelize = new Sequelize("database", "username", "password", {
	//		dialect: "sqlite",
	//		storage: "./session.sqlite",
	//	});

	//	const store = new SequelizeStore({
	//		db: sequelize,
	//		checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
	//		expiration: 24 * 60 * 60 * 1000, // The maximum age (in milliseconds) of a valid session.
	//	});

	//TODO:Test this table sync if it doesn't work;
	//store.sync();

	app.use(
		session({
			//store,
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
function controllersConfigurer(app) {
	app.use(controllers);
}

/**
 * This function adds the middlewares router to the application.
 */
function middlewaresConfigurer(app) {
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
module.exports = () => {
	const app = express();

	const port = process.env.PORT || 8080;

	configurers.forEach(configurer => configurer(app));

	app.listen(port, () => console.log(`Listening to localhost:${port}`));
};
