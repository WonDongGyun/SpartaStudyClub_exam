import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserToday } from './userToday.entity';

// typeOrm Entity 생성
@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    email: string;

    @Column({
        type: 'varchar',
    })
    nickName: string;

    @Column({
        type: 'varchar',
    })
    password: string;

    @OneToMany(() => UserToday, (userToday) => userToday.user, {
        onDelete: 'CASCADE',
    })
    userToday: UserToday[];
}
