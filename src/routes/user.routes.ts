import { Router } from "express";
import { createUserController } from "../modules/acoount/useCases/createUser";
import { authenticateUserController } from "../modules/acoount/useCases/authenticateUser";
import { listUsersController } from "../modules/acoount/useCases/listUsers";
import { countUsersController } from "../modules/acoount/useCases/countUsers";
import { deleteUserController } from "../modules/acoount/useCases/deleteUser";

const userRouter = Router()

userRouter.post("/", (request, response) => {
    createUserController.handle(request, response)
})
userRouter.delete("/:id", (request, response) => {
    deleteUserController.handle(request, response)
})
userRouter.get("/findAll", (request, response) => {
    listUsersController.handle(request, response)
})
userRouter.get("/countAll", (request, response) => {
    countUsersController.handle(request, response)
})
userRouter.post("/auth", (request, response) => {
    authenticateUserController.handle(request, response)
})

export {
    userRouter
}