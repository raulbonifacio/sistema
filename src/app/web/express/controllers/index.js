const { Router } = require("express");

const authenticationController = require("./authentication-controller");
const dashboardController = require("./dashboard-controller");

const router = Router();

router.get("/dashboard", dashboardController.index);

router.get("/login", authenticationController.login);
router.get("/register", authenticationController.register);

router.get("/fixed-expenses/new", (_, response) => { 

	response.render("pages/fixed-expenses/new/index.pug");
});

module.exports = router;
