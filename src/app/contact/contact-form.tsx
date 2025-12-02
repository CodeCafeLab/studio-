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
import { useToast } from '@/hooks/use-toast';
import { contactAction } from './actions';
import { User, Mail, MessageSquare, Send, Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await contactAction(values);

    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    }
  }

  return (
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
                    className="h-12 rounded-xl border-gray-200 focus:border-ojash-blue focus:ring-ojash-blue/20 transition-all bg-gray-50/50 hover:bg-white"
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
                    className="h-12 rounded-xl border-gray-200 focus:border-ojash-blue focus:ring-ojash-blue/20 transition-all bg-gray-50/50 hover:bg-white"
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-ojash-orange" />
                Your Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us how we can help you today..."
                  className="min-h-[160px] rounded-xl border-gray-200 focus:border-ojash-blue focus:ring-ojash-blue/20 transition-all resize-y bg-gray-50/50 hover:bg-white"
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
          className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-ojash-orange to-ojash-yellow text-white hover:shadow-lg hover:shadow-ojash-orange/25 hover:scale-[1.02] transition-all duration-300"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </>
          )}
        </Button>

        {/* Privacy Note */}
        <p className="text-center text-xs text-gray-500 mt-4">
          By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information.
        </p>
      </form>
    </Form>
  );
}
