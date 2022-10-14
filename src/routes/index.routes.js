//Importando metodo Router de express
import { Router, urlencoded } from "express";
import encuentasRoutes from "./encuestas.routes.js";
import preguntasRoutes from "./preguntas.routes.js"
import respuestasRoutes from "./respuestas.routes.js"
import seccionesRoutes from "./secciones.routes.js"
import usuariosRoutes from "./usuarios.routes.js"

//Igualando método a una constante
const router = Router();

//Aquí se estarán agregando las rutas y métodos a utilizar
router.get("/", (req, res) => {
    // res.send("index");
    res.render('index');
});

//middleware para about --Anderson Velásquez--VJ21002
// router.use((req, res, next)=>{
//     if(req.path==("/about")){
//         next();
//     }
//     else{
//         res.render('index');
//         console.log("Has sido redireccionado")
//     }
// })

router.get("/about", (req, res) => {
    // res.send("about");
    res.render("about");
});

router.use("/encuestas", encuentasRoutes);
router.use('/preguntas', preguntasRoutes);
router.use('/respuestas', respuestasRoutes);
router.use('/secciones', seccionesRoutes);
router.use('/usuarios', usuariosRoutes);

export default router;
