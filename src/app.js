import express from "express";
import conexao from "./config/db_connect.js";
import routes from "./routes/index.js";

const conexaodb = await conexao();

conexaodb.on('error', (err) => {
    console.error("Erro de conexão ", err);
});

conexaodb.once("open", () => {
    console.log("Conexão com sucesso!")
})

const app = express();
routes(app);    


// Deleta o livro pelo id
app.delete('/livros/:id', (req, res) => {

    const index = searchBook(req.params.id);
    livros.splice(index, 1);
    res.status(201).send(`Livro ${livros[index].titulo} deletado!`)
});


export default app;