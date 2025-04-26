import { ICreateProjectDTO } from "../dtos/ICreateProjectDTO";
import { Project } from "../entities/Project";

export interface IProjectsRepository {


    create({ category, date_defense, description, file_path, grade_defense, members, subject, tutor }: ICreateProjectDTO): Promise<Project>
    list(): Promise<Project[]>
    filter({ category, date_defense, tutor }: { category?: string, tutor?: string, date_defense?: string }): Promise<Project[]>
    findById(id: string): Promise<Project>
    deleteById(id: string): Promise<any>
}