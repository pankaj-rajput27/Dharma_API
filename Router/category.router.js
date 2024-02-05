import  express  from "express";

import{AddCategory, DeleteCategory, GetCategory, UpdateCategory} from "../Controller/category.router.js";

const router = express.Router();

router.post("/add",    AddCategory);
router.get("/get",     GetCategory);
router.post("/update", UpdateCategory);
router.delete("/delete", DeleteCategory);

export default router;