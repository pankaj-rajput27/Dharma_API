import express from "express";

import { SignUp, SignIn, Update, Delete} from "../Controller/user.controller.js";
import { verifyToken } from "../middleware/autheticationUser.js";

const router = express.Router();

router.post("/signup" ,  SignUp);
router.get("/signin",    SignIn);
router.post("/update", verifyToken,  Update);
router.delete("/delete", Delete);

export default router;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoibXJwYW5rYWpSYWpwdXQyN0BnbWFpbC5jb20iLCJpYXQiOjE3MDY5NTgzNDN9.4WHFVixhXVPzNL2-ysfT8aSByUWKZ0Vb7T4_jX7dCnw