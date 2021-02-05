const { Router } = require("express");

const csrfTokenMiddleware = require("./csrf-token-middleware");
const flashedDataMiddleware = require("./flashed-data-middleware");
const monthsMiddleware = require("./months-middleware");
const redirectBackMiddleware = require("./redirect-back-middleware");
const redirectWithErrorsMiddleware = require("./redirect-with-errors-middleware");
const errorDataMiddleware = require("./error-data-middleware");
const oldDataMiddleware = require("./old-data-middleware");

const router = Router();

router.use(csrfTokenMiddleware);
router.use(monthsMiddleware);
router.use(flashedDataMiddleware);
router.use(redirectBackMiddleware);
router.use(redirectWithErrorsMiddleware);
router.use(errorDataMiddleware);
router.use(oldDataMiddleware);

module.exports = router;
