import express from "express";
import { insertRegister, loadRegister } from "../controllers/userController.js";


const router = express();
router.use(express.json());
router.use(express.urlencoded({extended:true}))

router.set('view engine', 'ejs');
router.set('views', './views/users');


router.get("/register", loadRegister);
router.post("/register", insertRegister);

export default router;
