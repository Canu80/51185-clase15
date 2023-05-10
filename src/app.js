import express from "express";
import mongoose from "mongoose";

import __dirname from "./utils.js"; 
import cartsRouter from "./dao/routes/carts.router.js";
import productsRouter from "./dao/routes/products.router.js";

const PORT = 8080;
const MONGO = "mongodb+srv://dcanullo1980:exSwgoqTOkTEcPzD@danicanu80.cj56lz6.mongodb.net/ecommerce"
mongoose.connect(MONGO);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})

app.use('/api/carts', cartsRouter);
app.use('/api/products', productsRouter);