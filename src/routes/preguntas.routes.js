import { Router} from "express";
const router = Router();

//Cambio hecho por: Rebeca Barrientos
router.get("/add", (req, res) => {
	res.render('preguntas/nuevaPregunta', {
		layout: "dashboard"
	});
});

//Ruta para recibir datos
router.post("/nuevaPregunta", (req, res) => {
console.log(req.body);
//const { title, description}=req.body;
	console.log(req.body);
	res.send('ok');
});


//Fin de cambio hecho por: Rebeca Barrientos

// Llamamos ruta de preguntas
router.get("/", (req, res) => {
	res.render('preguntasView', {
		layout: "dashboard"
	});
});

// router.get("/", (req, res) => {
// 	res.send("Estas en preguntas")
// });

export default router;