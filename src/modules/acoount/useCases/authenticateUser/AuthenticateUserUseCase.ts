import { AppError } from "../../../../shared/error/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

interface IRequest {
    email: string
    password: string

}

interface IResponse {
    user: {
        email: string,
        name: string,
        role: boolean
    }
    token: string
}

export class AuthenticateUserUseCase { //LOGIN DO USUARIO, REGRA DE NEGOCIO PARA AZER LOGIN DO USER
    constructor(private userRepository: IUserRepository) {
    }

    // 1 estar cadastrado
    //2 receber o email
    // 3 receber a senha



    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new AppError("Email or password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new AppError("Email or password incorrect")
        }

        const token = sign({}, process.env.JWT_SECRET, { expiresIn: "1d", subject: user.id })

        const tokenResponse: IResponse = {
            user: {
                email: user.email,
                name: user.name,
                role: user.is_admin
            },
            token
        }

        return tokenResponse

    }

}
