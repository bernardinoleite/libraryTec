import { Request, Response } from "express";
import { DeleteSubjectUseCase } from "./deleteSubjectUseCase";


export class DeleteSubjectController {

    constructor(private readonly deleteSubjectUseCase: DeleteSubjectUseCase) {

    }


    async handle(request: Request, response: Response): Promise<Response> {

        const { subjectId } = request.params
        try {

            await this.deleteSubjectUseCase.execute(subjectId)
            return response.status(204).send()

        } catch (error) {

            return response.status(error.statusCode || 500).json({
                message: error.message || "Internal server error"
            })
        }



    }

}