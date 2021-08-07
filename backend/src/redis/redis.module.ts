import * as redisStore from 'cache-manager-redis-store';
import { CacheModule, Module } from '@nestjs/common';
import { RedisService } from './redis.service';

/*
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache){}
    async use(req: Request, res: Response, next: NextFunction) {
        const count = await this.cacheManager.get('count');
        console.log('Count: ', count);
        next();
    }
}*/

@Module({
    imports:[
        CacheModule.registerAsync({
            useFactory:()=>({
            store: redisStore,
            host: process.env.REDIS_URL ?? "localhost",
            ttl: 60*60*24,
            port: 6379,
          })})
    ],
    providers: [RedisService],
    exports: [RedisService]
})
export class RedisModule {}
