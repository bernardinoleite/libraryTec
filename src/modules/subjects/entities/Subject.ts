import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { randomUUID } from "crypto"
@Entity('subjects')
export class Subject {
    @PrimaryColumn()
    id?: string;

    @Column()
    creator: string;

    @Column()
    subject: string;

    @Column()
    description: string;

    @Column()
    objective: string;

    @Column({ nullable: true })
    reference?: string;

    @Column()
    phone_number: string;
    @Column()
    category: string;

    @CreateDateColumn()
    created_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = randomUUID()
        }
    }
}