import { Repository } from "typeorm";
import { Subject } from "../../entities/Subject";
import { AppDataSource } from "../../../../../ormConfig";
import { ISubjectsRepository } from "../ISubjectsRepository";
import { ISubjectCreateDTO } from "../../dtos/ISubjectCreateDTO";



export class SubjectsRepository implements ISubjectsRepository {

    private repository: Repository<Subject>
    constructor() {
        this.repository = AppDataSource.getRepository(Subject)
    }
    async create({ creator, category, description, objective, phone_number, subject, reference }: ISubjectCreateDTO): Promise<Subject> {

        const subjectObj = this.repository.create({ creator, category, description, objective, phone_number, subject, reference })

        const subjectCreated = await this.repository.save(subjectObj)

        return subjectCreated
    }
    async list(): Promise<Subject[]> {

        const subjects = await this.repository.find()
        return subjects
    }
    async filter(whereClause: { category?: string; creator?: string; created_at?: Date; }): Promise<Subject[]> {
        const subjects = await this.repository.find({
            where: whereClause,
            order: { created_at: "DESC" }
        })

        return subjects
    }


}