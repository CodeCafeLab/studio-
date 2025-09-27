import { VolunteerForm } from "./volunteer-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Briefcase, Heart } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container text-center py-16 md:py-24">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">Get Involved</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl">Your time, skills, and passion can create a world of difference. Join us in our mission.</p>
        </div>
      </section>

      <section id="ways-to-help">
        <div className="container px-4 md:px-6 grid md:grid-cols-3 gap-8">
            <Card>
                <CardHeader className="flex-row items-center gap-4">
                    <Heart className="w-8 h-8 text-primary"/>
                    <CardTitle className="font-headline text-2xl">Volunteer</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Lend your time and skills to our projects. Whether it's teaching children, assisting in health camps, or participating in environmental drives, your contribution matters.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex-row items-center gap-4">
                    <Briefcase className="w-8 h-8 text-primary"/>
                    <CardTitle className="font-headline text-2xl">Internships</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Gain hands-on experience in the social sector. We offer structured internship programs for students and young professionals eager to learn and contribute.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex-row items-center gap-4">
                    <Handshake className="w-8 h-8 text-primary"/>
                    <CardTitle className="font-headline text-2xl">Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Collaborate with us to amplify our impact. We welcome partnerships with corporates, institutions, and other NGOs to create synergistic and sustainable change.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      <section id="volunteer-form-section" className="bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Register as a Volunteer</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Fill out the form below to express your interest. Our AI assistant will review your details and send you a personalized email with next steps.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
                <CardContent className="p-6">
                    <VolunteerForm />
                </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
