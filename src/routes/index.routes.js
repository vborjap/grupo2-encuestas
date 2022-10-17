import { Router, urlencoded } from "express";
import encuentasRoutes from "./encuestas.routes.js";
import preguntasRoutes from "./preguntas.routes.js"
import respuestasRoutes from "./respuestas.routes.js"
import seccionesRoutes from "./secciones.routes.js"
import usuariosRoutes from "./usuarios.routes.js"

const router = Router();
//

router.get("/", (req, res) => {
    res.render('index');
});

//Middleware para rutas
router.use((req, res, next)=>{
     if(req.path==("/about")){
         next();
     }
     else if(req.path==("/encuestas")){
         next();
     }
     else if(req.path==("/preguntas")){
        next();
     }
     else if(req.path==("/respuestas")){
        next();
     }
     else if(req.path==("/secciones")){
        next();
     }
     else if(req.path==("/usuarios")){
        next();
     }
     else{
        res.render("index")
        console.log("HAS SIDO REDIRECCIONADO");
     }
 })

router.get("/about", (req, res) => {
    res.render("about");
});

router.use("/encuestas", encuentasRoutes);
router.use('/preguntas', preguntasRoutes);
router.use('/respuestas', respuestasRoutes);
router.use('/secciones', seccionesRoutes);
router.use('/usuarios', usuariosRoutes);

export default router;
