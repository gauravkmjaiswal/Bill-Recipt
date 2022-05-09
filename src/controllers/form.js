//import user model here
const path = require("path");
const ejs= require("ejs")
var PDFDocument = require("pdfkit");
const Form = require("../models/registers");
require("../db/connection");

const sayHello = (req, res) => {
    res.render(path.join(__dirname, "../../templates/views", "index.ejs"))
};

const downloadPdf = async (req, res) => {
  try {
        console.log(req.body)
        const regisPerson= await new Form({
            name: req.body.name,
            email:req.body.email,
            mobile:req.body.number,
            date:req.body.date,
            items:req.body.item,
            amount:req.body.amount
        })

       
        try{
        const finalPeople= await regisPerson.save()
        }catch(e)
        {
            console.log(e)
        }

        const doc = new PDFDocument();
        doc.fontSize(26).text("Purchase Recipt", 210, 40);
        doc.fontSize(16).text("Full Name : "+req.body.name, 100, 100);
        doc.fontSize(16).text("Email : "+req.body.email, 100, 130);
        doc.fontSize(16).text("Purchase Date : "+req.body.date, 100, 160);
        doc.fontSize(16).text("Purchase Time : "+req.body.date, 320, 160);
        doc.fontSize(16).text("Mobile number : "+req.body.number, 100, 190);
        doc.fontSize(16).text("Items : "+req.body.item, 100, 220);
        doc.fontSize(16).text("Total Amount : "+req.body.amount+" Rs.", 100, 250);
        doc.fontSize(12).text("Signature..................................", 100, 500);
        // Finalize PDF file
        doc.pipe(res);
        doc.end();
    res.sendFile(path.join(__dirname, "../../public", "index.html"));
  
} catch (e) {
    res.status(400).send(e);
  }
};

const AuthController = {
  sayHello,
  downloadPdf,
};

module.exports = AuthController;
