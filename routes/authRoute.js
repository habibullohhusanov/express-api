import express from "express";
import { login, logout, register, user } from "../controllers/authController.js";

const router = express.Router();

router.post("/user", user);
router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);

export default router