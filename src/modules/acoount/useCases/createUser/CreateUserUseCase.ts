import { hash } from "bcrypt";
import { AppError } from "../../../../shared/error/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";



export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {

    }

    async execute({ name, email, password }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.userRepository.findByEmail(email)

        if (userAlreadyExists) {
            throw new AppError("User already exists")
        }

        const passwordHash = await hash(password, 8)

        await this.userRepository.create({ name, email, password: passwordHash })

    }
}