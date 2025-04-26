import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import { randomUUID } from "crypto";

@Entity("users")
export class User {

    @PrimaryColumn()
    id?: string

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ default: true })
    is_admin?: boolean

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) this.id = randomUUID()
    }
}