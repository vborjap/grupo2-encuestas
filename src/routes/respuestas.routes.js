import { Router} from "express";
const router = Router();

router.get("/", (req, res) => {
	
	// Todo el proceso de obtener los datos en la DB

	res.render("listarRespuestas", {
		layout: "Dashboard"
	});
});

// Rutas Modulo 5
router.get("/", (req, res) => {
	const {id} = req.params;

	res.render("verRespuestas", {
		layout:"Dashboard"
	});
});

export default router;