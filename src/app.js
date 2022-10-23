import express from "express";
import indexRoutes from "./routes/index.routes.js";
import { engine } from "express-handlebars";
import path from "path";
import * as helpersHandlebars from "./utils/helpers.handlebars";
import {menuList} from "./utils/sidebar.handlebars";
import morgan from "morgan";


const app = express();

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
    compilerOptions: {
        menuList
    },
    menuList
}));

app.set("view engine", '.hbs');


//Rutas
app.use(express.json())
app.use(indexRoutes);

export default app;