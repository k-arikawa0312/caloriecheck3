import { z } from 'zod';

export const addUserValidationSchema = z.object({
    email: z.string().email({message:"emailが正しくありません"}).nonempty({message:"emailは必須です"}),
    password: z.string().min(6,{message:"パスワードは6文字以上で入力してください"}),
    name: z.string().min(1),
    age: z.number().min(0),
    weight: z.number().min(0),
    height: z.number().min(0),
})