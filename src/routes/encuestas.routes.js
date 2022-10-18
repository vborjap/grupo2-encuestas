import { Router} from "express";
const router = Router();

router.get("/", (req, res) => {
	res.send("Estas en encuestas")
});

export default router;