const { Router } = require("express");

const logoutController = require("./logout-controller");
const loginController = require("./login-controller");

const router = Router();

router.get("/login", loginController.showLoginForm);
router.post("/login", loginController.login);
router.post("/logout", logoutController.logout);

module.exports = router;
