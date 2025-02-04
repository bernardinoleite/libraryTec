import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";


export interface IUserRepository {
    create({ name, email, password }: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<User>
    findById(Id: string): Promise<User>

}