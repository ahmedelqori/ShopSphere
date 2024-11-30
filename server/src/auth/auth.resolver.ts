import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String, { nullable: true })
  async register(@Args('user') user: RegisterDto) {
    try {
      await this.authService.register(user);
      return 'Created Successfully';
    }
     catch (err) {
      throw err;
    }
  }

  @Mutation(() => String, { nullable: true })
  async login(@Args('user') user: LoginDto) {
    try {
      await this.authService.login(user);
      return 'Loggin successfully';
    } catch (error) {
      throw error;
    }
  }
}
