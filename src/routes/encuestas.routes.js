import { Router } from "express";
import registroEncuesta from "../models/encuesta.js"
import url from 'url';

const router = Router();

async function getElements(req, res) {
    let value = await registroEncuesta.aggregate([{ $sample: { size: 1 } }])
    console.log(value)
    return value;
}

function anotherData(){
    return "635b55753b718493acaf30ea"
}

router.get("/", (req, res) => {
    res.render('verPlantillas', {
        layout: "dashboard", data: getElements(), e: anotherData()
    });
});

router.post("/" , async (req, res) => {
    let {a} = req.body;
    console.log(`Registro: ${a}`);
    console.log(`URL: ${fullURL(req)}`);
    await registroEncuesta.findOneAndDelete(a);
    console.log(`Registro eliminado ${a}`);
    res.redirect("/encuestas");
})

//Funcion para eliminar registros
// router.delete("/", async (req, res) => {
//     let { nomEncuesta } = req.body;
//     await registroEncuesta.deleteOne(
//         { nomEncuesta },
//     )
// })

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
    await nuevaEncuesta.save();
    res.redirect("/encuestas")
});

router.get("/editar", (req, res) => {
    res.render('editarEncuesta', {
        layout: "dashboard"
    });
})

export default router;
