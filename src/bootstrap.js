const path = require("path");

const dotenv = require("dotenv");
const express = require("express");
const session = require("express-session");
const csurf = require("csurf");

dotenv.config();

const { PORT, SECRET } = process.env;

const { sequelize } = require("./app/domain/models");
const controllers = require("./app/web/controllers");
const middlewares = require("./app/web/controllers");

/**
 * This function adds a bodyparser to the application.
 */
async function bodyParserConfigurer(app) {
	app.use(express.urlencoded({ extended: true }));
}

/**
 * This function configures a csrf protection middleware
 * in the application.
 */
async function csrfConfigurer(app) {
	app.use(csurf({ cookie: false, httpOnly: true }));

	// error handler
	app.use(function (err, _, res, next) {
		if (err.code !== "EBADCSRFTOKEN") return next(err);

		// handle CSRF token errors here
		res.status(403);
		res.send("You piece of shit.");
	});
}

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
			resave: false,
			secret: SECRET,
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
const configurers = [
	sessionConfigurer,
	csrfConfigurer,
	bodyParserConfigurer,
	middlewaresConfigurer,
	controllersConfigurer,
	pugConfigurer,
];

/**
 * This function calls the configurers and starts the application.
 */
module.exports = async () => {
	try {
		const app = express();

		const port = PORT || 8080;

		for (configurer of configurers) {
			await configurer(app);
		}

		app.listen(port, () => console.log(`Listening to localhost:${port}`));
	} catch (error) {
		console.error(error);
	}
};
