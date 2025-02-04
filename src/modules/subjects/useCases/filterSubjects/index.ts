

import { FilterSubjectsUseCase } from "./FilterSubjectsUseCase";
import { FilterSubjectsController } from "./FilterSubjectsController";
import { SubjectsRepository } from "../../repositories/implemetations/SubjectsRepository";

const subjectsRepository = new SubjectsRepository()
const filterSubjectsUseCase = new FilterSubjectsUseCase(subjectsRepository)
const filterSubjectsController = new FilterSubjectsController(filterSubjectsUseCase)


export {
    filterSubjectsController
}