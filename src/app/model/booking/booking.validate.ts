import { z } from 'zod';
import mongoose from 'mongoose';

export const bookingSchema = z.object({
    body:z.object({
        date: z.date(),
        user: z.string().refine((id) => mongoose.Types.ObjectId.isValid(id), {
          message: "Invalid user ID",
        }),
        car: z.string().refine((id) => mongoose.Types.ObjectId.isValid(id), {
          message: "Invalid car ID",
        }),
        startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
          message: "Invalid start time format. Expected HH:MM in 24-hour format.",
        }),
        endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
          message: "Invalid end time format. Expected HH:MM in 24-hour format.",
        }),
        totalCost: z.number().min(0).default(0),
    })
});

export type BookingSchema = z.infer<typeof bookingSchema>;
