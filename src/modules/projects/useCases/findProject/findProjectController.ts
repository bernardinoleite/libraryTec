import { Request, Response } from "express";
import { FindProjectUseCase } from "./findProjectUseCase";



export class FindProjectController {
    constructor(private findProjectUseCase: FindProjectUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const id = request.params.id
        const project = await this.findProjectUseCase.execute(id)
        return response.status(200).json(project)
    }
}