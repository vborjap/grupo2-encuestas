import { Router } from "express";
import registroEncuesta from "../models/encuesta.js"
import url from 'url';

const router = Router();

router.get("/", (req, res) => {
    res.render('verPlantillas', {
        layout: "dashboard"
    });
});

//Funcion para eliminar registros
router.delete("/", async (req, res) => {
    let { nomEncuesta } = req.body;
    await registroEncuesta.deleteOne(
        { nomEncuesta },
    )
})

//Función para obtener la URL completa
function fullURL(req) {
    let { nomEncuesta } = req.body;
    return url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: `${req.url}/encuestas/${nomEncuesta}`
    })
}

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
    console.log(fullURL(req));
    await nuevaEncuesta.save();
    res.render('verPlantillas', {
        layout: "dashboard"
    });
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
