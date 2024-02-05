import express from  "express";
import bodyParser from "body-parser";

import AdminRouter          from    "./Router/admin.router.js";
import UserRouter           from    "./Router/user.router.js";
import CategoryRouter       from    "./Router/category.router.js";
import ProductRouter        from    "./Router/product.router.js";
import OrderRouter          from    "./Router/order.router.js";
import OrderItemsRouter     from    "./Router/orderItems.router.js";
import CartRouter           from    "./Router/cart.router.js";
import CartitemsRouter      from    "./Router/cartitems.router.js";
import TempleRouter         from    "./Router/temple.router.js";
import BookingTempleRouter  from    "./Router/bookingTemple.router.js";
import AartiVideoRouter     from    "./Router/aartiVideo.router.js";
import PanditjiRouter       from    "./Router/panditiji.router.js";
import PoojaVidhiRouter     from    "./Router/poojavidhi.router.js";

import path from "path";
import { fileURLToPath } from "url";

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(dirname, "Public")));
app.use("/admin",         AdminRouter);
app.use("/User" ,         UserRouter);
app.use("/category",      CategoryRouter);
app.use("/product",       ProductRouter);
app.use("/order",         OrderRouter);
app.use("/orderItems",    OrderItemsRouter);
app.use("/cart",          CartRouter);
app.use("/cartitems",     CartitemsRouter);
app.use("/Temple",        TempleRouter);
app.use("/BookingTemple", BookingTempleRouter);
app.use("/AartiVideo",    AartiVideoRouter);
app.use("/Panditji",      PanditjiRouter);
app.use("/Poojavidhi",   PoojaVidhiRouter);

//app.use("/*", (req,res)=>{
//     res.status(404).json({message: "Page Is Not Found"})
//});

app.listen(5000, ()=>{
    console.log("Server Started...1");
});