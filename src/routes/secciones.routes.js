import { Router} from "express";
import Secciones from "../models/Secciones";

const router = Router();



/* router.get("/", (req, res) => {
	res.send("Estas en secciones")
}); */

//ruta de vista listar secciones
router.get("/", (req, res) => {
	res.render('secciones/listarSecciones', {
		layout: "dashboard"
	});
});

//ruta de vista crear seccion
router.get("/addSeccion", (req, res) => {
	res.render('secciones/crearSeccion', {
		layout: "dashboard"
	});
});

router.post("/add", async (req, res) => {

	const seccion = Secciones(req.body);
	
	const seccionSave = await seccion.save()

	console.log(seccionSave);
	
	
	res.send("Guardado");
})

export default router;