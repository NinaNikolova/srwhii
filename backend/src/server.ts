import dotenv from 'dotenv';
dotenv.config();
//access with process.env.
import express from "express";
import cors from "cors";
import organizationRouter from './router/organization.router';
import userRouter from './router/user.router';
import { dbConnect } from './configs/database.config';
dbConnect();

const app = express();
//frontend - localhost:4200
//backend - localhost:5000
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.use("/api/organizations", organizationRouter);
app.use("/api/users/", userRouter);



const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port)
})