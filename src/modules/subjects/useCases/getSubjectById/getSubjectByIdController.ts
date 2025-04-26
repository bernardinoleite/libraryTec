import { Request, Response } from "express";
import { GetSubjectByIdUseCase } from "./getSubjectByIdUseCase";


export class GetSubjectByIdController {

    constructor(private readonly getSubjectByIdUseCase: GetSubjectByIdUseCase) {

    }


    async handle(request: Request, response: Response): Promise<Response> {

        const { subjectId } = request.params
        try {

            const subject = await this.getSubjectByIdUseCase.execute(subjectId)
            return response.status(200).json(subject)

        } catch (error) {

            return response.status(error.statusCode || 500).json({
                message: error.message || "Internal server error"
            })
        }



    }

}