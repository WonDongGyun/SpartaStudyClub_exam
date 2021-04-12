import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { UserDto } from '../dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// 서비스 등록
@Injectable()
export class RegisterService {
    // typeOrm 생성자 등록
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async createUser(data: UserDto) {
        return await this.userRepository.save(data);
    }

    async getUser() {
        return await this.userRepository.find();
    }
}
