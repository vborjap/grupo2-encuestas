import { Router} from "express";
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

export default router;