import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";

import __dirname from "./utils.js"; 
import cartsRouter from "./dao/routes/carts.router.js";
import productsRouter from "./dao/routes/products.router.js";
import viewRouter from "./dao/routes/views.router.js"

const PORT = 8080;
const MONGO = "mongodb+srv://dcanullo1980:exSwgoqTOkTEcPzD@danicanu80.cj56lz6.mongodb.net/ecommerce"
mongoose.connect(MONGO);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname + "/public"));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine" , "handlebars");

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})

app.use('/chat', viewRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/products', productsRouter);