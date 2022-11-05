import { Router} from "express";
import Secciones from "../models/secciones";
import Pregunta from "../models/Pregunta";

const router = Router();

//CONSULTAS Y RENDERIZADO DE VISTAS
//Ruta de vista Listar Secciones
router.get("/", async (req, res) => {
	const seccion = await Secciones.find().lean()
	res.render('secciones/listarSecciones' ,{
		layout: "dashboard",
		seccion: seccion
	})
});

//Ruta de vista Crear Seccion
router.get("/addSeccion", async (req, res) => {
	const pregunta = await Pregunta.find().lean()
	//const seccion = await Secciones.find({}).populate('preguntas').lean()
	//console.log(seccion)
	res.render('secciones/crearSeccion', {
		layout: "dashboard",
		preguntas: pregunta,
	});
});

//Ruta de vista Editar Seccion
//*********************POR FAVOR INGRESE AQUI EL METODO PARA RENDERIZAR LA VISTA DE EDICION DE SECCION**********************


//Ruta de vista Ver Seccion
router.get("/:id", async (req, res) => {
	const {id} = req.params
	const seccion = await Secciones.find({_id: id}).populate('preguntas').lean()
	//console.log(seccion)
	res.render('secciones/verSeccion' ,{
		layout: "dashboard",
		seccion: seccion
	})
});

//MÉTODOS AÑADIR, ELIMINAR Y GUARDAR EDICION
//Metodo para añadir una nueva seccion
router.post("/add", async (req, res) => {
	const seccion = Secciones(req.body);
	const seccionSave = await seccion.save()
	//console.log(seccionSave);
	res.redirect("/secciones")
});

//Método para eliminar una seccion
router.get("/delete/:id", async (req, res) => {
	const {id} = req.params
	await Secciones.findByIdAndDelete(id)
	res.redirect('/secciones')
});

//Método para guardar cambios en la edición de una seccion
//*********************POR FAVOR INGRESE AQUI EL METODO PARA GUARDAR LA EDICION DE SECCION**********************

export default router;
