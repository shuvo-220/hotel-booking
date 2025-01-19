const express = require('express');
const { 
    register, 
    login,
    profile,
    uploadByLinks,
    places,
    getPlaces,
    singlePlace
} = require('../controllers/userControllers');
const { auth } = require('../auth');

const router = express.Router();

router.post('/register', register)
router.post('/login', login);
router.get('/profile', auth, profile);
router.post('/upload', uploadByLinks);
router.post('/places',  places);
router.get('/getPlace', getPlaces);
router.get('/place/:id', singlePlace)

module.exports = router;