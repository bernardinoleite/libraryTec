

import { SubjectsRepository } from "../../repositories/implemetations/SubjectsRepository";
import { CreateSubjectsUseCase } from "./CreateSubjectUseCase";
import { CreateSubjectsController } from "./CreateSubjectsController";

const subjectsRepository = new SubjectsRepository()
const createSubjectsUseCase = new CreateSubjectsUseCase(subjectsRepository)
const createSubjectsController = new CreateSubjectsController(createSubjectsUseCase)

export {
    createSubjectsController
}