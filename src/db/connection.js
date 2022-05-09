const mongoose= require("mongoose")
mongoose.connect("mongodb+srv://gauravkmjaiswal:ByniU2euMIdPLLbW@cluster0.8ojmi.mongodb.net/Form?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    // useCreateIndex:true,
     useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful")
}).catch((e)=>{
    console.log("no connection"+e)
})