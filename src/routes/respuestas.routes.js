import { Router} from "express";
const router = Router();

router.get("/", (req, res) => {
	res.send("Estas en respuestas")
});

export default router;