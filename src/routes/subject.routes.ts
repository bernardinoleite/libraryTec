import { Router } from "express";
import { createSubjectsController } from "../modules/subjects/useCases/createSubject";
import { filterSubjectsController } from "../modules/subjects/useCases/filterSubjects";
import { listSubjectsController } from "../modules/subjects/useCases/listSubjects";
import { getSubjectByIdController } from "../modules/subjects/useCases/getSubjectById";
import { deleteSubjectController } from "../modules/subjects/useCases/deleteSubject";

const subjectRouter = Router()


subjectRouter.post("/", (request, response) => {
    createSubjectsController.handle(request, response)
})
subjectRouter.get("/filter", (request, response) => {
    filterSubjectsController.handle(request, response)
})
subjectRouter.get("/", (request, response) => {
    listSubjectsController.handle(request, response)
})

subjectRouter.get("/:id", (request, response) => {
    getSubjectByIdController.handle(request, response)
})

subjectRouter.get("/:subjectId", (request, response) => {
    getSubjectByIdController.handle(request, response)
})

subjectRouter.delete("/:subjectId", (request, response) => {
    deleteSubjectController.handle(request, response)
})
export { subjectRouter }