import { Subject } from "../../entities/Subject";
import { SubjectsRepository } from "../../repositories/implemetations/SubjectsRepository";



export class ListSubjectsUseCase {

    constructor(private subjectsRepository: SubjectsRepository) { }

    async execute(): Promise<Subject[]> {
        const subjects = this.subjectsRepository.list()
        return subjects
    }
}