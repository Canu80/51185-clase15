import mongoose from "mongoose";

const cartsCollection = "carts";
const cartSchema = new mongoose.Schema({

    id: {
        type: String,
        unique: true,
    },
    products: {
        type: Array,
        default:[],
        required: true,
    }
    
},{ collection: "Carts" });

const cartsModel = mongoose.model(cartsCollection, cartSchema);

export default cartsModel;