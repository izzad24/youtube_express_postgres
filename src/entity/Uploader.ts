import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("uploaders")
export class Uploader {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
}
