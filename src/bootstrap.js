const path = require("path");

const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const { PORT, CONFIGURERS_PATH } = process.env;

const configurers = [
	require(path.resolve(CONFIGURERS_PATH, "sessionConfigurer")),
	require(path.resolve(CONFIGURERS_PATH, "csrfConfigurer")),
	require(path.resolve(CONFIGURERS_PATH, "bodyParserConfigurer")),
	require(path.resolve(CONFIGURERS_PATH, "middlewaresConfigurer")),
	require(path.resolve(CONFIGURERS_PATH, "controllersConfigurer")),
	require(path.resolve(CONFIGURERS_PATH, "pugConfigurer")),
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
