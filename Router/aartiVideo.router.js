import express from "express";
import multer from "multer"
import {AddAartiVideo, UpdateAartiVideo, GetAartiVideo, DeleteAartiVideo} from "../Controller/aartiVideo.controller.js"
const router = express.Router();
const upload = multer({dest : "public/video"});

router.post("/add", upload.single("VideoURL"), AddAartiVideo );
router.post("/update", upload.single("VideoURL"), UpdateAartiVideo);
router.get("/get", GetAartiVideo);
router.delete("/delete",DeleteAartiVideo )

export default router;