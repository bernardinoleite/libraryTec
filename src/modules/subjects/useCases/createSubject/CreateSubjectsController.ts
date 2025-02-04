import { Request, Response } from "express";
import { CreateSubjectsUseCase } from "./CreateSubjectUseCase";


export class CreateSubjectsController {

    constructor(private createSubjectsUseCase: CreateSubjectsUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {

        const { creator, description, objective, phone_number, subject, reference, category } = request.body


        const subjectCreated = await this.createSubjectsUseCase.execute({ category, creator, description, objective, phone_number, subject, reference })

        return response.status(200).json(subjectCreated)

    }

}

