import { Repository } from "typeorm";
import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { Project } from "../../entities/Project";
import { IProjectsRepository } from "../IProjectsRepository";
import { AppDataSource } from "../../../../../ormConfig";



export class ProjectsRepository implements IProjectsRepository {
    private repository: Repository<Project>

    constructor() {
        this.repository = AppDataSource.getRepository(Project)
    }
    async deleteById(id: string): Promise<any> {
        await this.repository.delete({ id })
    }

    async create({ category, date_defense, description, file_path, grade_defense, members, subject, tutor }: ICreateProjectDTO): Promise<Project> {

        const project = this.repository.create({ category, date_defense, description, file_path, grade_defense, members, subject, tutor })

        const projectCreated = this.repository.save(project)

        return projectCreated

    }

    async list(): Promise<Project[]> {

        const projects = await this.repository.find()
        return projects

    }


    async filter(whereClause: any): Promise<Project[]> {


        const projects = await this.repository.find({
            where: whereClause,
            order: { created_at: "DESC" }
        })
        return projects
    }


    async findById(id: string): Promise<Project> {
        const project = await this.repository.findOne({ where: { id } })
        return project
    }
}