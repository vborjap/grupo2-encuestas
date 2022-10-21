import { Router} from "express";
const router = Router();

router.get("/", (req, res) => {
    res.render('index', {
        layout: "dashboard"
    });
});

router.post("/",async (req, res) => {
    let qust = new questions({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex
})
 
try {
    let savedDocument = await qust.save()
    res.status(201).json(savedDocument)
    }
    catch (err) {
        res.status(420).send("Error")
    }
})

export default router;