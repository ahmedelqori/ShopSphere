import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { GraphQLError } from 'graphql';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Auth } from './model/auth.model';
@Injectable()
export class AuthService {
  /**
   * Creates an instance of AuthService.
   *
   * @constructor
   * @param {UserService} userService
   */
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  /**
   * @description Create new user with email and hashedpassword comming from authservice
   *
   * @async
   * @param {RegisterDto} userInfo
   * @returns {*}
   */
  async register(userInfo: RegisterDto): Promise<Auth> {
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
      const accessToken: string = await this.createAccessToken(userInfo.email);
      const refreshToken: string = await this.createRefreshToken(
        userInfo.email,
      );
      await this.userService.createUser({
        email: userInfo.email,
        password: hashedPassword,
      });

      await this.userService.findUserAndUpdate(
        { email: userInfo.email },
        { refreshToken },
      );
      return { accessToken, refreshToken };
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
  async login(userInfo: LoginDto): Promise<Auth> {
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
      const accessToken: string = await this.createAccessToken(userInfo.email);
      const refreshToken: string = await this.createRefreshToken(
        userInfo.email,
      );
      await this.userService.findUserAndUpdate(
        { email: findUser.email },
        { refreshToken },
      );
      const token: Auth = { accessToken, refreshToken };
      return token;
    } catch (err) {
      throw new GraphQLError(err.message, {
        extensions: { code: err?.extensions?.code || 500 },
      });
    }
  }

  async refreshTokens(email: string, rfToken: string): Promise<Auth> {
    try {
      const user = await this.userService.findUserByEmail(email);
      if (!user)
        throw new GraphQLError('Access Denied', {
          extensions: { code: 403 },
        });
      console.log(rfToken, user.refreshToken);
      const compare = rfToken === user.refreshToken;
      if (!compare)
        throw new GraphQLError('Access Denied', {
          extensions: { code: 403 },
        });
      const accessToken: string = await this.createAccessToken(user.email);
      const refreshToken: string = await this.createRefreshToken(user.email);
      await this.userService.findUserAndUpdate(
        { email: user.email },
        { refreshToken },
      );
      return { accessToken, refreshToken };
    } catch (err) {
      throw err;
    }
  }

  async logout(email: string) {
    return await this.userService.findUserAndDeleteRefreshToken(email);
  }

  async createAccessToken(email: string) {
    return this.jwtService.sign(
      { email },
      { secret: process.env.ACCESS_TOKEN, expiresIn: '15m' },
    );
  }

  async createRefreshToken(email: string) {
    return this.jwtService.sign(
      { email },
      {
        secret: process.env.REFRESH_TOKEN,
        expiresIn: '7d',
      },
    );
  }
}
