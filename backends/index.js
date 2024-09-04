import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { UserSchemaModel } from "./models/userSchema.js";

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
        res.status(500).json({ message: "Error signing up", error: err });
    }
});

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


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
