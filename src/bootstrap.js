const path = require("path");

const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const middlewaresConfigurer = require("./app/web/middlewares");
const controllersConfigurer = require("./app/web/controllers");

const configurers = [middlewaresConfigurer, controllersConfigurer];

module.exports = () => {

	const app = express();

	const port = process.env.PORT || 8080;

	app.set("views", path.resolve(__dirname, "assets/views"));
	app.set("view engine", "pug");
	app.use(express.static("src/public"));

	app.get("/test", function(req, res) {
		res.render("pages/index");
	});

	configurers.forEach(configurer => configurer(app));

	app.listen(port, () => console.log(`Listening to localhost:${port}`));
};
