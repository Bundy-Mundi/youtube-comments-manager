import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [CommentsModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
