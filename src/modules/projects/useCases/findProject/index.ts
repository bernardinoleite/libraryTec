import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository";
import { FindProjectUseCase } from "./findProjectUseCase";
import { FindProjectController } from "./findProjectController";

const projectRepository = new ProjectsRepository()
const findProjectUseCase = new FindProjectUseCase(projectRepository)
const findProjectController = new FindProjectController(findProjectUseCase)


export {
    findProjectController
}