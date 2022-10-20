import { Router} from "express";
const router = Router();

// Rutas Modulo 5
router.get("/", (req, res) => {
<<<<<<< HEAD
	
	// Todo el proceso de obtener los datos en la DB

	res.render("listarRespuestas", {
		layout: "Dashboard"
	});
});

// Rutas Modulo 5
router.get("/", (req, res) => {
=======
	res.render('listarRespuestas', {
		layout: "dashboard"
	});
});

router.get("/:id", (req, res) => {
>>>>>>> d00dadafbbb22e9c42d37a81794e201612bbc82b
	const {id} = req.params;

	res.render("verRespuestas", {
		layout:"Dashboard"
	});
});

export default router;