const { Router } = require("express");

const dashboardController = require("./dashboard-controller");
const fixedExpensesController = require("./fixed-expenses-controller");

const router = Router();

router.get("/dashboard", dashboardController.index);

router.get("/fixed-expenses", fixedExpensesController.index);
router.get("/fixed-expenses/new", fixedExpensesController.new);
router.get("/fixed-expenses/test", fixedExpensesController.test);
router.post("/fixed-expenses", fixedExpensesController.store);

module.exports = router;
