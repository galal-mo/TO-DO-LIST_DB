import { addUserController, getAllUsersController, getOneUserController } from "../Controllers/userController";


const Router = require('express').Router;
const usersRoutes = Router(); 

usersRoutes.get('/',getAllUsersController);
usersRoutes.post('/',addUserController);
usersRoutes.get('/:id',getOneUserController);

export default usersRoutes;