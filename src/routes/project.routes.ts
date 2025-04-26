import { Router } from "express";
import { createProjectController } from "../modules/projects/useCases/createProject";
import { ensureAuthenticate } from "../shared/middlewares/ensureAuthenticate";
import { adminAuthenticate } from "../shared/middlewares/adminAuthenticate";
import { listProjectsController } from "../modules/projects/useCases/listProjects";
import { filterProjectsController } from "../modules/projects/useCases/filterProjects";
import multer from "multer"
import { uploadFileController } from "../modules/projects/useCases/uploadFile";
import { findProjectController } from "../modules/projects/useCases/findProject";
import { deleteProjectController } from "../modules/projects/useCases/deleteProject";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({ storage })


const projectRouter = Router()
//falta meter o admin e o ensure

projectRouter.post("/upload", upload.single("file"), (request, response) => {
    uploadFileController.handle(request, response)
})

projectRouter.post("/", (request, response) => {
    createProjectController.handle(request, response)
})

projectRouter.get("/", (request, response) => {
    listProjectsController.handle(request, response)
})

projectRouter.get("/filter", (request, response) => {
    filterProjectsController.handle(request, response)
})
projectRouter.get("/:id", (request, response) => {
    findProjectController.handle(request, response)
})

projectRouter.delete("/:id", (request, response) => {
    deleteProjectController.handle(request, response);
})

export {
    projectRouter
}