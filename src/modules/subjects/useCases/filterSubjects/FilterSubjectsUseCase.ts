import { ISubjectsRepository } from "../../repositories/ISubjectsRepository";
import { ILike } from "typeorm";

import { Subject } from "../../entities/Subject";



export class FilterSubjectsUseCase {


    constructor(private subjectsRepository: ISubjectsRepository) {

    }


    async execute({ category, creator, created_at }): Promise<Subject[]> {
        let whereClause: any = {}


        if (category !== "undefined" && category !== undefined) {
            whereClause.category = category;
        }
        if (created_at !== "undefined" && created_at !== undefined) {
            whereClause.created_at = ILike(`%${created_at}%`);
        }
        if (creator !== "undefined" && creator !== undefined) {
            whereClause.creator = creator;
        }

        const subjects = this.subjectsRepository.filter(whereClause)

        return subjects
    }
}