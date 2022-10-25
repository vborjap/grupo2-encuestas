import { Router} from "express";
const router = Router();

/* router.get("/", (req, res) => {
	res.send("Estas en secciones")
}); */

//ruta de vista listar
router.get("/", (req, res) => {
	res.render('listarSecciones', {
		layout: "dashboard"
	});
});

export default router;