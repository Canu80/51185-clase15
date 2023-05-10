import mongoose from "mongoose";

const cartsCollection = "carts";
const schema = new mongoose.Schema({
    id:{
        type: String,
        require: true
    },
    quantity:{
        type: Number,
        require: true
    }
})

const cartsModel = mongoose.model(cartsCollection, schema);

export default cartsModel;