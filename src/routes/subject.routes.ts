

import { Router } from "express";
import { createSubjectsController } from "../modules/subjects/useCases/createSubject";
import { filterSubjectsController } from "../modules/subjects/useCases/filterSubjects";
import { listSubjectsController } from "../modules/subjects/useCases/listSubjects";

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


export { subjectRouter }