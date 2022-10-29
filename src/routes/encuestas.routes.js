import { Router } from "express";
import registroEncuesta from "../models/encuesta.js"
import url from 'url';

const router = Router();

//Función para obtener la URL completa
function fullURL(req, value) {
    return url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: `${req.url}/encuestas/${value}`
    })
}

router.get("/", async (req, res) => {

    const encuestas = await registroEncuesta.find({}).lean();
    console.log(encuestas);

    res.render('verPlantillas', {
        layout: "dashboard",
        encuestas 
    });
})

//eliminar encuesta logicamente
router.post("/" , async (req, res) => {
    let {identificador} = req.body;
    console.log(`Registro: ${identificador}`);
    console.log(`URL: ${fullURL(req,identificador)}`);
    // await registroEncuesta.findByIdAndDelete(identificador);
    await registroEncuesta.updateOne({_id: identificador}, {activa: false});
    console.log(`Registro eliminado ${identificador}`);
    res.redirect("/encuestas");
})

//Método que renderiza el formulario para crear encuesta
router.get("/crear", async (req, res) => {
    const registros = await registroEncuesta.find({});
    //mostramos en consola los registros traidos de la BDD.
    console.log(registros);
    res.render('crearEncuesta', {
        layout: "dashboard"
    });
})

//Método para recibir y guardar en la base de datos
router.post("/crear", async (req, res) => {
    const { nomEncuesta, descripcion, secciones } = req.body;
    const nuevaEncuesta = new registroEncuesta({ nomEncuesta, descripcion, secciones })
    console.log(nuevaEncuesta);
    await nuevaEncuesta.save();
    res.redirect("/encuestas")
});


router.get("/editar", (req, res) => {
    res.render('editarEncuesta', {
        layout: "dashboard"
    });
})

//metodo para mostrar vista de encuestas generada por usuario
router.get("/ver", (req, res) => {
    res.render('verEncuesta', {
        layout: "dashboard"
    });
});

export default router;
