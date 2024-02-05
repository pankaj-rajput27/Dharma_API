import express from "express";

import {AddOrderItems, GetOrderItems, UpdateOrderItems, DeleteOrderItems} from "../Controller/orderItems.controller.js";

const router = express.Router();

router.post("/add", AddOrderItems);
router.post("/update", UpdateOrderItems);
router.get("/get", GetOrderItems);
router.delete("/delete", DeleteOrderItems)

export default router;