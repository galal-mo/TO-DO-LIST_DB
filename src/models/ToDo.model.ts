import mongoose from "mongoose";




const toDOschema=new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        maxlength:50
    },
    description:{
        type: String,
        maxlength:200,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
})


const ToDo=mongoose.model("todo",toDOschema)
export default ToDo