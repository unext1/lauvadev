import 'dotenv/config';
import z from 'zod';

const environmentSchema = z.object({
  RESEND_API_KEY: z.string().min(1).trim()
});

export const env = environmentSchema.parse(process.env);
