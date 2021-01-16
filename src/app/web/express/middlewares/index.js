const { Router } = require("express");

const csrfTokenMiddleware = require("./csrf-token-middleware");
const flashedDataMiddleware = require("./flashed-data-middleware");
const monthsMiddleware = require("./months-middleware");
const redirectWithErrorsMiddleware = require("./redirect-with-errors-middleware");

const router = Router();

router.use(csrfTokenMiddleware);
router.use(flashedDataMiddleware);
router.use(redirectWithErrorsMiddleware);
router.use(monthsMiddleware);

module.exports = router;
