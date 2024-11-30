import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field()
  accessToken: string;
  @Field()
  refreshToken: string;
}
