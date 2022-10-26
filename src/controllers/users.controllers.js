/*

//Creamos un objeto de control
const usersCtrl = {}

//Llamamos el modelo de datos para los usarios desde models
const User = require('../models/Users');

//Creamos funcion de renderizado de la pantalla de Registro Usuario
usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
}

//Creamos funcion para registro del usuario
usersCtrl.signUp = async (req, res) => {
    //Creamos un arreglo para manejo de errores
    const errors = [];
    //entreamos los datos del request bady
    const {name, fechaNac, nacionalidad, email, userName, password, confirmPassword, tipoUsuario} = req.body;
    //Verificamos si las contraseñas son correctas
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
        
    }else{
        const nuevoUsuario = new User({name, fechaNac, nacionalidad, email, userName, password, tipoUsuario});
        await nuevoUsuario.save();
        res.redirect('/users/signin');
    }

}

//Creamos funcion de renderizado de la pantalla de Inicio de sesion
usersCtrl.renderSignInForm = (req, res) => {
    res.render('users/signin');
}

//Creamos la funcion de Inicio de sesiones
usersCtrl.signIn = (req, res) => {
    res.send('signin');
}

//Creamos la funcion de final de sesiones
usersCtrl.logout = (req, res) => {
    res.send('logout');
}

module.exports = usersCtrl;*/