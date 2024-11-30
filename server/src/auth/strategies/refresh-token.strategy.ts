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
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.REFRESH_TOKEN,
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: any) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new GraphQLError('Authorization header is invalid or missing', {
        extensions: { code: 'UNAUTHENTICATED' },
      });
    }
    const refreshToken = authHeader.split(' ')[1];
    if (!refreshToken) {
      throw new GraphQLError('Refresh token is missing', {
        extensions: { code: 'UNAUTHENTICATED' },
      });
    }
    return { ...payload, refreshToken };
  }
}
