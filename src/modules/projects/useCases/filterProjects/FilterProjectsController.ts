import { Request, Response } from "express";
import { FilterProjectsUseCase } from "./FilterProjectsUseCase";



export class FilterProjectsController {
    constructor(private filterProjectsUseCase: FilterProjectsUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { category, date_defense, tutor } = request.query

        try {
            const projects = await this.filterProjectsUseCase.execute({ category, date_defense, tutor })

            return response.status(200).json(projects)
        } catch (error) {
            return response.status(401).json(error)

        }

    }
}