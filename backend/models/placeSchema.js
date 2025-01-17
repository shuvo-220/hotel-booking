const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    title:String,
    address:String,
    photos:[String],
    description:String,
    extraInfo:String,
    checkIn:Number,
    checkOut:Number,
    maxGuest:Number,
    owner:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
});

module.exports = mongoose.model('Place', placeSchema);