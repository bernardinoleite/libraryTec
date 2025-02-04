import { ISubjectCreateDTO } from "../../dtos/ISubjectCreateDTO";
import { Subject } from "../../entities/Subject";
import { ISubjectsRepository } from "../../repositories/ISubjectsRepository";


export class CreateSubjectsUseCase {

    constructor(private subjectsRepository: ISubjectsRepository) { }

    async execute({ creator, description, category, objective, phone_number, subject, reference }: ISubjectCreateDTO): Promise<Subject> {

        const subjectCreated = await this.subjectsRepository.create({ creator, category, description, objective, phone_number, subject, reference })

        return subjectCreated
    }

}