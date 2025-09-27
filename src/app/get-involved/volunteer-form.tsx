'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useFormState } from 'react-dom';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { volunteerRegistrationResponse } from '@/ai/flows/volunteer-registration-response';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  interests: z.string().min(10, 'Please tell us about your interests.'),
  availability: z.string().min(5, 'Please tell us about your availability.'),
});

type FormValues = z.infer<typeof formSchema>;

type State = {
  message?: string | null;
  response?: string | null;
  errors?: {
    [key in keyof FormValues]?: string[];
  };
};

async function registerVolunteerAction(prevState: State, formData: FormData): Promise<State> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const interests = formData.get('interests') as string;
  const availability = formData.get('availability') as string;

  const validatedFields = formSchema.safeParse({
    name, email, interests, availability
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
    };
  }

  try {
    const aiResponse = await volunteerRegistrationResponse({
      name, email, interests, availability
    });

    return {
      message: 'Registration successful!',
      response: aiResponse.response,
    };
  } catch (e) {
    return { message: 'An error occurred during registration.' };
  }
}

export function VolunteerForm() {
  const { toast } = useToast();
  const [showDialog, setShowDialog] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      interests: '',
      availability: '',
    },
  });

  async function onSubmit(data: FormValues) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const result = await registerVolunteerAction({ message: null, errors: {} }, formData);

    if (result.message?.includes('successful')) {
      toast({
        title: 'Registration Submitted!',
        description: 'Thank you for your interest. Please see the generated response.',
      });
      setShowDialog(true);
      form.reset();
    } else {
      toast({
        title: 'Error',
        description: result.message || 'Something went wrong.',
        variant: 'destructive',
      });
    }

    if (result.response) {
      form.setValue('interests', result.response); // A bit of a hack to pass response to dialog
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. jane.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Interests</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., Teaching children, helping with health camps, environmental work..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Availability</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Weekends, weekday evenings..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Submitting...' : 'Register as Volunteer'}
          </Button>
        </form>
      </Form>
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-headline">Registration Received!</AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for registering! Here is a preview of the AI-generated email response you will receive with the next steps.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="max-h-60 overflow-y-auto rounded-md border bg-muted/50 p-4 text-sm">
            {form.getValues('interests')}
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowDialog(false)}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
