import { Router } from "express";
import { createUserController } from "../modules/acoount/useCases/createUser";
import { authenticateUserController } from "../modules/acoount/useCases/authenticateUser";

const userRouter = Router()

userRouter.post("/", (request, response) => {
    createUserController.handle(request, response)
})
userRouter.post("/auth", (request, response) => {
    authenticateUserController.handle(request, response)
})

export {
    userRouter
}