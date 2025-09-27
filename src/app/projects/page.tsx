import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { projects } from '@/lib/data';
import { AISummaryButton } from '@/components/ai-summary-button';
import { Badge } from '@/components/ui/badge';
import { BarChart3 } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container text-center py-16 md:py-24">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Projects</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl">Explore our initiatives and the impact they have on communities.</p>
        </div>
      </section>

      <section id="project-list">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => {
              const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
              return (
                <Card key={project.id} className="flex flex-col sm:flex-row overflow-hidden group transition-shadow hover:shadow-xl">
                  {projectImage && (
                    <div className="sm:w-1/3">
                      <Image
                        src={projectImage.imageUrl}
                        alt={projectImage.description}
                        width={600}
                        height={400}
                        className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={projectImage.imageHint}
                      />
                    </div>
                  )}
                  <div className="flex flex-col sm:w-2/3">
                    <CardHeader className="p-6">
                      <Badge variant="secondary" className="w-fit mb-2">{project.category}</Badge>
                      <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-grow">
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                       <div className="flex items-center text-sm text-muted-foreground font-medium">
                        <BarChart3 className="w-4 h-4 mr-2 text-accent" />
                        <span>{project.impact}</span>
                      </div>
                      <AISummaryButton contentToSummarize={project.description} />
                    </CardFooter>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
