import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { nullable: true })
  async getUser() {
    return await this.userService.findAll();
  }
  @Mutation(() => User, { nullable: true })
  createUser(@Args('email') email: string, @Args('password') password: string) {
    this.userService.create({ email, password });
  }
}
