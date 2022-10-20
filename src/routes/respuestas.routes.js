import { Router} from "express";
const router = Router();

// Rutas Modulo 5
router.get("/", (req, res) => {
	res.render('listarRespuestas', {
		layout: "dashboard"
	});
});

router.get("/:id", (req, res) => {
	const {id} = req.params;

	res.render("verRespuesta", {
		layout:"Dashboard",
		id
	});
});

export default router;