const { Router } = require('express');


const csrfTokenMiddleware = require('./csrf-token-middleware');

const router = Router();

router.use(csrfTokenMiddleware);

module.exports = router;

