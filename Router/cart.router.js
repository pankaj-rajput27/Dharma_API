import express from "express";
import {AddCart, UpdateCart, GetCart, DeleteCart} from "../Controller/cart.controller.js";

const router = express.Router();

router.post("/add", AddCart);
router.post("/update", UpdateCart);
router.get("/get", GetCart);
router.delete("/delete", DeleteCart)


export default router;