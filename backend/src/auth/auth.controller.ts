import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { JwtGuard } from './guards/guards.jwt';
import { YouTubeGuard } from './guards/guards.youtube';
require('dotenv').config();

@Controller('auth')
export class AuthController {

    /*
    @UseGuards(AuthGuard('google'))
    @Get('/google')
    auth(@Req() req){}

    @UseGuards(AuthGuard('google'))
    @Get('/google/redirect')
    redirect(@Req() req){
        return req.user
    } */

    @Get()
    alive(){
        return "Auth API is alive";
    }

    @UseGuards(YouTubeGuard)
    @Get("/youtube")
    authYouTube(@Req() req){}

    @UseGuards(YouTubeGuard)
    @Get("/youtube/redirect")
    authYouTubeRedirect(@Req() req, @Res() res:Response){
        let url = `?token=${req.user.token}`;
        url = (process.env.NODE_ENV === 'development') ? "http://localhost:3000" + url : url
        return {token: req.user.token}
    }

    @UseGuards(JwtGuard)
    @Get("/jwt")
    verifyJwt(@Req() req){
        return req.user;
    }
}
