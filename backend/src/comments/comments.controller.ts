import { BadRequestException, Controller, Get, Optional, Param, ParseIntPipe, Query, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/guards.jwt';
import { CommentsService } from './comments.service';
import {  getCommentUrl, getCommentWithRepliesUrl, getMyCommentThreadsUrl } from './comments.utils';

@Controller('comments')
export class CommentController {
    constructor(private readonly commentService: CommentsService){}

    @Get()
    commentHome(){
        return "Comment API Alive";
    }

    @Get(":id")
    getComment(@Param('id') id:string){
        const url = getCommentUrl(id, process.env.APIKEY);
        return this.commentService.getComment(url);
    }

    @Get(":id/replies")
    getReplies(@Param('id') id:string){
        const url = getCommentWithRepliesUrl(id, process.env.APIKEY);
        return this.commentService.getReplies(url);
    }

    @Get('of-video/:id')
    getCommentsOfVideo
    (@Param('id') id:string){
        return this.commentService.getCommentsOfVideo(id);
    }

    @UseGuards(JwtGuard)
    @Get('of-video/:id/mine')
    getMyCommentsOfVideo(@Param('id') id:string, @Req() req){
        const {user:{access_token, refresh_token}} = req;
        const url = getMyCommentThreadsUrl(id, "relevance");
        //return this.commentService.getMyCommentsOfVideo(url);
    }
}
