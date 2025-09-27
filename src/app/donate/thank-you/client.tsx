'use client';

import { useState, useEffect } from 'react';
import { Loader2, PartyPopper, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateThankYouNote } from '@/app/actions';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ThankYouClient() {
  const [status, setStatus] = useState<'loading' | 'generating' | 'done' | 'error'>('loading');
  const [thankYouNote, setThankYouNote] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('generating');
    }, 10000); // 10-second delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (status === 'generating') {
      const getNote = async () => {
        try {
          const result = await generateThankYouNote({
            donorName: 'Valued Supporter',
            donationAmount: 500,
            ngoName: 'Ojash Welfare Society',
          });
          setThankYouNote(result.thankYouNote);
          setStatus('done');
        } catch (error) {
          console.error(error);
          setStatus('error');
        }
      };
      getNote();
    }
  }, [status]);

  return (
    <Card className="w-full max-w-2xl text-center shadow-lg">
      <CardHeader>
        {status === 'loading' && (
          <div className="flex justify-center items-center mb-4">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        )}
        {status === 'generating' && (
          <div className="flex justify-center items-center mb-4">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        )}
        {status === 'done' && (
          <div className="flex justify-center items-center mb-4">
            <PartyPopper className="w-12 h-12 text-accent" />
          </div>
        )}
        {status === 'error' && (
          <div className="flex justify-center items-center mb-4">
            <Heart className="w-12 h-12 text-destructive" />
          </div>
        )}
        <CardTitle className="font-headline text-3xl">
          {status === 'loading' && 'Processing your donation...'}
          {status === 'generating' && 'Crafting your special thank you...'}
          {status === 'done' && 'Thank You for Your Generosity!'}
          {status === 'error' && 'Thank You!'}
        </CardTitle>
        <CardDescription>
          {status === 'loading' && 'Please wait while we confirm your contribution.'}
          {status === 'generating' && 'Our AI is writing a personal note to express our gratitude.'}
          {status === 'done' && 'Your support makes our work possible.'}
          {status === 'error' && 'We sincerely appreciate your donation, even though we had trouble generating a special note.'}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {status === 'generating' && (
          <div className="space-y-3 text-left w-full">
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[75%]" />
          </div>
        )}
        {(status === 'done' || status === 'error') && (
            <div className="text-left bg-muted/50 p-4 rounded-md space-y-4 w-full">
                <p className='italic'>{thankYouNote || 'Your donation is a beacon of hope for many. We are incredibly grateful for your support and for believing in our mission. Together, we can create a world where every hand brings new hope.'}</p>
                <p className='font-semibold'>With heartfelt thanks,</p>
                <p className='font-semibold'>The Team at Ojash Welfare Society</p>
            </div>
        )}
         <Button asChild className="mt-6 w-full sm:w-auto">
            <Link href="/">Back to Home</Link>
          </Button>
      </CardContent>
    </Card>
  );
}
