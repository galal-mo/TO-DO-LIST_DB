import { addTaskController, getAllTasksController, userTasksController } from "../Controllers/toDoController";
import { getAllUsersController } from "../Controllers/userController";



const Router = require('express').Router;
const tasksRoutes = Router(); 

tasksRoutes.get('/',getAllTasksController);
tasksRoutes.post('/',addTaskController);
tasksRoutes.get('/:id',userTasksController);

export default tasksRoutes;