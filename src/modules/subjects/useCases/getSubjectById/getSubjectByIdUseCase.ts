import { AppError } from "../../../../shared/error/AppError";
import { SubjectsRepository } from "../../repositories/implemetations/SubjectsRepository";


export class GetSubjectByIdUseCase {
    constructor(private readonly subjectsRepository: SubjectsRepository) {

    }
    /**
     * 
     * @param subjectId it is a id for delete subject
     * @returns void
     */

    async execute(subjectId: string) {
        const subject = await this.subjectsRepository.findById(subjectId)

        if (!subject) throw new AppError("User not found", 404)

        return subject
    }
}