import { Module } from '@nestjs/common';
import { RegisterModule } from './register_Module/register.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserToday } from './entity/userToday.entity';
import { GraphQLModule } from '@nestjs/graphql';

// Nest.js 시작
// graphQl 및 typeOrm 사용
@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gpl',
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '1234',
            database: 'myDatabase',
            entities: [User, UserToday], // 작성한 entity 삽입
            synchronize: true, // false가 안전함
        }),
        RegisterModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
