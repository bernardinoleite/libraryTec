import { Request, Response } from "express";
import { DeleteUserUseCase } from "./deleteUserUseCase";


export class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        await this.deleteUserUseCase.execute(id)
        return response.send()
    }

}