import { Project } from "../../entities/Project";
import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository";
import { ILike } from "typeorm";
import { IProjectsRepository } from "../../repositories/IProjectsRepository";




export class FilterProjectsUseCase {

    constructor(private projectsRepository: IProjectsRepository) { }

    async execute({ category, date_defense, tutor }): Promise<Project[]> {
        let whereClause: any = {};
        console.log({ category, date_defense, tutor })

        if (category !== "undefined" && category !== undefined) {
            whereClause.category = category;
        }
        if (date_defense !== "undefined" && date_defense !== undefined) {
            whereClause.date_defense = ILike(`%${date_defense}%`);
        }
        if (tutor !== "undefined" && tutor !== undefined) {
            whereClause.tutor = tutor;
        }



        const projects = await this.projectsRepository.filter(whereClause);

        return projects;
    }


}