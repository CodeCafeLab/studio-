'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Banknote, CreditCard, QrCode, User, Mail, IndianRupee, Building2, Hash, MapPin, Copy, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';

export function DonationTabs() {
  const router = useRouter();
  const qrCodeImage = PlaceHolderImages.find(p => p.id === 'qr-code');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/donate/thank-you');
    }, 1500);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const bankDetails = [
    { label: "Account Name", value: "Ojash Welfare Society", icon: User },
    { label: "Account Number", value: "1234567890", icon: Hash },
    { label: "IFSC Code", value: "ABCD0123456", icon: Building2 },
    { label: "Bank Name", value: "State Bank of India", icon: Banknote },
    { label: "Branch", value: "Dausa, Rajasthan", icon: MapPin },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Gradient Top Border */}
      <div className="h-1.5 bg-gradient-to-r from-ojash-orange via-ojash-yellow to-ojash-blue" />
      
      <Tabs defaultValue="online" className="w-full">
        {/* Tab Navigation */}
        <div className="border-b border-gray-100 px-6 pt-6">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100/80 rounded-xl p-1.5 h-auto">
            <TabsTrigger 
              value="online" 
              className="flex items-center gap-2 py-3 px-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-ojash-blue font-medium transition-all"
            >
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">Online</span>
            </TabsTrigger>
            <TabsTrigger 
              value="bank"
              className="flex items-center gap-2 py-3 px-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-ojash-blue font-medium transition-all"
            >
              <Banknote className="w-4 h-4"/>
              <span className="hidden sm:inline">Bank Transfer</span>
            </TabsTrigger>
            <TabsTrigger 
              value="upi"
              className="flex items-center gap-2 py-3 px-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-ojash-blue font-medium transition-all"
            >
              <QrCode className="w-4 h-4"/>
              <span className="hidden sm:inline">UPI</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        {/* Online Payment Tab */}
        <TabsContent value="online" className="mt-0">
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Online Payment</h3>
              <p className="text-gray-500 text-sm">Securely donate using your card or other online methods.</p>
            </div>
            
            <form onSubmit={handleDonation} className="space-y-5">
              {/* Amount Field */}
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-gray-700 font-medium flex items-center gap-2">
                  <IndianRupee className="h-4 w-4 text-ojash-orange" />
                  Amount (INR)
                </Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">₹</span>
                  <Input 
                    id="amount" 
                    type="number" 
                    placeholder="500" 
                    required 
                    className="h-12 pl-10 rounded-xl border-gray-200 focus:border-ojash-blue focus:ring-ojash-blue/20 transition-all bg-gray-50/50 hover:bg-white text-lg"
                  />
                </div>
                {/* Quick Amount Buttons */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[500, 1000, 2000, 5000].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        const input = document.getElementById('amount') as HTMLInputElement;
                        if (input) input.value = String(amount);
                      }}
                      className="px-4 py-1.5 text-sm font-medium rounded-full bg-gray-100 hover:bg-ojash-orange/10 hover:text-ojash-orange transition-colors"
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium flex items-center gap-2">
                  <User className="h-4 w-4 text-ojash-blue" />
                  Full Name
                </Label>
                <Input 
                  id="name" 
                  placeholder="Rahul Sharma" 
                  required 
                  className="h-12 rounded-xl border-gray-200 focus:border-ojash-blue focus:ring-ojash-blue/20 transition-all bg-gray-50/50 hover:bg-white"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-ojash-blue" />
                  Email
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="rahul@example.com" 
                  required 
                  className="h-12 rounded-xl border-gray-200 focus:border-ojash-blue focus:ring-ojash-blue/20 transition-all bg-gray-50/50 hover:bg-white"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-ojash-yellow to-ojash-orange text-black hover:shadow-lg hover:shadow-ojash-orange/30 hover:scale-[1.02] transition-all duration-300 mt-6"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Proceed to Payment
                  </>
                )}
              </Button>
            </form>
          </div>
        </TabsContent>

        {/* Bank Transfer Tab */}
        <TabsContent value="bank" className="mt-0">
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Direct Bank Transfer</h3>
              <p className="text-gray-500 text-sm">Transfer directly to our bank account using the details below.</p>
            </div>
            
            {/* Bank Details Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-6 space-y-4 mb-6">
              {bankDetails.map((detail, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-200/50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                      <detail.icon className="w-5 h-5 text-ojash-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{detail.label}</p>
                      <p className="font-semibold text-gray-800">{detail.value}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(detail.value, detail.label)}
                    className="p-2 hover:bg-white rounded-lg transition-colors"
                  >
                    {copied === detail.label ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400 hover:text-ojash-blue" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mb-6 text-center">
              After making the transfer, please click the button below so we can acknowledge your contribution.
            </p>

            <Button 
              onClick={handleDonation} 
              disabled={isLoading}
              className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-ojash-yellow to-ojash-orange text-black hover:shadow-lg hover:shadow-ojash-orange/30 hover:scale-[1.02] transition-all duration-300"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                "I Have Donated"
              )}
            </Button>
          </div>
        </TabsContent>

        {/* UPI Tab */}
        <TabsContent value="upi" className="mt-0">
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">UPI / QR Code</h3>
              <p className="text-gray-500 text-sm">Scan the QR code with any UPI app to donate instantly.</p>
            </div>
            
            <div className="flex flex-col items-center space-y-6">
              {/* QR Code */}
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-ojash-orange via-ojash-yellow to-ojash-blue rounded-3xl opacity-20 blur-lg" />
                <div className="relative bg-white rounded-2xl p-4 shadow-lg border-2 border-gray-100">
                  {qrCodeImage ? (
                    <Image
                      src={qrCodeImage.imageUrl}
                      alt={qrCodeImage.description}
                      width={200}
                      height={200}
                      className="rounded-xl"
                      data-ai-hint={qrCodeImage.imageHint}
                    />
                  ) : (
                    <div className="w-[200px] h-[200px] bg-gray-100 rounded-xl flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-gray-300" />
                    </div>
                  )}
                </div>
              </div>

              {/* UPI ID */}
              <div className="w-full max-w-xs">
                <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                      <QrCode className="w-5 h-5 text-ojash-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">UPI ID</p>
                      <p className="font-bold text-gray-800">ojash@upi</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('ojash@upi', 'upi')}
                    className="p-2 hover:bg-white rounded-lg transition-colors"
                  >
                    {copied === 'upi' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400 hover:text-ojash-blue" />
                    )}
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-500 text-center">
                After donating via UPI, click below to confirm your contribution.
              </p>

              <Button 
                onClick={handleDonation}
                disabled={isLoading}
                className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-ojash-yellow to-ojash-orange text-black hover:shadow-lg hover:shadow-ojash-orange/30 hover:scale-[1.02] transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "I Have Donated"
                )}
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
