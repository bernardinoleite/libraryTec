
import { SubjectsRepository } from "../../repositories/implemetations/SubjectsRepository";
import { DeleteSubjectUseCase } from "./deleteSubjectUseCase";

import { DeleteSubjectController } from "./deleteSubjectController";


const subjectsRepository = new SubjectsRepository()
const deleteSubjectUseCase = new DeleteSubjectUseCase(subjectsRepository)
const deleteSubjectController = new DeleteSubjectController(deleteSubjectUseCase)


export {
    deleteSubjectController
}