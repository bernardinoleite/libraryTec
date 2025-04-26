import { Response, Request } from "express";
import { DeleteProjectUseCase } from "./deleteProjectUseCase";


export class DeleteProjectController {
    constructor(private readonly deleteProjectUseCase: DeleteProjectUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        try {
            await this.deleteProjectUseCase.execute(id)
            return response.status(204).send()
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message || "internal server error" })
        }


    }

}