const { Router } = require("express");

const dashboardController = require("./dashboard-controller");
const fixedExpensesController = require("./fixed-expenses-controller");

const router = Router();

router.get("/dashboard", dashboardController.index);

router.get("/fixed-expenses", fixedExpensesController.index);
router.get("/fixed-expenses/create", fixedExpensesController.create);
router.get("/fixed-expenses/test", fixedExpensesController.test);

module.exports = router;
