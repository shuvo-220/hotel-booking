const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    user:{type:mongoose.Types.ObjectId, ref:"Users"},
    title:String,
    address:String,
    photos:[String],
    description:String,
    extraInfo:String,
    checkIn:Number,
    checkOut:Number,
    maxGuest:Number,
});

module.exports = mongoose.model('Place', placeSchema);