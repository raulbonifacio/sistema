const path = require("path");

const express = require("express");

/**
 * This function configures the Pug templating engine in
 * the application.
 */
async function pugConfigurer(app) {
	app.set("views", "src/assets/views");
	app.set("view engine", "pug");
	app.use(express.static("src/public"));
	app.locals.basedir =  "src/assets/views";
}

module.exports = pugConfigurer;
