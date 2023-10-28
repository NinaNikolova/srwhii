import { Router } from "express";
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import asynceHandler from 'express-async-handler';
import { UserModel } from "../models/user.model";
const router = Router();


router.post("/login", asynceHandler(
    async (req, res) => {
        // but express dont suport json by default and we need to anable it in server.ts -> app.use(express.json())
        // const body = req.body ->distructoring assignment
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email, password })
        if (user) {
            res.send(generateTokenResponse(user));
        } else {
            res.status(400).send("User name or password is not valid!");
        }
    }));

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        email: user.email,
    }, "SomeRandomText", {
        expiresIn: "30d"
    });
    user.token = token;
    return user;
}
export default router;
