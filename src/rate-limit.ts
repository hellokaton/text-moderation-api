import {Context, Next} from "hono";
import {Env} from "@/env";
import {cloudflareRateLimiter} from "@hono-rate-limiter/cloudflare";

export const rateLimit = async (c: Context, next: Next) =>
    cloudflareRateLimiter<Env>({
        rateLimitBinding: c.env.RATE_LIMITER,
        keyGenerator: (c) => c.req.header("cf-connecting-ip") ?? "",  // 使用 Cloudflare 的 IP 头作为标识
        handler: (c, _) => {
            return c.json({msg: "Too many requests, please try again later.", code: 429})
        }
    })(c, next);

