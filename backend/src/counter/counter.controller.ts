import { CACHE_MANAGER, Controller, Get, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Controller('counter')
export class CounterController {
    constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache){}

    @Get()
    async getCount(){
        const count = await this.cacheManager.get('count');
        if(!count) this.cacheManager.set('count', 0);
        return {count};
    }
    @Get("inc")
    async incCount(){
        const count:number = parseInt(await this.cacheManager.get('count'));
        if(!count) return {error: "Cannot get count"}
        this.cacheManager.set("count", count + 1);
        return {error:null, count};
    }
    @Get("dec")
    async decCount(){
        const count:number = parseInt(await this.cacheManager.get('count'));
        if(!count) return {error: "Cannot get count"}
        this.cacheManager.set("count", (count - 1) < 0 ? (count - 1) : 0);
        return {error:null, count};
    }
}
