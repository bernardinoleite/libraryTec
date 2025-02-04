import { ISubjectCreateDTO } from "../dtos/ISubjectCreateDTO";
import { Subject } from "../entities/Subject";


export interface ISubjectsRepository {

    create({ creator, description, objective, phone_number, subject, reference, category }: ISubjectCreateDTO): Promise<Subject>

    list(): Promise<Subject[]>

    filter({ category, created_at, creator }: { category?: string, creator?: string, created_at?: Date }): Promise<Subject[]>

}