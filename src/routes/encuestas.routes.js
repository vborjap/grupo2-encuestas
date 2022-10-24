import { Router } from "express";
import url from 'url';

const router = Router();


const registroEncuesta = require('../models/encuesta');

router.get("/", (req, res) => {
    res.render('verPlantillas', {
>>>>>>> 21815a02ab665e1077b219b2d250543023411a6e
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
/*
router.get("/", async(req, res) => {
    const registros = await registroEncuesta.find({});
    console.log(registros);
    res.render('crearEncuesta',{
    });
    
});
*/
router.get("/crear", async (req, res) => {
    const registros = await registroEncuesta.find({});
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
    res.send('ok');
});

router.get("/editar", (req, res) => {
    res.render('editarEncuesta', {
        layout: "dashboard"
    });
})

export default router;