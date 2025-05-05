import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";


export interface IUserRepository {
    create({ name, email, password, is_admin }: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<User>
    findById(Id: string): Promise<User>
    findAll(): Promise<User[]>
    countUsers(): Promise<number>
    delete(id: string): Promise<void>
}