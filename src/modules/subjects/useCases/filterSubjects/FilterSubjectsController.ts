import { Request, Response } from "express";
import { FilterSubjectsUseCase } from "./FilterSubjectsUseCase";



export class FilterSubjectsController {

    constructor(private filterSubjectsUseCase: FilterSubjectsUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { category, creator, created_at } = request.query
        try {
            const categoryLower = String(category).toLowerCase()
            const subjects = await this.filterSubjectsUseCase.execute({ category: categoryLower, creator, created_at })
            return response.status(200).json(subjects)
        } catch (error) {
            return response.status(401).json(error)

        }
    }

}