import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { getCommentThreadsUrl } from './comments.utils';
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
    getCommentsOfVideo(id:string, pages?:number){
        let url:string = getCommentThreadsUrl(id, "relevance", process.env.APIKEY);
        if(!pages) return this.httpService.get(url).pipe(map(res => res.data));
        
        for (let index = 1; index <= pages; index++) {
            const res = this.httpService.get(url).pipe(map(res => res.data));
            res.pipe(map(res => console.log(res.nextPageToken)))
        }
        
    }
    getMyCommentsOfVideo(url:string){
        //return this.httpService.get(url)
    }
}
