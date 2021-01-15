const { Router } = require("express");

const dashboardController = require("./dashboard-controller");

const router = Router();

router.get("/dashboard", dashboardController.index);

module.exports = router;
