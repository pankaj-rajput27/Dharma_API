import express from "express";
import {AddBookingTemple, UpdateBookingTemple,GetBookingTemple, DeleteBookingTemple} from "../Controller/bookingTemple.controller.js";

const router = express.Router();

router.post("/add",      AddBookingTemple);
router.post("/update",   UpdateBookingTemple);
router.get("/get",       GetBookingTemple)
router.delete("/delete", DeleteBookingTemple);

export default router;