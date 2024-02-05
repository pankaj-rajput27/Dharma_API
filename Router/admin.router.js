import express from "express";

import {SignUp, SignIn, Update, Delete} from "../Controller/admin.controller.js";
import { verifyToken } from "../middleware/autheticationUser.js";


const router = express.Router();

router.post("/signup", SignUp);
router.get("/signin", SignIn);
router.post("/update", verifyToken, Update);
router.delete("/delete", Delete);

export default router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoibXJwYW5rYWpyYWpwdXQyN0BnbWFpbC5jb20iLCJpYXQiOjE3MDY5NjEyNzN9.in7S7BC-lJj6iqNtAWPtqwCBJeN2N1vWhyALOczYOE0

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoibG9rZW5kcmFAZ21haWwuY29tIiwiaWF0IjoxNzA2OTYxNjEyfQ.tVekujy6mx9uORPENShd6punFP2o2rGbopWnAwL3pRQ