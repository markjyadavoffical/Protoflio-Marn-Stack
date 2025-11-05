import mongoose, { Schema }  from "mongoose";


const userSchema = new Schema({
   name:{
    type:String,
    require:true
   },
   email:{
    type:String,
    require:true
   },
  profile:{
    type:String,
  },
  password:{
    type:String,
    require:true
  },
})





 export const  User = mongoose.model("User", userSchema)