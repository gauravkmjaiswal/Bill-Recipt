require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ejs= require("ejs")
const app = express();
const path=require("path")
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}))
const template_path = path.join(__dirname,"../templates/views")
const static_path = path.join(__dirname,"../public")

app.set("view engine", "ejs");
app.set("views",template_path);



// sample for express server
// app.use("/", (req, res, next) => {
//   res.status(200).json({ success: true, data: "Welcome to express server" });
// });

const PORT = process.env.PORT || 8000; // port at which server listening

// import routes
let authRouter = require('./routes/routes');

// import other routes BookMark Category News

// define root routes.
app.use('/', authRouter);
app.use(express.static(static_path));
// define other routes BookMark Category News

app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`)
);
