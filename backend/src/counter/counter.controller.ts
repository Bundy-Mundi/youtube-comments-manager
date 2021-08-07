import { Controller, Get, Query } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';

@Controller('counter')
export class CounterController {
    constructor(private readonly redis: RedisService){}

    @Get()
    async getCount(@Query("key") key){
        return { count: await this.redis.get(key)};
    }
    @Get("inc")
    async incCount(@Query("key") key){
        const count = parseInt(await this.redis.get(key));
        await this.redis.set(key, count + 1);
        return {count: await this.redis.get(key)}
    }
    @Get("dec")
    async decCount(@Query("key") key){
        const count = parseInt(await this.redis.get(key));
        await this.redis.set(key, count - 1);
        return {count: await this.redis.get(key)}
    }
    @Get("del")
    async delCount(@Query("key") key){
        const success = await this.redis.del(key);
        return {success:(success === 1)}
    }
}
