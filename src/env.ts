export type Bindings = {
    OPENROUTER_API_KEY: string;
    RATE_LIMITER: RateLimit;
}

export type Env = {
    Variables: {
        rateLimit: boolean;
    };
    Bindings: Bindings;
};
