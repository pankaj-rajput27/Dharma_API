import express from "express";

import {AddPanditji, UpdatePanditji, GetPanditji,DeletePanditji} from "../Controller/panditji.controller.js";
const router = express.Router();

router.post("/add", AddPanditji);
router.post("/update", UpdatePanditji);
router.get ("/get", GetPanditji);
router.delete("/delete", DeletePanditji)

export default router;