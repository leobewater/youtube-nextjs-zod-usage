import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  THIRD_PARTY_API_KEY: z.string().min(1),
});

// throw error with pasrse()
export const parsedEnv = envSchema.parse(process.env);
