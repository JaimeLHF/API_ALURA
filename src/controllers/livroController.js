import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (err) {
            res.status(500).json({ message: `Erro: ${err.message}` })
        }
    };

    static async listarLivrosId(req, res) {
        try {
            const id = req.params.id
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (err) {
            res.status(500).json({ message: `Erro: ${err.message}` })
        }
    };

    static async cadastrarLivro(req, res) {

        const livroEncontrado = await livro.findById(req.body.id);
        const newLivro = req.body;

        if (!livroEncontrado) {
            try {
                const autorEncontrado = await autor.findById(newLivro.autor);
                const livroCompleto = { ...newLivro, autor: { ...autorEncontrado._doc } };
                const livroCriado = await livro.create(livroCompleto);
                res.status(201).json({ message: `Livro Cadastrado!`, livro: livroCriado });

            } catch (err) {
                res.status(500).json({ message: `Erro: ${err.message}` })
            }
        } else {
            res.status(501).json({ message: `Livro já cadastrado!`, livroEncontrado })
        }
    }

    static async atualizarLivrosId(req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Livro Atualizado!' });
        } catch (err) {
            res.status(500).json({ message: `Erro: ${err.message}` })
        }
    };

    static async deleteLivrosId(req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: `Livro Deletado!` });
        } catch (err) {
            res.status(500).json({ message: `Erro: ${err.message}` })
        }
    };


    static async listarLivrosEditora(req, res) {
        const editora = req.query.editora;
        try {
            const livrosEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosEditora);
        } catch (err) {
            res.status(500).json({ message: `Erro: ${err.message}` })
        }
    };

};




export default LivroController;
