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
    console.log(fullURL(req));
    await nuevaEncuesta.save();
    res.redirect("/encuestas");
});
//Vista Editar
router.get("/editar/:id", async (req, res) => {
    //llenar tabla
    const registros = await registroEncuesta.find({}).lean();
    //obtener registro a editar
    const editar=await registroEncuesta.findById(req.params.id).lean();
    //console.log("Registro a editar:")
    //console.log(editar);
    //mostramos en consola los registros traidos de la BDD.
    console.log(registros);
    res.render('editarEncuesta', {
        layout: "dashboard",
        registros,
        editar
    });
})
router.post("/editar/:id", async (req, res) => {
    const { nomEncuesta,descripcion,secciones} = req.body;
    await registroEncuesta.findByIdAndUpdate(req.params.id,{nomEncuesta,descripcion,secciones});
    res.redirect("/encuestas");
    console.log(req.body);
    console.log(req.params.id);
    console.log("ACTUALIXADO.........-------")
});
export default router;
