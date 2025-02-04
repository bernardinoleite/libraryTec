import { Request, Response } from "express";
import { ListSubjectsUseCase } from "./ListSubjectsUseCase";



export class ListSubjectsController {
    constructor(private listSubjectsUseCase: ListSubjectsUseCase) { }


    async handle(request: Request, response: Response): Promise<Response> {

        const subjects = await this.listSubjectsUseCase.execute()
        return response.status(200).json(subjects)
    }
}