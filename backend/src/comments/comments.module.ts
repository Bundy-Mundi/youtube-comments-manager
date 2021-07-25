import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CommentController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
    imports:[HttpModule],
    controllers:[CommentController],
    providers:[CommentsService],
    exports:[]
})
export class CommentsModule {}
