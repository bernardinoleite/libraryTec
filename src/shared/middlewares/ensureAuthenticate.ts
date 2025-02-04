import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../../modules/acoount/repositories/implemetantions/UserRepository";
import { AppError } from "../error/AppError";
export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {

    const token = request.headers.authorization.split(" ")[1]

    if (!token) {
        throw new AppError("Token missing")
    }

    try {
        const { sub: user_id } = verify(token, process.env.JWT_SECRET)

        const userRepository = new UserRepository()
        const userAlreadyExists = await userRepository.findById(String(user_id))

        if (!userAlreadyExists) {
            throw new AppError("User does not exists")
        }

        request.user = { id: String(userAlreadyExists.id), role: Boolean(userAlreadyExists.is_admin) }

        next()
    }
    catch (error) {
        throw new AppError("Token invalid", 401)
    }
}