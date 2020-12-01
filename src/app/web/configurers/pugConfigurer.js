const path = require("path");

const express = require("express");

const { ASSETS_PATH } = process.env;

/**
 * This function configures the Pug templating engine in
 * the application.
 */
async function pugConfigurer(app) {
	app.set("views", path.resolve(ASSETS_PATH, "views"));
	app.set("view engine", "pug");
	app.use(express.static("src/public"));
	app.locals.basedir = path.resolve(ASSETS_PATH, "views");
}

module.exports = pugConfigurer;
