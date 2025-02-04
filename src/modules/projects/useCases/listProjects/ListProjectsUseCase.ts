import { Project } from "../../entities/Project";
import { IProjectsRepository } from "../../repositories/IProjectsRepository";




export class ListProjectsUseCase {

    constructor(private projectsRepository: IProjectsRepository) { }

    async execute(): Promise<Project[]> {

        const projects = await this.projectsRepository.list()

        return projects
    }
}