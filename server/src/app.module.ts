import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      formatError: (error: GraphQLError): GraphQLFormattedError => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message:
            (error?.extensions?.originalError as { message?: string })
              ?.message || error.message,
          extensions: {
            code:
              (error?.extensions?.originalError as { statusCode?: number })
                ?.statusCode || error?.extensions?.code,
          },
        };
        return graphQLFormattedError;
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '2032',
      database: 'meedivo',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
