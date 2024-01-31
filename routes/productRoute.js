import express from "express";
import { destroy, index, store, update, view } from "../controllers/productController.js";

const router = express.Router();

router.get("/", index);
router.post("/", store);
router.get("/:id", view);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router