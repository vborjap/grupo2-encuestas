import { Router} from "express";
const router = Router();

//Incluimos nuestro modelo de datos de Collection Usuarios
const Usuario = require('../models/Users');

router.get("/", (req, res) => {
	res.send("Estas en usuarios")
});

//creamos la ruta para Agregar Usuario
router.get("/signup", (req, res) => {
	res.render('signup', {
		layout: "dashboard"
	});
});

//Creamos la ruta para Agregar usuario desde Post
router.post("/nuevoUsuario", async (req, res) => {
	//Creamos un arreglo para manejo de errores
	//const errors = [];
    //entreamos los datos del request bady
    const {name, fechaNac, nacionalidad, email, userName, password, confirmPassword, tipoUsuario} = req.body;
   /* //Verificamos si las contraseñas son correctas
    if(password != confirmPassword){
        errors.push({text: 'Password no concuerda'});
    }
    //Verificamos el tamaño de la contraseña
    if(password.length < 6){
        errors.push({text: 'El password debe tener almenos 6 caracteres'});
    }
    //Verificamos si se ha almacenado algun error
    if(errors.length > 0){
        res.render('users/signup', {
            errors,
            name,
            fechaNac,
            nacionalidad,
            email,
            userName
        })
    }else{
        res.send('Registro Satisfactorio');
    }

    //consultamos a la base de datos si el usuario ya existe
    const emailUser = await User.findOne({email: email});
    if(emailUser){
        //req.flash('error_msg', 'El correo ya esta en uso');
        //res.redirect('/users/signup');
        
    }else{*/
        const nuevoUsuario = new Usuario({name, fechaNac, nacionalidad, email, userName, password, tipoUsuario});
        await nuevoUsuario.save();
        //res.redirect('signin');
    //}
	res.render('nuevoUsuario', {
		layout: "dashboard"
	});
});

//Creamos la Ruta para generacion del listado de usuarios desde base de datos
router.get("/signup", (req, res) => {
	res.render('signup', {
		layout: "dashboard"
	});
});

export { router };