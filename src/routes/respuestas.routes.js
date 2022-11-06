import { Router} from "express";
const router = Router();
import registroEncuesta from "../models/encuesta";

// Rutas Modulo 5
router.get("/", (req, res) => {
	let encuestas = registroEncuesta.find().select("_id").select("nomEncuesta").lean();

	res.render('respuestas/index', {
		layout: "dashboard",
		datos: encuestas
	});
});

router.get("/:id", (req, res) => {
	const {id} = req.params;
	
	let encuesta = registroEncuesta.findById({_id: id}).populate({
		path: "secciones",
		populate: {
			path: "preguntas"
		}
	}).lean();

	res.render("respuestas/show", {
		layout:"Dashboard",
		datos: encuesta
	});
});

export default router;