import { Router } from "express";
import registroEncuesta from "../models/encuesta.js"
import url from 'url';
import ncp from 'copy-paste';
import Secciones from "../models/secciones.js"
import Respuesta from "../models/respuesta.js"
import { ADDRGETNETWORKPARAMS } from "dns";

const router = Router();

//Función para obtener la URL completa
function fullURL(req, value) {
    if (value){
    return url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: `${req.originalUrl}/${value}`
    })
  } else {
    return url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: `${req.originalUrl}`
    })

  }
}

//Compartir encuesta 
function copyToClipboard(req) {
    let link = fullURL(req);

    console.log(link);
    ncp.copy(link, () => "Copiado al portapapeles");
}

router.get("/", async (req, res) => {

    const encuestas = await registroEncuesta.find({}).lean();
  

    res.render('verPlantillas', {
        layout: "dashboard",
        encuestas
    });
})

//Eliminar encuesta logicamente
router.post("/eliminar", async (req, res) => {
    let { identificador } = req.body;
    console.log(`URL: ${fullURL(req, identificador)}`);
    await registroEncuesta.updateOne({ _id: identificador }, { activa: false });
    res.redirect("/encuestas");
})

//Filtrar de encuestas
router.post("/", async (req, res) => {

    let {busqueda} = req.body;

    const encuestas = await registroEncuesta.find({nomEncuesta: busqueda}).lean();

    res.render('verPlantillas', {
        layout: "dashboard",
        encuestas
    });
})
 //contador 
 var Handlebars = require('handlebars');

 Handlebars.registerHelper("inc", function(value, options)
 {
     return parseInt(value) + 1;
 });

//Método que renderiza el formulario para crear encuesta --by Anderson Velásquez VJ21002
router.get("/crear", async (req, res) => {
    const registros = await registroEncuesta.find({}).lean();
    const secciones=await Secciones.find({}).lean();
    res.render('crearEncuesta', {
        layout: "dashboard",
        registros,
        secciones
    });
})

//Método para recibir y guardar en la base de datos --by Anderson Velásquez VJ21002
router.post("/crear", async (req, res) => {
    const { nomEncuesta, descripcion, secciones } = req.body;
    const nuevaEncuesta = new registroEncuesta({ nomEncuesta, descripcion, secciones })
    await nuevaEncuesta.save();
    res.redirect("/encuestas");
});

//Vista Editar --by Anderson Velásquez VJ21002
router.get("/editar/:id", async (req, res) => {
    //llenar tabla
    const registros = await registroEncuesta.find({}).populate('secciones').lean();
    //obtener registro a editar
    const editar = await registroEncuesta.findById(req.params.id).populate('secciones').lean();
    //Obtenemos las secciones
    const secciones=await Secciones.find({}).lean();
    res.render('editarEncuesta', {
        layout: "dashboard",
        registros,
        editar,
        secciones
    });
});
//Método para recibir y guardar en la base de datos --by Anderson Velásquez VJ21002
router.post("/editar/:id", async (req, res) => {
    const { nomEncuesta, descripcion, secciones } = req.body;
    await registroEncuesta.findByIdAndUpdate(req.params.id, { nomEncuesta, descripcion, secciones });
    res.redirect("/encuestas");
});

//metodo para ver plantilla verEncuesta -- Edward Mejia MA17078
router.post("/ver/:id", (req, res) => {
    let { identificador } = req.body;
    let link = copyToClipboard(req,identificador);
    console.log(link)
    res.redirect("/encuestas");
})

//metodo para mostrar vista de encuestas generada por usuario -- Edward Mejia MA17078
router.get("/ver/:id", async (req, res) => {
    const {id} = req.params;
    let encuesta = await registroEncuesta.findById({_id: id}).populate({
       path: "secciones",
       populate: {
        path: "preguntas"
       } 
    }).lean();
    console.log(encuesta);
    res.render("verEncuesta", {
        dato: encuesta
    });
});

router.post("/guardar", async  (req, res) => {
    let keys = Object.keys(req.body);
    let values = Object.values(req.body);
    let preguntas = [], encuesta;
    for(let i =0; i < keys.length; i++) {
        if(keys[i] == "encuesta") {
            encuesta = values[i];
        }
        if(keys[i].match(/respuesta*/)) {
            preguntas.push({
                idPregunta: keys[i].split("-")[1],
                respuestas: values[i]
            });
        }
    };
    let nuevaRespuesta = new Respuesta({
        idEncuesta: encuesta,
        preguntas: preguntas
    });
    await nuevaRespuesta.save();
    res.redirect("/encuestas");
});


export default router;
