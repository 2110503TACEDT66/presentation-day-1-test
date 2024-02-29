const User = require('../models/User');

exports.register=(req,res,next)=>{
    try{
        res.status(200).json({success:true});
    }
    catch(err){
        console.log(err);
        res.status(400).json({success:false});
    }
}