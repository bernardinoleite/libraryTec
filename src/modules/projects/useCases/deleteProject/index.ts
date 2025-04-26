import { DeleteProjectUseCase } from "./deleteProjectUseCase";
import { DeleteProjectController } from "./deleteProjectController";
import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository";


const projectsRepository = new ProjectsRepository()
const deleteProjectUseCase = new DeleteProjectUseCase(projectsRepository)
const deleteProjectController = new DeleteProjectController(deleteProjectUseCase)


export { deleteProjectController }