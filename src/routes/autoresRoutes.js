import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get('/autores', AutorController.listarAutor);
routes.get('/autores/:id', AutorController.listarAutorId);
routes.post('/autores', AutorController.cadastrarAutor);
routes.put('/autores/:id', AutorController.atualizarAutorId);
routes.delete('/autores/:id', AutorController.deleteAutorId);

export default routes; 