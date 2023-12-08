import { Request, Response } from "express";
import { userType } from "../Types/userTypes";
import User from "../models/User.model";


const getAllUsersController = async (req: Request, res: Response) => {
    try{
    const users = await User.find()
    res.status(201).json({Message:"Success",Data:users})
    }
    catch(err){
        res.status(400).json({Message:"Error",err})
    }
}

const addUserController = async (req: Request, res: Response) => {
    try {
        const user = req.body as userType;
        const newUser=await User.create(user)
        res.status(201).json({Message:"Success",Data:newUser})
    }catch(err){
        res.status(400).json({ Message:"Error", err});
    }
}

const getOneUserController = async (req: Request, res: Response) => {
    try{
    let myid: String = req.params.id
    let user = await User.findById(myid)
    res.status(400).json({Message:"Success",Data:user})
    }
    catch(err){
        res.status(201).json({Message:"failed",err})
    }
}

export { addUserController, getAllUsersController, getOneUserController }