import express from "express";
import { AddTemple, UpdateTemple, GetTemple, DeleteTemple } from "../Controller/temple.controller.js";

const router = express.Router();

router.post("/add", AddTemple);
router.post("/update", UpdateTemple);
router.get("/get", GetTemple);
router.delete("/delete", DeleteTemple)

export default router;