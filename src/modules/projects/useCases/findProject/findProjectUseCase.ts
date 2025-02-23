import { AppError } from "../../../../shared/error/AppError";
import { Project } from "../../entities/Project";
import { IProjectsRepository } from "../../repositories/IProjectsRepository";



export class FindProjectUseCase {


    constructor(private projectRepository: IProjectsRepository) {

    }

    async execute(id: string): Promise<Project> {
        const project = await this.projectRepository.findById(id)

        if (!project) throw new AppError("Project does not exists", 404)

        return project
    }
}