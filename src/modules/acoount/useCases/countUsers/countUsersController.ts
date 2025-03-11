import { Request, Response } from "express";
import { CountUsersUseCase } from "./CountUsersUseCase";


export class CountUsersController {
    constructor(private countUsersUseCase: CountUsersUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {

        const users = await this.countUsersUseCase.execute()

        return response.json(users)
    }
}