import { z } from "zod";

const userValidateSchema = z.object({
  body:z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string(),
    role: z.enum(['user', 'admin']).optional(), 
    password: z.string()
  })
});

export default userValidateSchema;
