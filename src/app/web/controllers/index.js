const { Router } = require('express');

const dashboardController = require("./dashboardController");
const fixedCostsController = require("./fixedCostsController");

const router = Router();

router.get('/dashboard', dashboardController.index);

router.get('/fixed-costs', fixedCostsController.index);
router.get('/fixed-costs/create', fixedCostsController.create);

module.exports = router;

