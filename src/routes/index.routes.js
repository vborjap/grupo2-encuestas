//Importando metodo Router de express
import { Router } from "express";

//Igualando método a una constante
const router = Router();

/** 
 * ESTADOS HTTP
 * get -> 200 
 * post -> 201
 * put 
 * delete
*/

router.get('/crearpregunta', (req, res) => {
    // Proceso 

    const apellido = "Escalante";

    res.render("crearformulario", {
        layout: "dashboard",
        nombre: "Antonio",
        dropdown: [
            {
                href: "#action",
                nombre: "Action"
            },
            {
                href: "#menu",
                nombre: "Menu"
            }
        ],
        apellido
    });

});

//Aquí se estarán agregando las rutas y métodos a utilizar
router.get("/", (req, res) => {



    // res.send("index");
    res.render('index', 
    {
        html: "<h1>Cristian</h1>"
    });
});

router.get("/about", (req, res) => {
    // res.send("about");
    res.render("about", {
        // layout: "dashboard"
    });
});

router.get('/listaspreguntas', (req, res) => {

    res.render("listarpreguntas", {
        layout: "dashboard"
    });
})

router.get('/editarpregunta/:id', (req, res) => {
    const {id} = req.params;

    // Solicitud a la base datos

    const pregunta1 = {
        id: id,
        nombre: "Como utilizar handlebars",
        respuesta: [
            "uno",
            "dos",
            "tres",
            "cuatro"
        ],
        correcta: "uno"
    }

    res.render("editarpregunta", {
        layout: "dashboard",
        pregunta1
    })
});


router.get("/handlebar", (req, res) => {
    // Acceder a base datos
    // Proceso datos


    // Responder
    res.render("handlebars", {
       layout: 'dashboard',
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
       }, 
       
    });
})
export default router;
