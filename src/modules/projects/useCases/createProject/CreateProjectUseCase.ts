import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { Project } from "../../entities/Project";
import { IProjectsRepository } from "../../repositories/IProjectsRepository";



export class CreateProjectUseCase {

    constructor(private projectRepository: IProjectsRepository) { }


    async execute({ category, date_defense, description, file_path, grade_defense, members, subject, tutor }: ICreateProjectDTO): Promise<Project> {

        const project = await this.projectRepository.create({ category, date_defense, description, file_path, grade_defense, members, subject, tutor })

        return project
    }

}