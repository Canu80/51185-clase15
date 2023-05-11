import mongoose from "mongoose";

const chatCollection = "chat";
const chatSchema = new mongoose.Schema({
    id: {
      type: Number,
      unique: true,
    },
    usuario: {
      type: String,
      required: true,
    },
    mensaje: {
      type: String,
      required: true,
    } 
  },{ collection: "Chats" });

  const chatsModel = mongoose.model(chatCollection, chatSchema);

export default chatsModel;