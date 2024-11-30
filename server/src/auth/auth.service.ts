import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { GraphQLError } from 'graphql';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(userInfo: RegisterDto) {
    try {
      if (userInfo.password !== userInfo.confirmPassword)
        throw new GraphQLError('Password does not match', {
          extensions: { code: 400 },
        });
      const findUser = await this.userService.findUserByEmail(userInfo.email);
      if (findUser) {
        throw new GraphQLError('This email already used', {
          extensions: { code: 409 },
        });
      }
      const hashedPassword = await bcrypt.hash(userInfo.password, 10);
      await this.userService.createUser({
        email: userInfo.email,
        password: hashedPassword,
      });
    } catch (err) {
      throw new GraphQLError(err.message, {
        extensions: { code: err?.extensions?.code },
      });
    }
  }

  async login(userInfo: LoginDto) {
    try {
      const findUser = await this.userService.findUserByEmail(userInfo.email);
      if (!findUser) {
        throw new GraphQLError('Email not found', {
          extensions: { code: 401 },
        });
      }

      const passwordMatches = await bcrypt.compare(userInfo.password, findUser.password);
      if (!passwordMatches) {
        throw new GraphQLError("Password doesn't match", {
          extensions: { code: 401 },
        });
      }
      return { message: 'Login successful', user: findUser };
    } catch (err) {
      throw new GraphQLError(err.message, {
        extensions: { code: err?.extensions?.code || 500 },
      });
    }
  }
}
