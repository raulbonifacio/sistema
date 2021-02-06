const { Router } = require("express");

const app = require("./app");

const logoutController = require("./logout-controller");
const loginController = require("./login-controller");

const root = Router();

root.use("/app", app);

root.get("/login", loginController.showLoginForm);
root.post("/login", loginController.login);
root.post("/logout", logoutController.logout);

module.exports = root;
