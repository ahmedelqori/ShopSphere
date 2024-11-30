import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './model/user.model';

@Resolver(() => User)
export class UserResolver {
  /**
   * @constructor
   * @param {UserService} userService
   */
  constructor(private readonly userService: UserService) {}

  /**
   * Get Users From data base
   *
   * @async
   * @returns {Boolean}
   */
  @Query(() => Boolean)
  async getUser() {
    return true;
  }
}
