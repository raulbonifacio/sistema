const { Router } = require("express");

const dashboardController = require("./dashboard-controller");
const fixedCostsController = require("./fixed-costs-controller");

const router = Router();

router.get("/dashboard", dashboardController.index);

router.get("/fixed-costs", fixedCostsController.index);
router.get("/fixed-costs/create", fixedCostsController.create);
router.post("/fixed-costs", fixedCostsController.store);

module.exports = router;
