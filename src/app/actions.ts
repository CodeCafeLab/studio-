'use server';

import { summarizeContent as summarizeContentFlow, SummarizeContentInput } from '@/ai/flows/ai-summarize-content';
import { generateThankYouNote as generateThankYouNoteFlow } from '@/ai/flows/thank-you-note-on-donation';
import { z } from 'zod';

// Schema definitions moved to non-exported constants
const summarizeSchema = z.object({
  content: z.string().min(10, "Content is too short to summarize."),
});

export async function summarizeContent(input: SummarizeContentInput) {
  const parsed = summarizeSchema.safeParse(input);
  if (!parsed.success) {
    throw new Error(parsed.error.errors[0].message);
  }
  return await summarizeContentFlow(parsed.data);
}

// Schema definition as non-exported constant
const thankYouSchema = z.object({
    donorName: z.string(),
    donationAmount: z.number(),
    ngoName: z.string(),
});

export async function generateThankYouNote(input: z.infer<typeof thankYouSchema>) {
    const parsed = thankYouSchema.safeParse(input);
    if (!parsed.success) {
        throw new Error(parsed.error.errors[0].message);
    }
    return await generateThankYouNoteFlow(parsed.data);
}
