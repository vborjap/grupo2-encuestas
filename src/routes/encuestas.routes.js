import { Router } from "express";
import url from 'url';

const router = Router();


const registroEncuesta = require('../models/encuesta');

router.get("/", (req, res) => {
    res.render('verPlantillas', {
        layout: "dashboard"
    });
});



/*
router.post("/",async (req, res) => { 
    let qust = new questions({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        
    
})
res.send('ok')
});
*/

// try {
//     let savedDocument = await qust.save()
//     res.status(201).json(savedDocument)
//     }
//     catch (err) {
//         res.status(420).send("Error")
//     }
// })

 //Función para obtener la URL completa
function fullURL(req) {
    return url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
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
router.post("/crear",async (req, res) => { 
    const{nomEncuesta, descripcion, secciones }=req.body;
    const nuevaEncuesta=new registroEncuesta({nomEncuesta,descripcion,secciones})
    console.log(nuevaEncuesta);
    await nuevaEncuesta.save();
    res.render('verPlantillas',{
        layout: "dashboard"
    });
});

router.get("/editar", (req, res) => {
    res.render('editarEncuesta', {
        layout: "dashboard"
    });
})

export default router;