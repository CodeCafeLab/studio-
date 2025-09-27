import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { teamMembers } from '@/lib/data';
import { Download, Users, Goal, Gem, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const founder = teamMembers.find(m => m.designation.includes('Founder'));
  const otherMembers = teamMembers.filter(m => !m.designation.includes('Founder'));
  const certificateImage = PlaceHolderImages.find(p => p.id === 'certificate');

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container text-center py-16 md:py-24">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">About Ojash Welfare Society</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl">Learn about our journey, our values, and the people driving our mission forward.</p>
        </div>
      </section>

      <section id="story">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2010, Ojash Welfare Society started as a small initiative by a group of passionate individuals committed to making a difference in their community. What began as a weekend food drive has grown into a multi-faceted organization tackling critical issues in education, health, and empowerment.
              </p>
              <p className="text-muted-foreground">
                Our journey has been one of collaboration, resilience, and unwavering hope. We believe in the power of community and work hand-in-hand with the people we serve, ensuring our programs are both impactful and sustainable.
              </p>
            </div>
            {founder && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Message from the Founder</CardTitle>
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
                    <p className="text-muted-foreground italic">"Every small act of kindness creates a ripple with no logical end. Our vision is to start a tidal wave of positive change, one life at a time."</p>
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
                  <h3 className="text-xl font-headline font-semibold mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">To empower marginalized communities through holistic interventions in education, health, and livelihood.</p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                  <Gem className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-headline font-semibold mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">To create a society where every individual has the opportunity to achieve their full potential.</p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                  <HandHeart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-headline font-semibold mb-2">Our Values</h3>
                  <p className="text-sm text-muted-foreground">Compassion, Integrity, Empowerment, and Collaboration guide everything we do.</p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-headline font-semibold mb-2">Our Approach</h3>
                <p className="text-sm text-muted-foreground">We believe in grassroots efforts, community participation, and sustainable solutions.</p>
              </div>
            </div>
        </div>
      </section>

      <section id="team">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Meet Our Team</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              The dedicated individuals working tirelessly behind the scenes to make a difference.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map(member => {
              const memberImage = PlaceHolderImages.find(p => p.id === member.imageId);
              return (
                <div key={member.id} className="text-center space-y-3">
                  {memberImage && (
                    <Image
                      src={memberImage.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      width={200}
                      height={200}
                      className="rounded-full object-cover mx-auto aspect-square shadow-lg"
                      data-ai-hint={memberImage.imageHint}
                    />
                  )}
                  <div className="space-y-1">
                    <h4 className="font-semibold text-lg">{member.name}</h4>
                    <p className="text-sm text-primary font-medium">{member.designation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <section id="legal" className="bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Our Legal Status</h2>
              <p className="text-muted-foreground">
                Ojash Welfare Society is a registered non-governmental organization under the Societies Registration Act of 1860. We are compliant with all local laws and are committed to maintaining full transparency in our operations and finances. Our registration details are available for public review.
              </p>
              <Button asChild>
                <a href={certificateImage?.imageUrl} target="_blank" rel="noopener noreferrer">
                  View Certificate <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            {certificateImage && (
              <div className="flex justify-center">
                <Image
                  src={certificateImage.imageUrl}
                  alt={certificateImage.description}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg object-contain"
                  data-ai-hint={certificateImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
