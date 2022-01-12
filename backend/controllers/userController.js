import asyncHandler from 'express-async-handler';
import User from './../models/userModel.js';

//@desc     Auth User & Get Token
//@route    POST /api/users/login
//@access   Public
export const authUser = asyncHandler(async (req,res)=>{
    const { email,password } = req.body
    const user=await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            isAdmin: user.isAdmin,
            token:null
        })
    }else{
        res.status(401)
        throw new Error('Invalid Email or Password.')
    }
})