import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
    constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

    async get(key): Promise<any> {
        const count = await this.cache.get(key);
        if(!count) await this.cache.set(key, 0);
        return count;
    }

    async set(key, value) {
        await this.cache.set(key, value);
    }

    async reset() {
        await this.cache.reset();
    }

    async del(key) {
        return await this.cache.del(key);
    }
}