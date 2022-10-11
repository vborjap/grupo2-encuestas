//Importando metodo Router de express
import { Router } from "express";

//Igualando método a una constante
const router = Router();

//Aquí se estarán agregando las rutas y métodos a utilizar
router.get("/", (req, res) => {
    // res.send("index");
    res.render('index');
});

router.get("/about", (req, res) => {
    // res.send("about");
    res.render("about");
});
export default router;
//Stanley Melgar
