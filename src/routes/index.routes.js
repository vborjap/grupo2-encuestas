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
    res.render("about", {
        // layout: "dashboard"
    });
});
router.get("/handlebar", (req, res) => {
    res.render("handlebars", {
       nombre: "Cristian",
       apellido: "Escalante",
       persona: {
        nombre: "Antonio",
        apellido: "Hernandez"
       },
       items: [
        "Uno",
        "Dos",
        "Tres"
       ],
       personas: [
        {
            nombre: "Natanael",
            apellido: "Cabezas"
        },
        {
            nombre: "rod",
            apellido: "Espino"
        },
        {
            nombre: "Emerson",
            apellido: "Cueva"
        },
        {
            nombre: "Rick",
            apellido: "Sanchez"
        },
        
       ],
       progreso: 10,
       accion: {
        isCorrect: true,
        nombre: "Crisanto"
       }
    });
})
export default router;
