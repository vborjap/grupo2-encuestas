import { Router, urlencoded } from "express";
import encuentasRoutes from "./encuestas.routes.js";
import preguntasRoutes from "./preguntas.routes.js"
import respuestasRoutes from "./respuestas.routes.js"
import seccionesRoutes from "./secciones.routes.js"
import usuariosRoutes from "./usuarios.routes.js"

const router = Router();
//
router.use(urlencoded({
    extended: true
}));

router.get("/", (req, res) => {
    res.render('index',{
        layout: "dashboard"
    });
});

// Habilitar cuando se implemente autenticacion
// Nota: doy por hecho que se utilizara una variable
// de estado llamada user y se enviara en el body de una solicitud
// function auth(req, res, next) {
//    const {user} = req.body;
//    if(user) {
//       return next();
//    }else {
//       return res.sendStatus(401);
//    }
// }
// router.use(auth);

router.get("/about", (req, res) => {
    res.render("about");
});

router.use("/encuestas", encuentasRoutes);
router.use('/preguntas', preguntasRoutes);
router.use('/respuestas', respuestasRoutes);
router.use('/secciones', seccionesRoutes);
router.use('/usuarios', usuariosRoutes);

// Esto permite redireccionar a inicio en caso que no exista la URL
// Nota: Comunmente debe redireccionar a una vista 404, es de comentarlo a los de IGF
router.get("*",  (req, res) => {
   res.redirect("/");
});

export default router;
