import mongoose from "mongoose";

async function conexao() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};

export default conexao;



