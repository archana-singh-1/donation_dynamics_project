import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { UserSchemaModel } from "./models/userSchema.js";
import { CartItemModel } from "./models/cartSchema.js";


const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/signup", async (req, res) => {
    try {
        const user = await UserSchemaModel.create(req.body);
        res.json({ message: "Signup successful!", user });
    } catch (err) {
        console.error("Signup error:", err); 
        res.status(500).json({ message: "Error signing up", error: err.message });
    }
});;

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserSchemaModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        res.json({ message: "Login successful!", user });
    } catch (err) {
        res.status(500).json({ message: "Error logging in", error: err });
    }
});

app.post("/cart", async (req, res) => {
    try {
        const cartItem = new CartItemModel(req.body);
        await cartItem.save();
        res.status(201).json({ message: "Item added to cart", cartItem });
    } catch (err) {
        res.status(500).json({ message: "Error adding item to cart", error: err });
    }
});

app.get("/cart", async (req, res) => {
    try {
        const cartItems = await CartItemModel.find();
        res.status(200).json(cartItems);
    } catch (err) {
        res.status(500).json({ message: "Error fetching cart items", error: err });
    }
});

app.delete("/cart/:id", async (req, res) => {
    try {
        await CartItemModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Item removed from cart" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting cart item", error: err });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});