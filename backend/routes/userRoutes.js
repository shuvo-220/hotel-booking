const express = require('express');
const { 
    register, 
    login,
    profile,
    uploadByLinks,
    places,
    getPlaces
} = require('../controllers/userControllers');
const { auth } = require('../auth');

const router = express.Router();

router.post('/register', register)
router.post('/login', login);
router.get('/profile', auth, profile);
router.post('/upload', uploadByLinks);
router.post('/places',  places);
router.get('/getPlace', getPlaces);

module.exports = router;