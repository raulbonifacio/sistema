const { Router } = require('express');


const csrfTokenMiddleware = require('./csrf-token-middleware');

const router = Router();

router.get('/*', csrfTokenMiddleware);

module.exports = router;

