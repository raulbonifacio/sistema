const { Router } = require("express");

const csrfTokenMiddleware = require("./csrf-token-middleware");
const flashedDataMiddleware = require("./flashed-data-middleware");
const monthsMiddleware = require("./months-middleware");
const redirectBackMiddleware = require("./redirect-back-middleware");

const router = Router();

router.use(csrfTokenMiddleware);
router.use(flashedDataMiddleware);
router.use(redirectBackMiddleware);
router.use(monthsMiddleware);

module.exports = router;
