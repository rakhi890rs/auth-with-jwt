const express = require('express');
const userModel = require('../model/user.model');

const router = express.Router();

router.post('/register',async(req,res)=>{
    const {username,password} = req.body

    const isuser = await userModel.findOne({
        username
    })

    if(isuser){
        return res.status(409).json({
            message:"username already in use"
        })
    }

    const user= await userModel.create({username,password})
})


module.exports = router;