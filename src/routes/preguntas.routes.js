import { Router} from "express";
const router = Router();

// Llamamos ruta de preguntas
router.get("/", (req, res) => {
	res.render('preguntasView', {
		layout: "dashboard"
	});
});

router.get("/:id", (req, res) => {
	const {id} = req.params;
	res.send("dato: " + id);
});

export default router;