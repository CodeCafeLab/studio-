import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { teamMembers } from '@/lib/data';
import { Users, Goal, Gem, HandHeart } from 'lucide-react';

export default function AboutPage() {
  const founder = teamMembers.find(m => m.designation.includes('Founder'));

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container text-center py-10 md:py-14">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About OJASH WELFARE Society</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl">Empowering children through education in Bandikui (Dausa)</p>
          <p className="max-w-3xl mx-auto mt-2 text-lg md:text-xl">Reg. COOP/2024/DAUSA/500207</p>
        </div>
      </section>

      <section id="story">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story: Empowering Through Education</h2>
              <p className="text-muted-foreground text-lg">
                OJASH WELFARE Society was established in Bandikui (Dausa) with a mission to provide quality education and support to underprivileged children. We recognized that many children in our community lacked access to proper educational resources and opportunities for development.
              </p>
              <p className="text-muted-foreground text-lg">
                Our organization actively works to distribute educational materials, provide warm clothing during winter, and create a nurturing environment where children can learn and grow. With our motto "हर हाथ, एक नई उम्मीद" (Every Hand, A New Hope), we're committed to ensuring that every child has the opportunity to build a brighter future through education.
              </p>
            </div>
            {founder && (
              <Card className="rounded-lg">
                <CardHeader>
                  <CardTitle>Message from the Founder</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-6 items-center">
                  <Image
                    src={PlaceHolderImages.find(p => p.id === founder.imageId)?.imageUrl || ''}
                    alt={`Portrait of ${founder.name}`}
                    width={150}
                    height={150}
                    className="rounded-full object-cover aspect-square"
                    data-ai-hint="founder portrait"
                  />
                  <div className="space-y-2 text-center sm:text-left">
                    <p className="text-muted-foreground italic text-lg">"We cannot build an equal future if we let some of our children start life in the shadows of discrimination. Education is the light that will guide them to a place of dignity and strength."</p>
                    <p className="font-semibold">{founder.name}, <span className="text-sm font-normal">{founder.designation}</span></p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
      
      <section id="values" className="bg-secondary/50">
        <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                  <Goal className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">To provide equal education, love, and respect to children from marginalized SC/ST communities.</p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                  <Gem className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">A society where no child is excluded because of caste or background.</p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                  <HandHeart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                  <p className="text-muted-foreground">Dignity, Equality, Compassion, and Empowerment guide all our actions.</p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
                <p className="text-muted-foreground">We focus on grassroots education, community awareness, and creating inclusive spaces.</p>
              </div>
            </div>
        </div>
      </section>

      
      <section id="legal" className="bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Legal Status</h2>
            <p className="text-muted-foreground text-lg">
              OJASH WELFARE Society is a registered non-governmental organization under the Societies Registration Act of 1860. We are committed to full transparency and are compliant with all local laws.
            </p>
            <div className="bg-background rounded-lg p-6 shadow-sm inline-block">
              <p className="text-sm text-muted-foreground mb-1">Registration Number</p>
              <p className="text-2xl font-bold text-primary">COOP/2024/DAUSA/500207</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
