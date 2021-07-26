import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './auth.google';
import { YouTubeStrategy } from './auth.youtube';

@Module({
    imports:[PassportModule],
    providers:[YouTubeStrategy],
    controllers:[AuthController]
})
export class AuthModule {}
