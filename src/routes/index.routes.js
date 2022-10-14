//Importando metodo Router de express
import { Router, urlencoded } from "express";

//Igualando método a una constante
const router = Router();

//Aquí se estarán agregando las rutas y métodos a utilizar
router.get("/", (req, res) => {
    // res.send("index");
    res.render('index');
});

//middleware para about --Anderson Velásquez--VJ21002
router.use((req, res, next)=>{
    if(req.path==("/about")){
        next();
    }
    else{
        res.render('index');
        console.log("Has sido redireccionado")
    }
})

router.get("/about", (req, res) => {
    // res.send("about");
    res.render("about");
});
export default router;
