import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSubjects1738272631578 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "subjects",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "creator",
                    type: "varchar"
                },
                {
                    name: "subject",
                    type: "varchar"
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "objective",
                    type: "varchar"
                },
                {
                    name: "reference",
                    type: "varchar"
                },
                {
                    name: "phone_number",
                    type: "varchar",

                },
                {
                    name: "category",
                    type: "varchar",

                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("subjects");
    }

}