import express from "express";
import {AddCartitems, UpdateCartitems, GetCartitems, DeleteCartitems } from "../Controller/Cartitems.controller.js";

const router = express.Router();

router.post("/add"      ,AddCartitems );
router.post("/update"   ,UpdateCartitems);
router.get("/get"       ,GetCartitems);
router.delete("/delete" ,DeleteCartitems);

export default router;