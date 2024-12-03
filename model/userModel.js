//for schemas
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        requird : true
    },
    email:{
        type: String,
        requird : true
    },
    address:{
        type: String,
        requird : true
    }
})
export default mongoose.model("users",userSchema)