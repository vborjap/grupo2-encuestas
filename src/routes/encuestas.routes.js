import { Router } from "express";
import registroEncuesta from "../models/encuesta.js"
import url from 'url';

const router = Router();

async function getElements(req, res) {
    // let value = await registroEncuesta.aggregate([{ $sample: { size: 1 } }])
    let value = await registroEncuesta.find().lean()
    // console.log(`Valor de value: ${value[1].nomEncuesta}`)
    // let elements = []
    // let counttt = await registroEncuesta.countDocuments()
    // for (let i = 0; i < counttt; i++) {
    //     let value = await registroEncuesta.find({}).lean()
    //     elements.push(value[i])
        // console.log(`Valor de value: ${value[i].nomEncuesta}`)
    return value
}

async function all(){
    let a = []
    for await (const doc of registroEncuesta.find()) {
        // console.log(doc); // Prints documents one at a time
        a.push(doc)
      }
    console.log(a);
    return a
}


router.get("/", (req, res) => {
    res.render('verPlantillas', {
        layout: "dashboard", data: all()
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

router.get("/encuestas/:nomEncuesta", async (req, res) => {
    const { nomEncuesta } = req.params;
    const registro = await registroEncuesta.findOne({ nomEncuesta });
    console.log(registro);
    res.render('verPlantillas', {
        layout: "dashboard", data: registro
    });
})


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
