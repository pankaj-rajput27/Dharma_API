import express from "express";

import {AddPoojaVidhi, UpdatePoojaVidhi, GetPoojaVidhi, DeletePoojaVidhi} from "../Controller/poojavidhi.controller.js";
const router = express.Router();

router.post("/add", AddPoojaVidhi);
router.post("/update",UpdatePoojaVidhi );
router.get("/get", GetPoojaVidhi);
router.delete("/delete", DeletePoojaVidhi);
export default router;