import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect("mongodb+srv://jaikrishnagokul:AMbbaRnALuInsNe4@cluster0.40b06u8.mongodb.net/").then(()=>console.log("Db connected"))
}