import { Router} from "express";
const router = Router();

const registroEncuesta = require('../models/encuesta');

router.get("/", async(req, res) => {
    const registros = await registroEncuesta.find({});
    console.log(registros);
    res.render('crearEncuesta',{
        layout: "dashboard"
    });
});

//Método para recibir y guardar en la base de datos
router.post("/",async (req, res) => { 
    const{nomEncuesta, descripcion, secciones }=req.body;
    const nuevaEncuesta=new registroEncuesta({nomEncuesta,descripcion,secciones})
    console.log(nuevaEncuesta);
    await nuevaEncuesta.save();
    res.send('ok');
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

export default router;