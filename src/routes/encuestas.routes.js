import { Router } from "express";
import url from 'url';

const router = Router();

router.get("/", (req, res) => {
    res.render('verPlantillas', {
        layout: "dashboard"
    });
});

// Función para obtener la URL completa
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

router.get("/editar", (req, res) => {
    res.render('editarEncuesta', {
        layout: "dashboard"
    });
})

export default router;