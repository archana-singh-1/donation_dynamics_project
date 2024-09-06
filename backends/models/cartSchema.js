import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
    imgSrc: String,
    name: String,
    email: String,
    amount: Number,
    description: String,
    paymentFrequency: String
});

export const CartItemModel = mongoose.model("CartItem", CartItemSchema);
