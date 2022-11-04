import { Router } from "express";
import registroEncuesta from "../models/encuesta.js"
import url from 'url';
import ncp from 'copy-paste';
import Secciones from "../models/secciones.js"
import { ADDRGETNETWORKPARAMS } from "dns";

const router = Router();

//Función para obtener la URL completa
function fullURL(req, value) {
    return url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: `${req.originalUrl}/${value}`
    })
}

//Compartir encuesta 
function copyToClipboard(req, valor) {
    let link = fullURL(req, valor);

    console.log(link);
    ncp.copy(link, () => "Copiado al portapapeles");
}

router.get("/", async (req, res) => {

    const encuestas = await registroEncuesta.find({}).lean();
    console.log(encuestas);

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
//Método que renderiza el formulario para crear encuesta
router.get("/crear", async (req, res) => {
    const registros = await registroEncuesta.find({}).lean();
    const secciones=await Secciones.find({}).lean();
    //mostramos en consola los registros traidos de la BDD.
    console.log(registros);
    res.render('crearEncuesta', {
        layout: "dashboard",
        registros,
        secciones
    });
})

//Método para recibir y guardar en la base de datos
router.post("/crear", async (req, res) => {
    const { nomEncuesta, descripcion, secciones } = req.body;
    const nuevaEncuesta = new registroEncuesta({ nomEncuesta, descripcion, secciones })
    await nuevaEncuesta.save();
    res.redirect("/encuestas");
});

//Vista Editar
router.get("/editar/:id", async (req, res) => {
    //llenar tabla
    const registros = await registroEncuesta.find({}).populate('secciones').lean();
    //obtener registro a editar
    const editar = await registroEncuesta.findById(req.params.id).populate('secciones').lean();

   
    //Obtenemos las secciones
    const secciones=await Secciones.find({}).lean();
    //console.log(registros);
    res.render('editarEncuesta', {
        layout: "dashboard",
        registros,
        editar,
        secciones
    });
});

router.post("/editar/:id", async (req, res) => {
    const { nomEncuesta, descripcion, secciones } = req.body;
    await registroEncuesta.findByIdAndUpdate(req.params.id, { nomEncuesta, descripcion, secciones });
    res.redirect("/encuestas");
    console.log("ACTUALIZADO.........")
});

router.get("/ver",(req,res) => {
    res.render("verEncuesta", {
    });
})

//metodo para mostrar vista de encuestas generada por usuario
// router.get("/ver/:id", async (req, res) => {
//     const {id} = req.params;
//     let encuesta = await registroEncuesta.findById({_id: id}).populate({
//        path: "secciones",
//        populate: {
//         path: "preguntas"
//        } 
//     }).lean();
//     console.log(encuesta);
//     res.render("encuestas/verEncuesta", {
//         dato: encuesta
//     });
// });

router.post("/ver", (req, res) => {
    let { portapapeles } = req.body;
    copyToClipboard(req, portapapeles);
    res.redirect("/encuestas/ver");
})

export default router;
