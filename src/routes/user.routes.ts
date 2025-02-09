import express from "express";
import UserController from "../controllers/user.controller";

const router = express.Router();

router.get("/", UserController.getUsers);

export default router;
