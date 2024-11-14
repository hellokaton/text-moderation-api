export type Bindings = {
    OPENAI_BASE_URL: string;
    OPENAI_API_KEY: string;
    OPENAI_MODEL: string;
    RATE_LIMITER: RateLimit;
}

export type Env = {
    Variables: {
        rateLimit: boolean;
    };
    Bindings: Bindings;
};
