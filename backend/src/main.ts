import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiRouterModule } from './api.router';
import * as cookieParser from 'cookie-parser';
require("dotenv").config();
//import { AppModule } from './app/app.module';
const PORT = process.env.NODE_ENV === 'development' ? 80 : 3000;
async function bootstrap() {
  const app = await NestFactory.create(ApiRouterModule);
  app.enableCors();
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted:true,
      transform: true
    }))
  await app.listen(PORT);
}
bootstrap();
