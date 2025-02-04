import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";



export class CreateUserController {


    constructor(private createUserUseCase: CreateUserUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, password } = request.body

        try {

            await this.createUserUseCase.execute({ name, email, password })

            return response.status(201).json({
                message: "User created with sucess",
                statusCode: 201
            })
        } catch (error) {
            return response.status(error.statusCode).json(error)
        }

    }
}