import { Router} from "express";
import Secciones from "../models/Secciones";
import Pregunta from "../models/Pregunta";

const router = Router();

/* router.get("/", (req, res) => {
	res.send("Estas en secciones")
}); */

//ruta de vista listar secciones
router.get("/", async (req, res) => {

	const seccion = await Secciones.find().lean()

	res.render('secciones/listarSecciones' ,{
		layout: "dashboard",
		seccion: seccion
	})
	
});

//ruta de vista crear seccion
router.get("/addSeccion", async (req, res) => {
	const pregunta = await Pregunta.find().lean()
	//const seccion = await Secciones.find({}).populate('preguntas').lean()
	//console.log(seccion)
	res.render('secciones/crearSeccion', {
		layout: "dashboard",
		preguntas: pregunta,
		//secciones: seccion
	});
});


router.post("/add", async (req, res) => {

	const seccion = Secciones(req.body);
	
	const seccionSave = await seccion.save()

	console.log(seccionSave);
	
	
	res.redirect("/secciones")
})

export default router;