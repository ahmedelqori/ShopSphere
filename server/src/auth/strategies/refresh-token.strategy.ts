import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';

@Injectable()
export class RefreshTokenStragtey extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          return req?.cookies?.refreshToken;
        },
      ]),
      secretOrKey: process.env.REFRESH_TOKEN,
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: any) {
    const cookies = req.cookies;

    const refreshToken = cookies?.refreshToken
    if (!refreshToken) {
      throw new GraphQLError('Refresh token is missing', {
        extensions: { code: 'UNAUTHENTICATED' },
      });
    }
    return { ...payload, refreshToken };
  }
}
