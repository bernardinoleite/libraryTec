import { Request, Response } from "express";
import { UploadFileUseCase } from "./uploadFileUseCase";




export class UploadFileController {

    constructor(private uploadFileUseCase: UploadFileUseCase) { }


    async handle(request: Request, response: Response): Promise<Response> {
        console.log(request.file.originalname);

        const url = await this.uploadFileUseCase.execute({ url: request.file.filename })
        return response.status(200).json(url)

    }
}