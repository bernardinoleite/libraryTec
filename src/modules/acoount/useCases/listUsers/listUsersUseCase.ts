import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/implemetantions/UserRepository";
import { IUserRepository } from "../../repositories/IUserRepository";


export class ListUsersUseCase {
    constructor(private UserRepository: IUserRepository) {

    }

    async execute(): Promise<User[]> {
        return await this.UserRepository.findAll()
    }
}