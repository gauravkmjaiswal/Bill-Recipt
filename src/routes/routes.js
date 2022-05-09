const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/form');

// Create routes for auth here
router.get('/', AuthController.sayHello);
router.post('/download',AuthController.downloadPdf)
//create routes for register here
module.exports = router;