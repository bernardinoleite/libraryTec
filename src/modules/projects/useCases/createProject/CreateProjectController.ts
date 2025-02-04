import { Request, Response } from "express";
import { CreateProjectUseCase } from "./CreateProjectUseCase";



export class CreateProjectController {


    constructor(private createProjectUseCase: CreateProjectUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { category, date_defense, description, file_path, grade_defense, members, subject, tutor } = request.body
        try {

            const project = await this.createProjectUseCase.execute({ category, date_defense, description, file_path, grade_defense, members, subject, tutor })

            return response.status(201).json(project)
        } catch (error) {

            return response.status(401).json(error)
        }

    }
}