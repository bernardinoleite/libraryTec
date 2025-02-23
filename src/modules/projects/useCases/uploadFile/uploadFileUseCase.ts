import { Express } from "express";
import { IProjectsRepository } from "../../repositories/IProjectsRepository";




export class UploadFileUseCase {


    constructor() {

    }


    async execute({ url }): Promise<any> {

        return { url: `http://localhost:2908/files/${url}` }

    }

}