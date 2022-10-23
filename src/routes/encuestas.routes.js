import { Router } from "express";
import url from 'url';

const router = Router();

router.get("/", (req, res) => {
    // res.render('index', {
    //     layout: "dashboard"
    // });
    res.send(fullURL(req));
});

function fullURL(req) {
    return url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
    })
}

router.get("/crear", (req, res) => {
    res.render('crearEncuesta', {
        layout: "dashboard"
    });
})

/*
router.post("/",async (req, res) => { S
    let qust = new questions({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex
    
})
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