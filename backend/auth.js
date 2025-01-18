const jwt = require('jsonwebtoken');
const User = require('./models/userModels');


exports.auth = async(req, res, next)=>{
    const {token} = req.cookies;
    if(!token){
        res.status(400).json('you are not authorized');
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decode._id);
        res.user = user;
        next();
        
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error.message)
    }
}