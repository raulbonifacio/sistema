const { Router } = require("express");

const csrfTokenMiddleware = require("./csrf-token-middleware");
const flashedDataMiddleware = require("./flashed-data-middleware");
const monthsProviderMiddleware = require("./months-provider-middleware");

const router = Router();

router.use(csrfTokenMiddleware);
router.use(flashedDataMiddleware);
router.use(monthsProviderMiddleware);

module.exports = router;
