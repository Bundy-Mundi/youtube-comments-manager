import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-youtube-v3";
require('dotenv').config();

@Injectable()
export class YouTubeStrategy extends PassportStrategy(Strategy, 'youtube'){
    constructor() {
        super({
            clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
            clientSecret: process.env.GOOGLE_OAUTH_SECRET,
            callbackURL: "http://localhost:3000/auth/youtube/redirect",
            scope:['https://www.googleapis.com/auth/youtube.force-ssl']
        });
      }
    async validate (access_token, refresh_token, profile, done): Promise<any> {
        const user = {
            access_token,
            profile,
            refresh_token
        }
        done(null, user);
    } 
}