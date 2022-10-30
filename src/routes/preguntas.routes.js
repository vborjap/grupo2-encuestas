import { Router} from "express";
const router = Router();

//Cambio hecho por: Rebeca Barrientos
const Pregunta = require('../models/Pregunta');

//ruta de boton vista de agregar pregunta
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

//Ruta para recibir datos crear pregunta
/*router.post("/nuevaPregunta", async(req, res) => {
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
	
		//Almacenando en la base de datos
		const newPregunta = new Pregunta({title, tipoR});
		await newPregunta.save();
		res.redirect('/preguntas');

		//Mostrando mensaje
		//console.log(newPregunta);
		//res.send('ok');
	//}
});*/

//ruta a la que se redirecciona
router.get('/', async (req, res) => {
	//res.send('Preguntas desde la base de datos');
	const pregunta = await Pregunta.find().lean();
	res.render('preguntas/preguntasView', {pregunta, layout: "dashboard"});
	
});

//Fin de cambio hecho por: Rebeca Barrientos



//para poder ver registros de base de datos según id
router.get("/:id", async (req, res) => {

	const {id} = req.params;

	var pregunta = await Pregunta.find({_id: id}).lean();

    console.log(pregunta);
	res.render('preguntas/verPregunta', {
		id,
		pregunta,
		layout: "dashboard"
	});
});

//Ira vista de editar por metodo GET 
router.get('/editar/:id', async (req, res) =>{
	const pregunta = await Pregunta.findById(req.params.id).lean();
	res.render('preguntas/editarPregunta', {pregunta, layout: "dashboard"});
});

//para editar vista por metodo PUT
router.put('/editarPreguntas/:id', async (req, res) => {
	const {title, tipoR} = req.body;
	let respuesta = req.body.respuesta;

	if(tipoR == "opcion-unica" || tipoR == "opcion-multiple") {
        respuesta = req.body.respuestaText;
    }
    if(respuesta == undefined) {
        return res.end("Invalid request");
    }
	
	await Pregunta.findByIdAndUpdate(req.params.id, { title: title, tipoR: tipoR, respuestas: respuesta }).lean();
	res.redirect('/preguntas')
});



//para elimanar registros de db
router.post("/delete/:id", async (req, res) => {
	console.log(req.params.id);
	const {id} = req.params;
	//await Pregunta.findByIdAndDelete({_id: id});
	await Pregunta.findByIdAndDelete(req.params.id);
	res.redirect('/preguntas');
});



export default router;




//nuevos cambiossssssssssssssssssssssssssssssssssssssssssssssssss
router.post("/", (req, res) => {
    const {title, tipoR} = req.body;
    let respuesta = req.body.respuesta;

    // Si el tipoR es de opcion unica/multiple se asigna los valores de los input[type="text"]
    if(tipoR == "opcion-unica" || tipoR == "opcion-multiple") {
        respuesta = req.body.respuestaText;
    }
    if(respuesta == undefined) {
        return res.end("Invalid request");
    }
    const nuevaPregunta = new Pregunta({
        title: title,
        tipoR: tipoR,
        respuestas: respuesta
    });
    nuevaPregunta.save();
    //res.json(nuevaPregunta);
	return res.redirect("/preguntas");
});

//------------------------------------------------------------------


