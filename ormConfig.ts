import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./src/modules/acoount/entities/User";
import { Project } from "./src/modules/projects/entities/Project";
import { Subject } from "./src/modules/subjects/entities/Subject";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./database.sqlite", // Caminho do banco de dados
    entities: [User, Project, Subject], // Caminho para as entidades
    synchronize: true, // Sincroniza as entidades automaticamente
    logging: false,
});


AppDataSource.initialize()
    .then(() => {
        console.log("")
    })