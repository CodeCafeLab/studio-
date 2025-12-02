'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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
import { Loader2, Send, User, Mail, Heart, Clock } from 'lucide-react';

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
  const [aiResponse, setAiResponse] = useState('');

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
      setAiResponse(result.response || '');
      setShowDialog(true);
      form.reset();
    } else {
      toast({
        title: 'Error',
        description: result.message || 'Something went wrong.',
        variant: 'destructive',
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                    <User className="h-4 w-4 text-ojash-blue" />
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g. Rahul Sharma" 
                      className="h-12 rounded-xl border-gray-200 focus:border-ojash-blue focus:ring-ojash-blue/20 transition-all"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4 text-ojash-blue" />
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g. rahul@example.com" 
                      type="email"
                      className="h-12 rounded-xl border-gray-200 focus:border-ojash-blue focus:ring-ojash-blue/20 transition-all"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>

          {/* Interests */}
          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                  <Heart className="h-4 w-4 text-ojash-orange" />
                  Your Interests
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Teaching children, helping in health camps, community work, organizing events..."
                    className="min-h-[120px] rounded-xl border-gray-200 focus:border-ojash-blue focus:ring-ojash-blue/20 transition-all resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          {/* Availability */}
          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4 text-ojash-orange" />
                  Your Availability
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Weekends, weekday evenings, specific days of the week..."
                    className="min-h-[100px] rounded-xl border-gray-200 focus:border-ojash-blue focus:ring-ojash-blue/20 transition-all resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={form.formState.isSubmitting}
            className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-ojash-blue to-ojash-blue/80 hover:from-ojash-blue/90 hover:to-ojash-blue text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Register as Volunteer
              </>
            )}
          </Button>
        </form>
      </Form>

      {/* Success Dialog */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="max-w-lg rounded-2xl">
          <AlertDialogHeader>
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <AlertDialogTitle className="font-headline text-2xl text-center">
              Registration Received! 🎉
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-gray-600">
              Thank you for your interest in volunteering with OJASH WELFARE Society. 
              Here's a preview of the response you'll receive:
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="max-h-60 overflow-y-auto rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 leading-relaxed">
            {aiResponse}
          </div>
          <AlertDialogFooter>
            <AlertDialogAction 
              onClick={() => setShowDialog(false)}
              className="w-full bg-gradient-to-r from-ojash-blue to-ojash-blue/80 hover:from-ojash-blue/90 hover:to-ojash-blue text-white rounded-xl h-12"
            >
              Got it, thank you!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
