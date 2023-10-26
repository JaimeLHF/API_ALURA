import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutor(req, res) {
        try {
            const listarAutor = await autor.find({});
            res.status(200).json(listarAutor);
        } catch (err) {
            res.status(500).json({ message: `Erro: ${err.message}` })
        }
    };

    static async listarAutorId(req, res) {
        try {
            const id = req.params.id
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (err) {
            res.status(500).json({ message: `Erro: ${err.message}` })
        }
    };

    static async cadastrarAutor(req, res) {

        const autorEncontrado = await autor.findById(req.body.id);

        if (!autorEncontrado) {
            try {
                const newAutor = await autor.create(req.body);
                res.status(400).json({ message: `Autor Cadastrado!`, autor: newAutor });

            } catch (err) {
                res.status(500).json({ message: `Erro: ${err.message}` })
            }
        } else {
            res.status(500).json({ message: `Autor já cadastrado!`, autorEncontrado })
        }
    }

    static async atualizarAutorId(req, res) {
        try {
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Autor Atualizado!' });
        } catch (err) {
            res.status(500).json({ message: `Erro: ${err.message}` })
        }
    };

    static async deleteAutorId(req, res) {
        try {
            const id = req.params.id
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: `Autor Deletado!` });
        } catch (err) {
            res.status(500).json({ message: `Erro: ${err.message}` })
        }
    };



};




export default AutorController;
