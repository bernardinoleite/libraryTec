
import { SubjectsRepository } from "../../repositories/implemetations/SubjectsRepository";
import { GetSubjectByIdUseCase } from "./getSubjectByIdUseCase";

import { GetSubjectByIdController } from "./getSubjectByIdController";


const subjectsRepository = new SubjectsRepository()
const getSubjectByIdUseCase = new GetSubjectByIdUseCase(subjectsRepository)
const getSubjectByIdController = new GetSubjectByIdController(getSubjectByIdUseCase)


export {
    getSubjectByIdController
}