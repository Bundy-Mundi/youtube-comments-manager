import * as redisStore from 'cache-manager-redis-store';
import { Module, CacheModule } from '@nestjs/common';
import { CounterController } from './counter.controller';

@Module({
  imports:[CacheModule.register({
    store: redisStore,
    host: 'localhost',
    port: 6379,
  })],
  controllers: [CounterController]
})
export class CounterModule {}
