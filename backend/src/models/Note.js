import mongoose from "mongoose";
// import user  from '../models/User'

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content:{
        type:String,
        required:true
    }
},{timestamps:true})

const Note = mongoose.model("note",noteSchema)

export default Note