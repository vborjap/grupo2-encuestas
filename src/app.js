import express from "express";
import indexRoutes from "./routes/index.routes.js";
import exampel from "./routes/preguntas.routes.js"
import { engine } from "express-handlebars";
import path from "path";
import * as url from 'url';


//Igualando función a una constante
const app = express();

//Configurando la carpeta "views"
app.set("views", path.join(__dirname, 'views'));

app.engine('.hbs', engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: "main",
    extname: ".hbs",

    // Configuracion para el directorio partials
    // Agregado por: Cristian Antonio Escalante Hernandez
    partialsDir: [
        path.join(app.get("views"), "partials")
    ]
    
}));

app.set("view engine", '.hbs');

//Rutas
app.use(indexRoutes);
app.use(exampel)

export default app;