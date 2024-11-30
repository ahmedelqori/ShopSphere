import { Args, Mutation, Resolver, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { Auth, AuthAccessToken } from './model/auth.model';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/auth.guard';
import { GqlRefreshAuthGuard } from './guards/auth-refresh.guard';
import { Public } from './common/public.decorator';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => AuthAccessToken, { nullable: true })
  async register(
    @Context() context: any,
    @Args('user') user: RegisterDto,
  ): Promise<AuthAccessToken> {
    try {
      const tokens = await this.authService.register(user);
      await this.authService.storeRefreshTokenInCookies(
        context,
        tokens.refreshToken,
      );
      return { accessToken: tokens.accessToken };
    } catch (err) {
      throw err;
    }
  }

  @Public()
  @Mutation(() => AuthAccessToken, { nullable: true })
  async login(
    @Context() context: any,
    @Args('user') user: LoginDto,
  ): Promise<AuthAccessToken> {
    try {
      const tokens = await this.authService.login(user);
      await this.authService.storeRefreshTokenInCookies(
        context,
        tokens.refreshToken,
      );
      return { accessToken: tokens.accessToken };
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
  @Mutation(() => AuthAccessToken, { nullable: true })
  async refreshToken(@Context() context: any): Promise<AuthAccessToken> {
    const req = context.req;
    const user = req.user;
    const tokens = await this.authService.refreshTokens(
      user.email,
      user.refreshToken,
    );
    this.authService.storeRefreshTokenInCookies(context, tokens.refreshToken);
    return { accessToken: tokens.accessToken };
  }
}
