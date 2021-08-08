import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { RedisModule } from 'src/redis/redis.module';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './auth.jwt.strategy';
import { YouTubeStrategy } from './auth.youtube';
require("dotenv").config();

@Module({
    imports:
    [
      PassportModule,
      RedisModule,
      JwtModule.register({
        secret: process.env.JWT_SECRET
      })
    ],
    providers:[YouTubeStrategy, JwtStrategy],
    controllers:[AuthController]
})
export class AuthModule {}
