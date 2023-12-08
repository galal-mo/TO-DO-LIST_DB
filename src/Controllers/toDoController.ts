import { Request, Response } from "express";
import { taskType } from "../Types/taskTypes";
import User from "../models/User.model";
import ToDo from "../models/ToDo.model";


const getAllTasksController = async (req: Request, res: Response) => {
    try {
        const toDos = await ToDo.find()
        res.status(201).json({ Message: "Success", Data: toDos })
    }
    catch (err) {
        res.status(400).json({ Message: "Error", err })
    }
}
const userTasksController = async (req: Request, res: Response) => {
    try {
        let myid: String = req.params.id
        let user = await ToDo.find({createdBy:myid})
        res.status(400).json({ Message: "Success", Data: user })
    }
    catch (err) {
        res.status(201).json({ Message: "failed", err })
    }
}


const addTaskController = async (req: Request, res: Response) => {
    try {
        const task = req.body as taskType;
        const newtask=await ToDo.create(task)
        res.status(201).json({Message:"Success",Data:newtask})
    }catch(err){
        res.status(400).json({ Message:"Error", err});
    }
}

export { getAllTasksController, addTaskController, userTasksController }