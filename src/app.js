import express from "express";
import indexRoutes from "./routes/index.routes.js";
import { engine } from "express-handlebars";
import path from "path";
import * as url from 'url';


//Igualando función a una constante
const app = express();

//Se agregó esta línea para hacer uso de la variable "__dirname"
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//Configurando la carpeta "views"
app.set("./views", path.join(__dirname, "./views"));

app.engine('.hbs', engine({
    layoutsDir: path.join(app.get("./views"), "./views/layouts"),
    defaultLayout: "main",
    extname: ".hbs",
}));

app.set("view engine", '.hbs');

//Rutas
app.use(indexRoutes);

export default app;