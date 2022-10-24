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

router.post('/add', (req, res)=>{
	let nombre=req.body.inputNombreSeccion;

	let prn1 = req.body.idPrn;

	nombre=nombre
	
	//let nombre = crearSeccion.getElementById("inputNombreSeccion").value;
	console.log(nombre);
	console.log(prn1);
	res.send('Recibido')
	console.log("recibido")
})

export default router;