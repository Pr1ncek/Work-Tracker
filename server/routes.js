const express = require('express');
const router = express.Router();
const Authentication = require('./controllers/auth');

router.post('/signup', Authentication.signup);

module.exports = router;
