import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";


 @Entity({ name: 'users'})
 export class User {

    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: number;

    @Column({ unique: true})
    username: string;

    @Column()
    password: string;

    @Column()
    createAt: Date;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;


 }