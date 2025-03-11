import { Request, Response } from "express";
import { ListUsersUseCase } from "./listUsersUseCase";


export class ListUsersController {
    constructor(private listUsersUseCase: ListUsersUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {

        const users = await this.listUsersUseCase.execute()

        return response.json(users)
    }
}