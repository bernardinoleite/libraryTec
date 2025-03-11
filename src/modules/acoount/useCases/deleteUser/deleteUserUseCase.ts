import { AppError } from "../../../../shared/error/AppError";
import { UserRepository } from "../../repositories/implemetantions/UserRepository";

export class DeleteUserUseCase {
    constructor(private userRepository: UserRepository) {

    }

    async execute(id: string) {
        const user = await this.userRepository.findById(id)
        if (!user) throw new AppError("User does not exists")
        await this.userRepository.delete(id)
    }
}