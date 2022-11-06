const passport = require('passport');
const Users = require('../models/Users');
const LocalStrategy = require('passport-local').Strategy;

//Enlasamos en modelo Users
const User = require('../models/Users');


//Creamos funcion para logeo de usuario
passport.use(new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password'
}, async(userName, password, done) => {
    //confirmamos si exsiste el usuario
    const user = await User.findOne({userName});
    if(!user){
        return done(null, false, {message: 'Usuario no existe'});
    }else{
        //Comparamos las contraseñas
        const match = await user.matchPassword(password);
        if(match){
            return done(null, user)
        }else{
            return done(null, flase, {message: 'Password Incorrecto'});
        }
    }
}));

//Serializamos el usuario por su ID en base de datos
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//metodo para buscar desde base de datos el usario en cada pagina
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});