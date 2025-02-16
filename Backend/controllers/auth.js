import User from '../models/user.js'
import bcryptjs from 'bcryptjs';
// import { errorHandler } from '../utils/error.js';

export const signup = async (req,res,next) => {
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedPassword});
    try{
        await newUser.save();
        res.status(201).json({message: "User Created Successfully"}); 
    }catch(error){
        // res.status(500).json(error.message);
        // next(errorHandler(300,"something went wrong"));
        next(error);
    }
}
