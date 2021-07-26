import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

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

    @UseGuards(AuthGuard('youtube'))
    @Get("/youtube")
    authYouTube(@Req() req){
        console.log(req);
    }

    @UseGuards(AuthGuard('youtube'))
    @Get("/youtube/redirect")
    authYouTubeRedirect(@Req() req){
        return req.user;
        /* Now POST https://www.googleapis.com/youtube/v3/comments?part=snippet */
        /* {
            "snippet":{
                "textOriginal":"Test",
                "parentId":"UgwDjGR0maoSo_gsXQh4AaABAg"
            }
        } */
    }
}
