import { HttpService } from '@nestjs/axios';
import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { map } from 'rxjs';
require("dotenv").config();


@Injectable()
export class CommentsService {
    constructor(private readonly httpService:HttpService){}
    getComment(url:string){
        return this.httpService.get(url).pipe(map(res => res.data));
    }
    getReplies(url:string){
        return this.httpService.get(url).pipe(map(res => res.data));
    }
    getCommentsOfVideo(url:string){
        return this.httpService.get(url).pipe(map(res => res.data));
    }
    getMyCommentsOfVideo(url:string){
        //return this.httpService.get(url)
    }
}
