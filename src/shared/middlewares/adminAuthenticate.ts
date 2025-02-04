import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/AppError";



export async function adminAuthenticate(request: Request, response: Response, next: NextFunction) {

    const { role } = request.user

    if (!role) {
        throw new AppError("Unautorized", 401)
    }

    next()

} 