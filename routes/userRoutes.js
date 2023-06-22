import express from "express";
import { loadRegister } from "../controllers/userController.js";

const router = express();

router.set('view engine', 'ejs');
router.set('views', './views/users');

router.get("/register", loadRegister);

export default router;
