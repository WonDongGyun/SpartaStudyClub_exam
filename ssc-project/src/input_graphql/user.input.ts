import { InputType, Field } from '@nestjs/graphql';

// graphQl 입력 타입으로 사용할 오브젝트 생성하고 타입을 지정
@InputType()
export class InputUser {
    @Field()
    readonly email!: string;
    @Field()
    readonly nickName!: string;
    @Field()
    readonly password!: string;
}
