import { Router} from "express";
const router = Router();

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
router.post("/signup", (req, res) => {
	res.send("Gracias por los datos");
});


//router.get('/usuarios/signup', renderSignUpForm);

export default router;

/*
//exportamos el Router desde Express
const { Router } = require('express');
//Ejecutamos el router
const router = Router();

//Incluimos las funciones desde el ontrolador de usuarios
const {renderSignUpForm, renderSignInForm, signIn, signUp, logout} = require('../controllers/users.controller');
const { route } = require('./index.routes');

//creamos la ruta para Agregar Usuario
router.get('/users/signup', renderSignUpForm);

//creamos la ruta para registro de usuario
router.post('/users/signup', signUp);

//creamos la ruta para el formulario de Inicio de sesion
router.get('/users/signin', renderSignInForm);

//creamos la ruta para registro Inicio de sesion
router.post('/users/signin', signIn);

//creamos la ruta para cerrar la sesion
router.get('/users/logout', logout);

// Exportamos el router para ser utilizado por otras dependencias
module.exports = router;*/