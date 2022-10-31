import { Router } from "express";
import registroEncuesta from "../models/encuesta.js"
import url from 'url';
import ncp from 'copy-paste';

const router = Router();

//Función para obtener la URL completa
function fullURL(req, value) {
    return url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: `${req.originalUrl}/${value}`
    })
}

//Función para compartir un enlace 
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

router.post("/encuesta", async (req, res) => {
    let {busqueda} = req.body;
    console.log(`HOla desde encuesta ${busqueda}`)

    const encuestasFiltradas = await registroEncuesta.find({nomEncuesta: busqueda}).lean();
    console.log(encuestasFiltradas);

    res.render('verPlantillas', {
        layout: "dashboard",
        encuestasFiltradas
    });
})

//eliminar encuesta logicamente
router.post("/eliminar", async (req, res) => {
    let { identificador } = req.body;
    console.log(`URL: ${fullURL(req, identificador)}`);
    await registroEncuesta.updateOne({ _id: identificador }, { activa: false });
    res.redirect("/encuestas");
})

//Método que renderiza el formulario para crear encuesta
router.get("/crear", async (req, res) => {
    const registros = await registroEncuesta.find({}).lean();
    //mostramos en consola los registros traidos de la BDD.
    console.log(registros);
    res.render('crearEncuesta', {
        layout: "dashboard",
        registros
    });
})

//Método para recibir y guardar en la base de datos
router.post("/crear", async (req, res) => {
    const { nomEncuesta, descripcion, secciones } = req.body;
    const nuevaEncuesta = new registroEncuesta({ nomEncuesta, descripcion, secciones })

    console.log(nuevaEncuesta);
    await nuevaEncuesta.save();
    res.redirect("/encuestas");
});

//Vista Editar
router.get("/editar/:id", async (req, res) => {
    //llenar tabla
    const registros = await registroEncuesta.find({}).lean();
    //obtener registro a editar
    const editar = await registroEncuesta.findById(req.params.id).lean();
    //console.log(registros);
    res.render('editarEncuesta', {
        layout: "dashboard",
        registros,
        editar
    });
});

router.post("/editar/:id", async (req, res) => {
    const { nomEncuesta, descripcion, secciones } = req.body;
    await registroEncuesta.findByIdAndUpdate(req.params.id, { nomEncuesta, descripcion, secciones });
    res.redirect("/encuestas");
    console.log("ACTUALIZADO.........")
});

//metodo para mostrar vista de encuestas generada por usuario
router.get("/ver", (req, res) => {
    res.render('verEncuesta', {
        layout: "dashboard"
    });
});

router.post("/ver", (req, res) => {
    let { portapapeles } = req.body;
    copyToClipboard(req, portapapeles);
    res.redirect("/encuestas/ver");
})

export default router;
