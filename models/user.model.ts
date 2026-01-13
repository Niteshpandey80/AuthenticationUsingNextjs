import mongoose from "mongoose";
interface Iuser{
    _id?:String ,
     name:String,
     image:String,
     email:String ,
     password:String,
     createdAt?:Date,
     updatedAt?:Date
}
const userSechma =new mongoose.Schema<Iuser>({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
image:{
    type:String
}
},{timestamps:true})

const User  = mongoose.models.User || mongoose.model("User" , userSechma);
export default User ; 
