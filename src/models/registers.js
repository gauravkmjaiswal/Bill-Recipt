const mongoose= require("mongoose")
const jwt= require("jsonwebtoken")
const FormSchema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    date:{
        type:Date,
        default:new Date()
    },
    items:{
        type:String
    },
    amount:{
        type:Number
    },
    mobile:{
        type:Number
    }
})



const Form=new mongoose.model("Form",FormSchema)
module.exports= Form;