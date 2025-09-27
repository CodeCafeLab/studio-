import { DonationTabs } from './donation-tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Utensils, PencilRuler } from 'lucide-react';


export default function DonatePage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container text-center py-16 md:py-24">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">Make a Donation</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl">Your small contribution can give a child dignity and education. Every donation, big or small, makes a difference.</p>
        </div>
      </section>

      <section id="donation-impact" className="bg-secondary/50">
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">How Your Donation Helps</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center rounded-lg">
                    <CardHeader className="items-center">
                        <BookOpen className="w-12 h-12 text-primary mb-4" />
                        <CardTitle>Books & Supplies</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Your donation helps provide textbooks, notebooks, and essential school supplies, giving children the tools they need to learn and succeed.</p>
                    </CardContent>
                </Card>
                <Card className="text-center rounded-lg">
                    <CardHeader className="items-center">
                        <Utensils className="w-12 h-12 text-primary mb-4" />
                        <CardTitle>Nutritious Meals</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">We provide healthy meals to our students, ensuring they have the energy to focus in class and grow strong.</p>
                    </CardContent>
                </Card>
                <Card className="text-center rounded-lg">
                    <CardHeader className="items-center">
                        <PencilRuler className="w-12 h-12 text-primary mb-4" />
                        <CardTitle>Classroom Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Contributions support our learning centers, helping us maintain a safe and effective educational environment.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section id="donation-options">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <DonationTabs />
          </div>
        </div>
      </section>
    </>
  );
}
