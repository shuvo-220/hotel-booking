const express = require('express');
const { 
    register, 
    login,
    profile
} = require('../controllers/userControllers');
const { auth } = require('../auth');
const router = express.Router();

router.post('/register', register)
router.post('/login', login);
router.get('/profile', auth, profile);

module.exports = router;