


import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository";
import { FilterProjectsController } from "./FilterProjectsController";
import { FilterProjectsUseCase } from "./FilterProjectsUseCase";


const projectsRepository = new ProjectsRepository()
const filterProjectsUseCase = new FilterProjectsUseCase(projectsRepository)
const filterProjectsController = new FilterProjectsController(filterProjectsUseCase)

export {
    filterProjectsController
}