import { UserRepository } from "../../repositories/implemetantions/UserRepository";
import { CountUsersUseCase } from "./CountUsersUseCase";
import { CountUsersController } from "./countUsersController";

const userRepository = new UserRepository()
const countUsersUseCase = new CountUsersUseCase(userRepository)
const countUsersController = new CountUsersController(countUsersUseCase)

export {
    countUsersController
}