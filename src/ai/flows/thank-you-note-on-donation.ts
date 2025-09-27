'use server';
/**
 * @fileOverview Generates a personalized thank you note for donations.
 *
 * - generateThankYouNote - A function that generates a thank you note.
 * - GenerateThankYouNoteInput - The input type for the generateThankYouNote function.
 * - GenerateThankYouNoteOutput - The return type for the generateThankYouNote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateThankYouNoteInputSchema = z.object({
  donorName: z.string().describe('The name of the donor.'),
  donationAmount: z.number().describe('The amount of the donation.'),
  ngoName: z.string().describe('The name of the NGO.'),
});
export type GenerateThankYouNoteInput = z.infer<typeof GenerateThankYouNoteInputSchema>;

const GenerateThankYouNoteOutputSchema = z.object({
  thankYouNote: z.string().describe('The personalized thank you note.'),
});
export type GenerateThankYouNoteOutput = z.infer<typeof GenerateThankYouNoteOutputSchema>;

export async function generateThankYouNote(input: GenerateThankYouNoteInput): Promise<GenerateThankYouNoteOutput> {
  return generateThankYouNoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateThankYouNotePrompt',
  input: {schema: GenerateThankYouNoteInputSchema},
  output: {schema: GenerateThankYouNoteOutputSchema},
  prompt: `You are a fundraising expert for non-profit organizations. Generate a personalized thank you note for a donor.

  Donor Name: {{{donorName}}}
  Donation Amount: {{{donationAmount}}}
  NGO Name: {{{ngoName}}}

  Thank You Note:`, // Ensure this is the prompt instruction
});

const generateThankYouNoteFlow = ai.defineFlow(
  {
    name: 'generateThankYouNoteFlow',
    inputSchema: GenerateThankYouNoteInputSchema,
    outputSchema: GenerateThankYouNoteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
