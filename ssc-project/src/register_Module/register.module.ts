import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { RegisterService } from './register.service';
import { RegisterResolver } from './register.resolver';

// 회원가입 모듈
// graphQl과 typeOrm을 사용하면 controller는 필요없다.
// forFeature를 사용하여 User Entity의 typeOrm을 등록한다.
// 서비스 = typeOrm 쿼리가 존재
// 리졸버 = graphQl이 원하는 데이터를 가져오는 구체적인 과정이 존재
// 일반적으로 DB 데이터를 가져오기 위해서는 sql을 사용하였지만, graphQl은 리졸버가 필수이다.
@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [RegisterService, RegisterResolver],
})
export class RegisterModuleModule {}
