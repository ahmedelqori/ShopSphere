import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GqlAuthGuard } from './auth/guards/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const reflector = new Reflector();
  app.useGlobalGuards(new GqlAuthGuard(reflector));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
