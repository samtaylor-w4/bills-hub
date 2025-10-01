import { z } from 'zod';

export const billSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  amount: z
    .string()
    .refine(val => !isNaN(Number(val)), 'Amount must be a number')
    .transform(val => Number(val))
    .refine(val => val > 0, 'Amount must be > 0'),
  dueDate: z.string().refine(val => !isNaN(Date.parse(val)), 'Invalid date')
});

export type BillFormData = z.infer<typeof billSchema>;