import { Router} from "express";
const router = Router();

router.get("/", (req, res) => {
	res.send("Estas en respuestas")
});

// Rutas Modulo 5
/* Incopatibilidad con el middleware de redireccionamiento; al estar este activo un id es tomado como una ruta no valida y por ende
no se retorna el id como lo define esta funcion*/
router.get("/:id", (req, res) => {
	const {id} = req.params;
	res.send("dato: " + id);
});

export default router;