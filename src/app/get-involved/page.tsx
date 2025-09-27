import { VolunteerForm } from "./volunteer-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Briefcase, Heart } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container text-center py-16 md:py-24">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Get Involved</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl">Your time, skills, and passion can help us build a world free from discrimination. Join our mission.</p>
        </div>
      </section>

      <section id="ways-to-help">
        <div className="container px-4 md:px-6 grid md:grid-cols-3 gap-8">
            <Card className="rounded-lg text-center">
                <CardHeader className="items-center gap-4">
                    <Heart className="w-12 h-12 text-accent"/>
                    <CardTitle className="text-2xl">Volunteer</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Become a teacher or mentor. Your time and knowledge can directly impact a child's life, providing them with the support and confidence to succeed.</p>
                </CardContent>
            </Card>
            <Card className="rounded-lg text-center">
                <CardHeader className="items-center gap-4">
                    <Briefcase className="w-12 h-12 text-accent"/>
                    <CardTitle className="text-2xl">Internships</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Gain hands-on experience in social work and education. We offer programs for students and professionals to contribute to our cause while learning.</p>
                </CardContent>
            </Card>
            <Card className="rounded-lg text-center">
                <CardHeader className="items-center gap-4">
                    <Handshake className="w-12 h-12 text-accent"/>
                    <CardTitle className="text-2xl">Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Collaborate with us. We welcome partnerships with schools, other NGOs, and corporate entities to amplify our impact against discrimination.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      <section id="volunteer-form-section" className="bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Register as a Volunteer</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Fill out the form to express your interest. Our team will review your details and get in touch with the next steps to join our mission.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="rounded-lg">
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
