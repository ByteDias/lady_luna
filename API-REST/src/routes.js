import { Router } from "express";
import EstoqueController from "./app/controllers/EstoqueController.js";

const router = Router()

//Rotas
router.get('/estoque', EstoqueController.index)
router.get('/estoque/:id', EstoqueController.show)
router.post('/estoque', EstoqueController.store)
router.put('/estoque/:id', EstoqueController.update)
router.delete('/estoque/:id', EstoqueController.delete)

export default router;