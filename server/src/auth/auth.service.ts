import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { GraphQLError } from 'graphql';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  /**
   * Creates an instance of AuthService.
   *
   * @constructor
   * @param {UserService} userService
   */
  constructor(private readonly userService: UserService) {}

  /**
   * @description Create new user with email and hashedpassword comming from authservice
   *
   * @async
   * @param {RegisterDto} userInfo
   * @returns {*}
   */
  async register(userInfo: RegisterDto) {
    try {
      if (!userInfo.email || !userInfo.password || !userInfo.confirmPassword)
        throw new GraphQLError('Email and password are required.', {
          extensions: { code: 400 },
        });
      if (userInfo.password !== userInfo.confirmPassword)
        throw new GraphQLError('Password and confirm password do not match.', {
          extensions: { code: 400 },
        });
      const findUser = await this.userService.findUserByEmail(userInfo.email);
      if (findUser) {
        throw new GraphQLError('This email is already registered.', {
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

  /**
   * @description Login if the user exist and password match current password of the user
   *
   * @async
   * @param {LoginDto} userInfo
   * @returns {*}
   */
  async login(userInfo: LoginDto) {
    try {
      if (!userInfo.email || !userInfo.password)
        throw new GraphQLError('Email and password are required.', {
          extensions: { code: 400 },
        });
      const findUser = await this.userService.findUserByEmail(userInfo.email);
      if (!findUser) {
        throw new GraphQLError(
          'We cannot find an account with that email address',
          {
            extensions: { code: 401 },
          },
        );
      }

      const passwordMatches = await bcrypt.compare(
        userInfo.password,
        findUser.password,
      );
      if (!passwordMatches) {
        throw new GraphQLError('Invalid email or password.', {
          extensions: { code: 401 },
        });
      }
    } catch (err) {
      throw new GraphQLError(err.message, {
        extensions: { code: err?.extensions?.code || 500 },
      });
    }
  }
}
