import { AppError } from "../../../../shared/error/AppError";
import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository";


export class DeleteProjectUseCase {


    constructor(private readonly projectsRepository: ProjectsRepository) {
    }

    async execute(id: string) {
        const project = await this.projectsRepository.findById(id)

        if (!project) throw new AppError("Project not found", 404);

        await this.projectsRepository.deleteById(id)
    }



}