import { Router } from "express";
import User from "../models/user";

const router = Router();


router.get("/login", async (req, res) => {

    
    res.render("auth/login", {
        
    });
});

// Usar await cuando se use el metodo de comparar contraseña
router.post("/login", async (req, res) => {

    
});

router.get("/register", (req, res) => {


    res.render("auth/register", {
        
    });
});


router.post("/register", async (req, res) => {
    const {nombre, nickname, email, password, password_repeat} = req.body;
    if(password === password_repeat) {

    
    }else {
        res.redirect("/auth/register");
    }
});

router.get("/change", (req, res) => {
    

    res.render("auth/change", {

    });
});

router.post("/change", (req, res) => {
    const {token, password, password_repeat} = req.body;

    res.redirect("/auth/login");
});

router.get("/change/:token", (req, res) => {
    const { token } = req.params;
    if(token != "") {


        res.render("auth/token", {
            
        });
    }else {
        res.redirect("/auth/login");
    }
});



export default router;