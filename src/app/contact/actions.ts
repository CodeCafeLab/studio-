'use server';

import * as z from 'zod';

// Using the same schema structure as in the client component
type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function contactAction(data: ContactFormData) {
  // In a real application, you would handle the form submission here,
  // e.g., send an email, save to a database, etc.
  console.log('Contact form submitted:', data);
  return { success: true, message: 'Your message has been sent successfully!' };
}