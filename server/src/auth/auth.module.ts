import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from 'src/user/user.module';
import { AccessTokenStragtey } from './strategies/access-token.strategy';
import { RefreshTokenStragtey } from './strategies/refresh-token.strategy';

@Module({
  imports: [UserModule],
  providers: [AuthResolver, AuthService,AccessTokenStragtey,RefreshTokenStragtey],
})
export class AuthModule {}
