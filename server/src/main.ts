import { GqlAuthGuard } from './auth/guards/auth.guard';
import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: ['http://192.168.100.19:5173'],
  });
  app.use(cookieParser());
  const reflector = new Reflector();
  app.useGlobalGuards(new GqlAuthGuard(reflector));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.PORT ?? 1337);
}
bootstrap();
