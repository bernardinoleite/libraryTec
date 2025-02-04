


import { SubjectsRepository } from "../../repositories/implemetations/SubjectsRepository";
import { ListSubjectsUseCase } from "./ListSubjectsUseCase";
import { ListSubjectsController } from "./ListSubjectsController";


const subjectsRepository = new SubjectsRepository()

const listSubjectsUseCase = new ListSubjectsUseCase(subjectsRepository)

const listSubjectsController = new ListSubjectsController(listSubjectsUseCase)

export {
    listSubjectsController
}