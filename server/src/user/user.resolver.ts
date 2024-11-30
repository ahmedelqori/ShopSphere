import { Resolver, Query} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './model/user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { nullable: true })
  async getUser() {
    return await this.userService.findAll();
  }
  // @Mutation(() => User, { nullable: true })
  // async createUser(@Args('user') user: CreateUser) {
  //   try {
  //     return await this.userService.createUser(user);
  //   } catch (err) {
  //     throw err;
  //   }
  // }
}
