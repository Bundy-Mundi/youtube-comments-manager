import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CounterController } from './counter.controller';
import { RedisModule } from 'src/redis/redis.module';

export const COUNTER_SERVICE = "COUNTER_SERVICE";

@Module({
  imports:[
    RedisModule
  ],
  controllers: [CounterController]
})
export class CounterModule {}
