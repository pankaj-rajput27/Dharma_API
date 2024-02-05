import express from "express";
import {AddOrder, UpdateOrder, GetOrder, DeleteOrder} from "../Controller/order.controller.js";

const router = express.Router();

router.post("/add", AddOrder);
router.post("/update", UpdateOrder);
router.get("/get", GetOrder);
router.delete("/delete", DeleteOrder);

export default router;