import { Router} from "express";
import questions from "./../models/question.js"
const router = Router();

router.get("/", (req, res) => {
    res.render('index', {
        layout: "dashboard"
    });
});


export default router;