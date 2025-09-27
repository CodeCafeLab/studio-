import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Newspaper, HeartHandshake, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { projects, blogPosts, partners } from '@/lib/data';
import { AISummaryButton } from '@/components/ai-summary-button';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white py-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container px-4 md:px-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Ojash Welfare Society
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl">
              हर हाथ, एक नई उम्मीद | Every Hand, A New Hope
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-bold">
                <Link href="/donate">
                  Donate Now
                  <HeartHandshake className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="rounded-full font-bold">
                <Link href="/get-involved">
                  Get Involved
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="mission-vision" className="bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-0">
                <CardHeader className="flex-row items-center gap-4">
                  <Lightbulb className="w-10 h-10 text-primary" />
                  <CardTitle className="text-3xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    To create a society where every individual has the opportunity to achieve their full potential, free from the constraints of poverty and social injustice. We envision a world where compassion and collective action lead to sustainable development and empowerment for all.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300 border-0">
                <CardHeader className="flex-row items-center gap-4">
                  <Target className="w-10 h-10 text-primary" />
                  <CardTitle className="text-3xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    To empower marginalized communities through holistic interventions in education, health, and livelihood. We are dedicated to fostering self-reliance, promoting human rights, and creating a more equitable and inclusive society through grassroots efforts and strategic partnerships.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Our Projects</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Discover the impact we're making through our diverse range of projects.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projects.slice(0, 4).map((project) => {
                const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
                return (
                  <Card key={project.id} className="overflow-hidden group rounded-lg">
                    <CardHeader className="p-0">
                      {projectImage && (
                        <Image
                          src={projectImage.imageUrl}
                          alt={projectImage.description}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          data-ai-hint={projectImage.imageHint}
                        />
                      )}
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-3 mb-4">{project.description}</CardDescription>
                      <div className="flex justify-between items-center">
                        <Button asChild variant="link" className="p-0 font-bold">
                          <Link href="/projects">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <AISummaryButton contentToSummarize={project.description} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="news" className="bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Latest News & Events</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Stay updated with our recent activities and stories of change.
              </p>
            </div>
            <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {blogPosts.map((post) => {
                  const postImage = PlaceHolderImages.find(p => p.id === post.imageId);
                  return (
                    <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="h-full rounded-lg">
                          <CardContent className="flex flex-col items-start p-6">
                            {postImage && (
                              <Image
                                src={postImage.imageUrl}
                                alt={postImage.description}
                                width={600}
                                height={400}
                                className="w-full h-40 object-cover rounded-md mb-4"
                                data-ai-hint={postImage.imageHint}
                              />
                            )}
                            <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                            <CardTitle className="text-lg mb-2 line-clamp-2">{post.title}</CardTitle>
                            <CardDescription className="line-clamp-3 mb-4">{post.summary}</CardDescription>
                            <Button asChild variant="default" className="rounded-full font-bold">
                              <Link href={`/blog`}>
                                Read More <Newspaper className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section id="partners" className="bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Our Partners & Supporters</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                We are grateful for the support of our partners who make our work possible.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
              {partners.map(partner => {
                const partnerImage = PlaceHolderImages.find(p => p.id === partner.imageId);
                return partnerImage ? (
                  <Image
                    key={partner.id}
                    src={partnerImage.imageUrl}
                    alt={partner.name}
                    width={150}
                    height={75}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    data-ai-hint={partnerImage.imageHint}
                  />
                ) : null;
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
