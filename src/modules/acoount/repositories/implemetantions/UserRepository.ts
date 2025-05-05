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
    async delete(id: string): Promise<void> {
        await this.repository.delete({ id })
    }
    async countUsers(): Promise<number> {
        const usersCounted = await this.repository.count()
        return usersCounted
    }
    async findAll(): Promise<User[]> {
        const users = await this.repository.find()

        return users
    }

    async create({ name, email, password, is_admin = false }: ICreateUserDTO): Promise<void> {
        console.log({ name, email, password, is_admin });
        is_admin = Boolean(is_admin)
        const user = this.repository.create({
            name,
            email,
            password,
            is_admin
        });

        await this.repository.save(user);
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