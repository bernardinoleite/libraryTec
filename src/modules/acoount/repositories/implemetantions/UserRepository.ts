import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";
import { AppDataSource } from "../../../../../ormConfig";
import { Repository } from "typeorm";
import { User } from "../../entities/User";


export class UserRepository implements IUserRepository {
    private repository: Repository<User>
    constructor() {
        this.repository = AppDataSource.getRepository(User)
    }

    async create({ name, email, password }: ICreateUserDTO): Promise<void> {

        const user = this.repository.create({ name, email, password })
        await this.repository.save(user)

    }

    async findByEmail(email: string): Promise<User> {

        const user = await this.repository.findOneBy({ email })
        return user

    }
    async findById(id: string): Promise<User> {

        const user = await this.repository.findOneBy({ id })
        return user

    }
}