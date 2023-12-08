import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "userName is required"],
    },
    Email:{
        type: String,
        required: [true, "Email is required"],
        validate:[validator.isEmail, "Email must be valid"]
    },
    phoneNO: {
        type: String,
        required: [true, "phoneNO is required"],
        maxlength:14,
    },
})



const User = mongoose.model("user", userSchema)

export default User;

