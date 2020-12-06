const path = require("path");

const express = require("express");

const { PORT, CONFIGURERS_PATH } = process.env;

const configurers = [
	require(path.resolve(CONFIGURERS_PATH, "session-configurer")),
	require(path.resolve(CONFIGURERS_PATH, "csrf-configurer")),
	require(path.resolve(CONFIGURERS_PATH, "body-parser-configurer")),
	require(path.resolve(CONFIGURERS_PATH, "middlewares-configurer")),
	require(path.resolve(CONFIGURERS_PATH, "controllers-configurer")),
	require(path.resolve(CONFIGURERS_PATH, "pug-configurer")),
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
