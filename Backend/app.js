const express=require('express');
const mongoose=require('mongoose');
const router=require("./routes/book-routes");
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());
app.use("/books",router);

//Middlewares

mongoose.connect("mongodb+srv://admin:0muYEXFmJF3n6Mxu@cluster0.0z8frmr.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>console.log("Connected to database")).then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));



// 0muYEXFmJF3n6Mxu