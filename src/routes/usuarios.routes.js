import { Router} from "express";
import Users from "../models/Users";
const router = Router();


//Incluimos nuestro modelo de datos de Collection Usuarios
// const Usuario = require('../models/Users');

//Creamos la ruta de pantalla principal de usuarios
router.get("/", async (req, res) => {
	const usuarios = await Users.find().lean();
    //console.log(usuarios);
    res.render('listadoUsuarios', {
        usuarios,
        layout: "dashboard"
	});
});

//creamos la ruta para Agregar Usuario
router.get("/signup", (req, res) => {
	res.render('signup', {
		layout: "dashboard"
	});
});

//Creamos la ruta para Agregar usuario desde Post
router.post("/nuevoUsuario", async (req, res) => {
	//entramos los datos del request bady
    const {name, fechaNac, nacionalidad, email, userName, password, confirmPassword, tipoUsuario} = req.body;
  
        const nuevoUsuario = new Usuario({name, fechaNac, nacionalidad, email, userName, password, tipoUsuario});
        await nuevoUsuario.save();
        res.render('nuevoUsuario', {
            layout: "dashboard"
	    });
});

//Creamos la ruta de Pantalla de Inicio
router.get("/signin", (req, res) => {
	res.render('signin', {
		layout: "dashboard"
	});
});

//Creamos la ruta para la Autenticacion
router.post("/signin", async(req, res) => {
	const {usuario, password}=req.body;
	const BuscarUsuario = await Users.findOne({userName:usuario})
	
	if(!BuscarUsuario){
			res.render('errorUsuario', {
			layout: "dashboard"
		});
	} else{
			/*res.render('verPlantillas', {
			layout: "dashboard"
		});*/
		const BuscarPassword = await Users.findOne({password:{$eq: password }})
		if(!BuscarPassword){
			res.render('errorPassword', {
				layout: "dashboard"
			});
		}else{
			res.render('verPlantillas', {
			layout: "dashboard"
			});
		}
	}
		
	//res.redirect('encuestas', {
	//layout: "dashboard"
	//});
});

//Creamos la ruta de pantalla Editar usuarios
router.get("/editarUsuario", (req, res) => {
   /* const usuario = await Users.updateOne({id:id}, { 
        $set:{
            campo:'Valor'
        }       
    })*/
	res.render('editarUsuario', {
		layout: "dashboard"
	});
});

//Creamos la ruta de pantalla Editar usuarios
router.get("/verUsuario", (req, res) => {
	res.render('verUsuario', {
		layout: "dashboard"
	});
});

//Creamos la ruta de pantalla Eliminar usuarios
router.get("/eliminarUsuario", (req, res) => {
	res.render('eliminarUsuario', {
		layout: "dashboard"
	});
});


export default router;
