import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get('/livros', LivroController.listarLivros);
routes.get('/livros/busca', LivroController.listarLivrosEditora);
routes.get('/livros/:id', LivroController.listarLivrosId);
routes.post('/livros', LivroController.cadastrarLivro);
routes.put('/livros/:id', LivroController.atualizarLivrosId);
routes.delete('/livros/:id', LivroController.deleteLivrosId);

export default routes;