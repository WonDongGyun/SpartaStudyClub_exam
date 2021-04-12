import { ObjectType, Field } from '@nestjs/graphql';

// 리졸버 단에서 request 들어오는 데이터에 대한 타입을 지정하고 유효성 검사를 실시한다.
// 원래는 controller 단에서 들어오는 데이터에 대한 검증을 실시한다.
@ObjectType()
export class UserDto {
    @Field()
    readonly id?: number;
    @Field()
    readonly email!: string;
    @Field()
    readonly nickName!: string;
    @Field()
    readonly password!: string;
}
