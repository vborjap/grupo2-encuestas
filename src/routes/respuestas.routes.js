import { Router} from "express";
const router = Router();
import registroEncuesta from "../models/encuesta";
import Respuesta from "../models/respuesta";

// Rutas Modulo 5
//Ruta de vista respuestas/index.hbs y buscar Encuestas 
router.get("/", async (req, res) => {
	let encuestas;

	if(req.query.buscar !== undefined && req.query.buscar != "") {
		let regex = new RegExp('^' + req.query.buscar , "i");
		encuestas = await registroEncuesta.find({nomEncuesta: regex}).select("_id").select("nomEncuesta").lean();
	}else {
		encuestas = await registroEncuesta.find().select("_id").select("nomEncuesta").lean();
	}

	res.render('respuestas/index', {
		layout: "dashboard",
		datos: encuestas
	});
});

router.get("/:id", async (req, res) => {
	const {id} = req.params;
	
	let encuesta = await registroEncuesta.findById({_id: id}).populate({
		path: "secciones",
		populate: {
			path: "preguntas"
		}
	}).lean();

	let respuestas = await Respuesta.find({idEncuesta: id}).populate({
		path: "idEncuesta"
	}).populate({path: "preguntas.idPregunta", select: ["_id", "tipoR"]}).lean();


	console.log(encuesta, respuestas);

	let respuestasProcesadas = respuestas.map(respuesta => {
		return respuesta.preguntas.map(pregunta => {
			if(pregunta.idPregunta != null) {
				return Object.fromEntries(new Map([
					[pregunta.idPregunta._id.toString(), pregunta.respuestas]
				]));
			}
		});
	}).reduce((pre, current, index) => {
		let valor, llave;
		for(let i = 0; i < current.length; i++) {
			if(current[i] != undefined) {
				valor = Object.values(current[i]);
				llave = Object.keys(current[i]);
				if(pre[llave] == undefined) {
					pre[llave] = valor;
				}else {
					pre[llave] = pre[llave].concat(valor);
				}
			}
			
		}
		return pre;
	}, {});
	let datos = {};
	let resVal, resKey;
	resVal = Object.values(respuestasProcesadas);
	resKey = Object.keys(respuestasProcesadas);
	for(let i = 0; i < resKey.length; i++) {
		datos[resKey[i]] = resVal[i].reduce((prev, c) => prev.concat(c));
	}
	console.log(datos);
	res.render("respuestas/show", {
		layout:"Dashboard",
		datos: encuesta,
		respu: datos,
		gretting: "hola"
	});
});

router.post("/delete/:id", async (req, res) => {
	const {id} = req.params;
	await Respuesta.find({idEncuesta: id}).then(async datos => {

		if(datos.length != 0) {
			for(let i= 0; i < datos.length; i++) {
				datos[i].delete();
			}
			req.flash("success", "Se eliminaron los resultados para la encuesta con id " + id);
			return res.redirect("/respuestas");
		}
		req.flash("info", "No existen respuestas para esta encuesta");
		res.redirect("/respuestas");
	}).catch(error => {
		console.log(error);
		req.flash("error", error.message);
		return res.redirect("/respuestas");
	})
	


});

export default router;

