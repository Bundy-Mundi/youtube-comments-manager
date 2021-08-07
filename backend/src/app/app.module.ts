import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from '../comments/comments.module';
import { AuthModule } from '../auth/auth.module';
import { CounterModule } from 'src/counter/counter.module';

@Module({
  imports: [CommentsModule, AuthModule, CounterModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
