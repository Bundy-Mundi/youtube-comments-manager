import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-youtube-v3";
require('dotenv').config();

@Injectable()
export class YouTubeStrategy extends PassportStrategy(Strategy, 'youtube'){
    constructor(private jwtService: JwtService ) {
        super({
            clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
            clientSecret: process.env.GOOGLE_OAUTH_SECRET,
            callbackURL: (process.env.NODE_ENV === 'development') ? "http://localhost:4000/api/v1/auth/youtube/redirect" : "/api/v1/auth/youtube/redirect",
            scope:['https://www.googleapis.com/auth/youtube.force-ssl']
        });
      }
    async validate (access_token:string, refresh_token:string, profile:any, done): Promise<any> {
        const { id, displayName:username } = profile;
        const payload = {
            access_token,
            refresh_token,
            id,
            username
        }
        done(null, {token:this.jwtService.sign(payload)});
    } 
}