
const express = require("express");

/**
 * This function configures the Pug templating engine in
 * the application.
 */
async function pugConfigurer(app) {
	app.use(express.static("src/public"));
}

module.exports = pugConfigurer;
