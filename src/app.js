import express from "express";
import indexRoutes from "./routes/index.routes.js";
import { engine } from "express-handlebars";
import path from "path";
import * as helpersHandlebars from "./utils/helpers.handlebars";
import morgan from "morgan";
import methodOverride from "method-override";
import flash from "express-flash";
import session from "express-session";

const app = express(); 

//requerimos el archivo de configuracion de Passport
require('./config/passport');

morgan.token('host', (req, res) => {
    return req.hostname;
});

// Morgan configuration: https://expressjs.com/en/resources/middleware/morgan.html
app.use(morgan(":method / :host / :status / :res[content-length] / :response-time ms"));

//Configurando la carpeta "views"
app.set("views", path.join(__dirname, 'views'));

// Configuracion handlebars: https://handlebarsjs.com/guide/#what-is-handlebars
app.engine('.hbs', engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: "main",
    extname: ".hbs",
    // Configuracion para el directorio partials
    partialsDir: [
        path.join(app.get("views"), "partials")
    ],
    helpers: helpersHandlebars,
}));


app.set("view engine", '.hbs');
app.use(session({ 
    cookie: { maxAge: 60000 }, 
    secret: 'root',
    resave: false, 
    saveUninitialized: false
}));
app.use(flash());
//Rutas
//Configuracion para entender datos desde formulario
app.use(express.urlencoded({extended: true}));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(express.json())
app.use(methodOverride("_method"));
app.use(indexRoutes);




export default app;