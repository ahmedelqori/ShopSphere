import { Args, Mutation, Resolver, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { Auth } from './model/auth.model';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/auth.guard';
import { GqlRefreshAuthGuard } from './guards/auth-refresh.guard';
import { Public } from './common/public.decorator';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => Auth, { nullable: true })
  async register(@Args('user') user: RegisterDto): Promise<Auth> {
    try {
      return await this.authService.register(user);
    } catch (err) {
      throw err;
    }
  }

  @Public()
  @Mutation(() => Auth, { nullable: true })
  async login(@Args('user') user: LoginDto): Promise<Auth> {
    try {
      return await this.authService.login(user);
    } catch (error) {
      throw error;
    }
  }

  @Mutation(() => Boolean, { nullable: true })
  async logout(@Context() context: any) {
    const req = context.req;
    const user = req.user;
    await this.authService.logout(user.email);
    return true;
  }
  
  @Public()
  @UseGuards(GqlRefreshAuthGuard)
  @Mutation(() => Auth, { nullable: true })
  async refreshToken(@Context() context: any): Promise<Auth> {
    const req = context.req;
    const user = req.user;
    return await this.authService.refreshTokens(user.email, user.refreshToken);
  }
}
