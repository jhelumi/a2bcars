
import { z } from 'zod';

export const DynamicPageSchema = z.object({
  pageAddress: z.string().regex(/^[A-Za-z0-9-]+$/, {
                message: "Only letters, numbers, and hyphens are allowed.",
      }),
  pageTitle: z.string().min(2, "Name must be at least 2 characters."),
  pageKeywords: z.string().optional(),    
  pageContent: z.string().optional(),
});

export type DynamicPageFormData = z.infer<typeof DynamicPageSchema>;


