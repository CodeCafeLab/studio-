import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Newspaper, HeartHandshake, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { projects, blogPosts, partners, successStories } from '@/lib/data';

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
              OJASH WELFARE SOCIETY
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl">
              हर हाथ, एक नई उम्मीद | Every Hand, A New Hope
            </p>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl mt-2">
              Empowering children through education in Bandikui (Dausa)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-bold">
                <Link href="/get-involved">
                  Support Us
                  <HeartHandshake className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="rounded-full font-bold">
                <Link href="/donate">
                  Donate Now
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="our-story" className="bg-background">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Story: Empowering Through Education</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Established in Bandikui (Dausa), Ojash Welfare Society (Reg. COOP/2024/DAUSA/500207) is dedicated to providing quality education and support to underprivileged children. Our organization distributes educational materials, warm clothing, and creates a nurturing environment where every child can thrive regardless of their background. With the motto "हर हाथ, एक नई उम्मीद" (Every Hand, A New Hope), we're committed to building a brighter future for the children in our community.
              </p>
              <Button asChild>
                <Link href="/about">
                  Learn More About Our Journey <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="mission-vision" className="bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-0">
                <CardHeader className="flex-row items-center gap-4">
                  <Lightbulb className="w-10 h-10 text-primary" />
                  <CardTitle className="text-3xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    A society where every child has access to quality education and equal opportunities for growth and development.
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
                    To empower underprivileged children through education, provide essential supplies, and create a supportive environment for their holistic development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="programs" className="bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Programs & Activities</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                See how we're creating change and empowering communities.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((project) => {
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
                      <Button asChild variant="link" className="p-0 font-bold">
                          <Link href="/projects">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="success-stories" className="bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Success Stories</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Real stories of children who found confidence and opportunity through education.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              {successStories.map((story) => {
                  const storyImage = PlaceHolderImages.find(p => p.id === story.imageId);
                  return (
                      <Card key={story.id} className="overflow-hidden rounded-lg">
                          <div className="md:flex">
                              <div className="md:w-1/3">
                                {storyImage && (
                                  <div>
                                    <Image
                                      src={storyImage.imageUrl}
                                      alt={storyImage.description}
                                      width={400}
                                      height={400}
                                      className="w-full h-full object-cover"
                                      data-ai-hint={storyImage.imageHint}
                                    />
                                    <p className="text-xs text-muted-foreground p-2 text-center">
                                      {storyImage.caption ?? storyImage.description}
                                    </p>
                                  </div>
                                )}
                              </div>
                              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                                  <CardTitle className="text-2xl mb-2">{story.name}'s Story</CardTitle>
                                  <CardDescription className="italic text-lg text-muted-foreground mb-4">"{story.quote}"</CardDescription>
                                  <p className="text-sm"><span className="font-bold">{story.name}</span> {story.after}</p>
                              </div>
                          </div>
                      </Card>
                  )
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
              {partners.map(partner => (
                <div 
                  key={partner.id}
                  className="text-xl font-medium px-6 py-3 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
