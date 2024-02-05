import express from "express";
import multer from "multer";

import {AddProduct, GetProduct, UpdateProduct, DeleteProduct} from "../Controller/product.controller.js";
const router = express.Router();

const upload = multer({dest: "Public/images/"});

router.post("/add",upload.single("ImageUrl"), AddProduct);
router.get("/get", GetProduct);
router.post("/update",upload.single("ImageUrl"), UpdateProduct);
router.delete("/delete", DeleteProduct);

export default router;