const { Router } = require("express");

const csrfTokenMiddleware = require("./csrf-token-middleware");
const flashedDataMiddleware = require("./flashed-data-middleware");

const router = Router();

router.use(csrfTokenMiddleware);
router.use(flashedDataMiddleware);

module.exports = router;
