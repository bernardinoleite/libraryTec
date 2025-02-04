import { Router } from "express";
import { userRouter } from "./user.routes";
import { projectRouter } from "./project.routes";
import { subjectRouter } from "./subject.routes";

const router = Router()

router.use("/users", userRouter)
router.use("/projects", projectRouter)
router.use("/subjects", subjectRouter)

export {
    router
}