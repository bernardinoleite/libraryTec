import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";


export class CountUsersUseCase {
    constructor(private UserRepository: IUserRepository) {

    }

    async execute(): Promise<number> {
        return await this.UserRepository.countUsers()
    }
}