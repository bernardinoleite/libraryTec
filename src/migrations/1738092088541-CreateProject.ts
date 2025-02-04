import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProject1738092088541 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: "projects",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
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
                    name: "members",
                    type: "varchar"
                },
                {
                    name: "tutor",
                    type: "varchar"
                },
                {
                    name: "date_defense",
                    type: "varchar"
                },
                {
                    name: "grade_defense",
                    type: "varchar"
                },
                {
                    name: "category",
                    type: "varchar"
                },
                {
                    name: "file_path",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("projects")
    }

}
