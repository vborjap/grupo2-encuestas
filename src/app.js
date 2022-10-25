import express from "express";
import indexRoutes from "./routes/index.routes.js";
import { engine } from "express-handlebars";
import path from "path";
import * as helpersHandlebars from "./utils/helpers.handlebars";
import {menuList} from "./utils/sidebar.handlebars";


const app = express();

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
    compilerOptions: {
        menuList
    },
    menuList
}));

app.set("view engine", '.hbs');

//Rutas
app.use(indexRoutes);


export default app;