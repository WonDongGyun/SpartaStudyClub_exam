import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { RegisterService } from './register.service';
import { UserDto } from '../dto/user.dto';
import { InputUser } from '../input_graphql/user.input';

// register 리졸버 등록
@Resolver('register')
export class RegisterResolver {
    // 서비스 생성자
    constructor(private readonly registerService: RegisterService) {}

    // graphQl에서 Query는 Get같은 개념이다.
    @Query(() => [UserDto])
    async getUser() {
        return await this.registerService.getUser();
    }

    // graphQl에서 Mutation은 Post같은 개념이다.
    // 입력받은 값을 InputUser 형의 data라는 변수로 받는다.
    @Mutation(() => UserDto)
    async createProduct(@Args('data') data: InputUser) {
        return await this.registerService.createUser(data);
    }
}
