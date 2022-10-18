//Importando metodo Router de express
import { Router } from "express";
import { Chart }  from "chart.js";
//Igualando método a una constante
const router = Router();


//Aquí se estarán agregando las rutas y métodos a utilizar
router.get("/", (req, res) => {
    res.render('index', {
        layout: "dashboard"
    });
});

router.get("/about", (req, res) => {
    res.render("about", {
        layout: "dashboard"
    });
});

export default router;
