'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Banknote, CreditCard, QrCode } from 'lucide-react';

export function DonationTabs() {
  const router = useRouter();
  const qrCodeImage = PlaceHolderImages.find(p => p.id === 'qr-code');

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/donate/thank-you');
  };

  return (
    <Tabs defaultValue="online" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="online"><CreditCard className="w-4 h-4 mr-2" />Online</TabsTrigger>
        <TabsTrigger value="bank"><Banknote className="w-4 h-4 mr-2"/>Bank</TabsTrigger>
        <TabsTrigger value="upi"><QrCode className="w-4 h-4 mr-2"/>UPI</TabsTrigger>
      </TabsList>
      
      <TabsContent value="online">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Online Payment</CardTitle>
            <CardDescription>Securely donate using your card or other online methods.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleDonation} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (INR)</Label>
                <Input id="amount" type="number" placeholder="500" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Jane Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="jane.doe@example.com" required />
              </div>
              <Button type="submit" className="w-full">Proceed to Payment</Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="bank">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Direct Bank Transfer</CardTitle>
            <CardDescription>You can donate directly to our bank account using the details below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm space-y-2 p-4 bg-muted/50 rounded-md">
              <p><strong>Bank Name:</strong> State Bank of India</p>
              <p><strong>Account Name:</strong> Ojash Welfare Society</p>
              <p><strong>Account Number:</strong> 12345678901</p>
              <p><strong>IFSC Code:</strong> SBIN0001234</p>
              <p><strong>Branch:</strong> New Delhi Main Branch</p>
            </div>
            <Button onClick={handleDonation} className="w-full">I Have Donated</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="upi">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">UPI / QR Code</CardTitle>
            <CardDescription>Scan the QR code with any UPI app to donate instantly.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            {qrCodeImage && (
              <Image
                src={qrCodeImage.imageUrl}
                alt={qrCodeImage.description}
                width={250}
                height={250}
                className="rounded-md border p-2"
                data-ai-hint={qrCodeImage.imageHint}
              />
            )}
            <p className="font-semibold text-center">UPI ID: ojash.ngo@upi</p>
            <Button onClick={handleDonation} className="w-full">I Have Donated</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
