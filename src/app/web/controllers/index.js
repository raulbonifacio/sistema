const { Router } = require('express');

const dashboardController = require("./dashboardController");


const router = Router();


router.get('/dashboard', dashboardController.index);


module.exports = router;

