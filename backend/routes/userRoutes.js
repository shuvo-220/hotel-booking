const express = require('express');
const { 
    register, 
    login,
    profile,
    uploadByLinks,
    places
} = require('../controllers/userControllers');
const { auth } = require('../auth');

const router = express.Router();

router.post('/register', register)
router.post('/login', login);
router.get('/profile', auth, profile);
router.post('/upload', uploadByLinks);
router.post('/places', places);

module.exports = router;