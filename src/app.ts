import express from "express"
import usersRoutes from "./Routes/userRoutes"
import tasksRoutes from "./Routes/toDoRoutes"
import * as dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config({path:__dirname+"/../.env"})

const port=process.env.PORT

const url=process.env.Mongo_URL! 

mongoose.connect(url).then((value)=>{
    console.log("mongoDb server started")
}).catch((err)=>{
    console.log(err);
})


const app=express()
app.use(express.json())
app.use("/user",usersRoutes)
app.use("/tasks",tasksRoutes)



app.listen(port,function(){
    console.log(`listening on ${port}`);
})