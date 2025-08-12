import { Redis } from '@upstash/redis'
import {Ratelimit} from "@upstash/ratelimit"

import dotenv from 'dotenv'

dotenv.config()

//allow 10 requests per 20 seconds
export const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.fixedWindow(10, "20 s"),
  });

