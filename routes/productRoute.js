import express from "express";
import authMiddleware from "../middlware/auth.js";
import { destroy, index, store, update, view, search } from "../controllers/productController.js";

const router = express.Router();

router.get("/search", authMiddleware, search);
router.get("/", authMiddleware, index);
router.post("/", authMiddleware, store);
router.get("/:id", authMiddleware, view);
router.put("/:id", authMiddleware, update);
router.delete("/:id", authMiddleware, destroy);

export default router