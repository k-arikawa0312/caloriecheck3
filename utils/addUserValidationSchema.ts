import { z } from 'zod';

export const addUserValidationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(1),
    age: z.number().min(0),
    weight: z.number().min(0),
    height: z.number().min(0),
})