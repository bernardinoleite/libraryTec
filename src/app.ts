import express from "express" // importando a biblioteca express para fazer o gerenciamento de rotas
import cors from "cors"
import { router } from "./routes" // importar as minhas rotas que estão dentro da pasta routes
import path from "path"
const port = process.env.PORT || 2908// estou a pegar a porta para disponibilizar acesso ao servidor

const app = express() //inicio o express
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(cors())
app.use(express.json())  // permite entrada de json por meio da requisição
app.use(router) // uso todas as rotas criadas

app
    .listen(port) // meto o servidor a escutar a porta
    .on("listening", () => { // ouvir o evento de listen do servidor
        console.log("Server is running");
    })