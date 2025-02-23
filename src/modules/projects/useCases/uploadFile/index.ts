
import { UploadFileController } from "./uploadFileController";

import { UploadFileUseCase } from "./uploadFileUseCase";


const uploadFileUseCase = new UploadFileUseCase()
const uploadFileController = new UploadFileController(uploadFileUseCase)


export {
    uploadFileController
}