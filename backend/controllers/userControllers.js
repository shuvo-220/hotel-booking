const User = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Place = require('../models/placeSchema');
const imageDownloader = require('image-downloader')

exports.register = async(req, res)=>{
    const{name, email, password} = req.body;

    try {
        const user = await User.create({
            name, email, password
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.login = async(req, res)=>{
    const{email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user){
            res.status(400).json("user doesn't exist, please register first");
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            res.status(400).json('invalid password')
        }

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{
            expiresIn:'2d'
        })

        res.cookie('token', token, {
            httpOnly: true
        });

        res.status(200).json({user, token})

    } catch (error) {
        res.status(400).json(error.message);
    }
}


exports.profile = async(req, res)=>{
    const user = await User.find(req.user)
    if(!user){
        res.status(400).json('user not found');
    }
    res.status(200).json(user)
}

exports.uploadByLinks=async(req, res)=>{
    const{link} = req.body;
    const newName = 'photo'+Date.now()+'.jpg';
    await imageDownloader.image({
        url:link,
        dest:__dirname+'/upload/'+newName
    });
    res.json(newName);
}


exports.places = async(req, res)=>{
    const{title,address,addedPhotos,description,extraInfo,checkOut,checkIn,maxGuest} = req.body;
   try {
    const place = await Place.create({
        title,address,photos: addedPhotos,description,extraInfo,checkOut,checkIn,maxGuest
    })
    res.status(200).json(place);
   } catch (error) {
    res.status(500).json(error)
   }
}

exports.getPlaces=async(req, res)=>{
    const place = await Place.find()
    if(!place){
        res.status(500).json('No places found');
    }
    res.status(200).json(place);
}