import { Router} from "express";
const router = Router();

//Cambio hecho por: Rebeca Barrientos
const Pregunta = require('../models/Pregunta');


router.get("/add", (req, res) => {
	res.render('preguntas/nuevaPregunta', {
		layout: "dashboard"
	});
});
router.get("/ver", (req, res) => {
	res.render('preguntas/verPregunta', {
		layout: "dashboard"
	});
});

//Ruta para recibir datos
router.post("/nuevaPregunta", async(req, res) => {
	const { title, tipoR}=req.body;

	/*const errors = [];
	//Arreglar la validacion
	if(!title){
		errors.push({text: 'Please write a title'});
	}
	if (errors.lenght > 0){
		res.render('/preguntas/nuevaPregunta', {
			errors,
			title,
			description
		}); 
	} else{
	*/	
		//Almacenando en la base de datos
		const newPregunta = new Pregunta({title, tipoR});
		await newPregunta.save();
		res.redirect('/preguntas');

		//Mostrando mensaje
		//console.log(newPregunta);
		//res.send('ok');
	//}
});

//ruta a la que se redirecciona
router.get('/', async (req, res) => {
	//res.send('Preguntas desde la base de datos');
	const pregunta = await Pregunta.find().lean();
	res.render('preguntas/preguntasView', {pregunta, layout: "dashboard"});
	
});

//Fin de cambio hecho por: Rebeca Barrientos



//para poder ver registros de base de datos pasando id
router.get("/:id", async (req, res) => {

	const {id} = req.params;
	// // res.send("dato: " + id);
	// const pr = Pregunta.find({'_id': ObjectId('63576c5e8ef98bade9aef2f4')});
	var pregunta = await Pregunta.find({_id: id}).lean();

	
    console.log(pregunta);
	res.render('preguntas/verPregunta', {
		id,
		pregunta,
		layout: "dashboard"
	});
});

//para poder ver registros de base de datos pasando id
router.get("editar/:id", async (req, res) => {

	const {id} = req.params;
	// // res.send("dato: " + id);
	// const pr = Pregunta.find({'_id': ObjectId('63576c5e8ef98bade9aef2f4')});
	var pregunta = await Pregunta.find({_id: id}).lean();

	
    console.log(pregunta);
	res.render('preguntas/editarPregunta', {
		id,
		pregunta,
		layout: "dashboard"
	});
});





export default router;