import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('userToday')
export class UserToday {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    studyTime: Date;

    @Column({ type: 'int' })
    studySetTime: number;

    @Column({ type: 'float' })
    questRate: number;

    @ManyToOne(() => User, (user) => user.userToday)
    user: User;
}
