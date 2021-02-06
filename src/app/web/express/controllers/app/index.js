const { Router } = require("express");

const dashboardController = require("./dashboard-controller");

const app = Router();

app.get("/dashboard", dashboardController.index);

module.exports = app;
