import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiRouterModule } from './api.router';
//import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiRouterModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted:true,
      transform: true
    }))
  await app.listen(3000);
}
bootstrap();
