import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  password: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  displayName?: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  fullName?: string;

  @Field({ nullable: true })
  secondaryEmail?: string;

  @Field({ nullable: true })
  phoneNumber?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  state?: string;

  @Field(() => Int, { nullable: true })
  zip?: number;

  @Field({ nullable: true, defaultValue: false })
  verifiedEmail?: boolean;

  @Field({ nullable: true, defaultValue: false })
  verifiedPhoneNumber?: boolean;
}
