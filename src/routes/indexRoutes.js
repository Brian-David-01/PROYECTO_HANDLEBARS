import {Router} from "express";
import Celulares from "../models/Celulares";
import { redirect } from "express/lib/response";
import { agregarCelulares, createCelulares, deleteCelulares, renderCelulares, renderEditCelulares, updateCelulares } from "../controllers/celularController";


const router = Router();

// FUNCIONES DE ALUMNO DE LA CARPETA CONTROLLERS --> alumnoController
router.get("/", renderCelulares);
router.get("/agregarCelulares", agregarCelulares);
router.post("/celulares/agregar", createCelulares);
router.get("/celulares/:id/update", renderEditCelulares);
router.post("/updateCelulares/:id", updateCelulares);
router.get("/celulares/:id/delete", deleteCelulares);

export default router;