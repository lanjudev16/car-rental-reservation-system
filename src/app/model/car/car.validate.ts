import { z } from "zod";

const carValidateSchema = z.object({
  body:z.object({
      name: z.string(),
      description: z.string(),
      color: z.string(),
      isElectric: z.boolean(),
      status: z.string().default("available"),
      features: z.array(z.string()),
      pricePerHour: z.number(),
      isDeleted: z.boolean().default(false),
  })
  });
export const carValidate={
    carValidateSchema
}