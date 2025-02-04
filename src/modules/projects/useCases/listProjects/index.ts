


import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository";
import { ListProjectsController } from "./ListProjectsController";
import { ListProjectsUseCase } from "./ListProjectsUseCase";

const projectsRepository = new ProjectsRepository()
const listProjectsUseCase = new ListProjectsUseCase(projectsRepository)
const listProjectsController = new ListProjectsController(listProjectsUseCase)

export {
    listProjectsController
}