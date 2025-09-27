// src/ai/flows/volunteer-registration-response.ts
'use server';

/**
 * @fileOverview Responds to volunteer registration emails with AI, based on configurable parameters.
 *
 * - volunteerRegistrationResponse - A function that generates a personalized response to a volunteer registration email.
 * - VolunteerRegistrationInput - The input type for the volunteerRegistrationResponse function.
 * - VolunteerRegistrationOutput - The return type for the volunteerRegistrationResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VolunteerRegistrationInputSchema = z.object({
  name: z.string().describe('The name of the person registering as a volunteer.'),
  email: z.string().email().describe('The email address of the person registering as a volunteer.'),
  interests: z.string().describe('The volunteer interests of the person registering.'),
  availability: z.string().describe('The volunteer availability of the person registering.'),
});
export type VolunteerRegistrationInput = z.infer<typeof VolunteerRegistrationInputSchema>;

const VolunteerRegistrationOutputSchema = z.object({
  response: z.string().describe('The AI-generated response to the volunteer registration email.'),
});
export type VolunteerRegistrationOutput = z.infer<typeof VolunteerRegistrationOutputSchema>;

export async function volunteerRegistrationResponse(
  input: VolunteerRegistrationInput
): Promise<VolunteerRegistrationOutput> {
  return volunteerRegistrationResponseFlow(input);
}

const volunteerRegistrationResponsePrompt = ai.definePrompt({
  name: 'volunteerRegistrationResponsePrompt',
  input: {schema: VolunteerRegistrationInputSchema},
  output: {schema: VolunteerRegistrationOutputSchema},
  prompt: `You are an AI assistant responding to volunteer registration emails for an NGO.
  Your goal is to acknowledge the volunteer's interest and provide next steps based on their interests and availability.
  
  Use a friendly and professional tone. Acknowledge their interest, briefly mention relevant opportunities based on their stated interests and availability, and provide clear instructions on how they can proceed (e.g., attending an orientation session, filling out a more detailed form, or contacting a specific person).

  Volunteer Name: {{{name}}}
  Volunteer Email: {{{email}}}
  Volunteer Interests: {{{interests}}}
  Volunteer Availability: {{{availability}}}
  
  Response:
`,
});

const volunteerRegistrationResponseFlow = ai.defineFlow(
  {
    name: 'volunteerRegistrationResponseFlow',
    inputSchema: VolunteerRegistrationInputSchema,
    outputSchema: VolunteerRegistrationOutputSchema,
  },
  async input => {
    const {output} = await volunteerRegistrationResponsePrompt(input);
    return output!;
  }
);



