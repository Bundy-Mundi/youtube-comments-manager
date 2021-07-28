import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from '../comments/comments.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [CommentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
