import { z } from "zod";

const userValidateSchema = z.object({
  name: z.string({required_error:"Name is required"}),
  email: z.string({required_error:"Email is required"}).email("Invalid email address"),
  phone: z.string({required_error:"Phone is required"}),
  address: z.string({required_error:"Address is required"}),
  role: z.enum(['user', 'admin']).optional(), 
  password: z.string()
});

export default userValidateSchema;
