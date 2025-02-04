import { Router } from "express";
import { createProjectController } from "../modules/projects/useCases/createProject";
import { ensureAuthenticate } from "../shared/middlewares/ensureAuthenticate";
import { adminAuthenticate } from "../shared/middlewares/adminAuthenticate";
import { listProjectsController } from "../modules/projects/useCases/listProjects";
import { filterProjectsController } from "../modules/projects/useCases/filterProjects";


const projectRouter = Router()
//falta meter o admin e o ensure

projectRouter.post("/", (request, response) => {
    createProjectController.handle(request, response)
})
projectRouter.get("/", (request, response) => {
    listProjectsController.handle(request, response)
})
projectRouter.get("/filter", (request, response) => {
    filterProjectsController.handle(request, response)
})


export {
    projectRouter
}