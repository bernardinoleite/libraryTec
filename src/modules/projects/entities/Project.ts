import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { randomUUID } from "crypto"

@Entity("projects")
export class Project {

    @PrimaryColumn()
    id?: string
    @Column()
    subject: string
    @Column()
    description: string
    @Column()
    members: string
    @Column()
    tutor: string
    @Column()
    date_defense: string
    @Column()
    grade_defense: string
    @Column()
    category: string
    @Column()
    file_path: string
    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) this.id = randomUUID()
    }
}