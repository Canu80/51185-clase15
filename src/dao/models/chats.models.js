import mongoose from "mongoose";

const chatCollection = "chat";
const chatSchema = new mongoose.Schema({
    user: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    } 
  },{ collection: "Messages" });

  const chatsModel = mongoose.model(chatCollection, chatSchema);

export default chatsModel;