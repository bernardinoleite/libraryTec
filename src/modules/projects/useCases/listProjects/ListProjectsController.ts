import { Request, Response } from "express";
import { ListProjectsUseCase } from "./ListProjectsUseCase";




export class ListProjectsController {


    constructor(private listProjectsUseCase: ListProjectsUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {

        const projects = await this.listProjectsUseCase.execute()
        return response.status(200).json(projects)

    }
}