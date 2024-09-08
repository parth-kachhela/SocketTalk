import { Router } from "express";
import { signup } from "../controller/AuthControllers.js";

const authRouter = Router();

authRouter.post("/signup", signup);

export default authRouter;
