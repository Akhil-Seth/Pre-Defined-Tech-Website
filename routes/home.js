const control = require('../controllers/NavBar');
const express = require('express');
const path = require('path');




const router = express.Router();

// / => GET
router.get('/', control.getHomePage);

module.exports = router;