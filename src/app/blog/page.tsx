import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { blogPosts } from '@/lib/data';
import { AISummaryButton } from '@/components/ai-summary-button';

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container text-center py-16 md:py-24">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Blog</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl">Stay updated with our latest news, success stories, and impact articles.</p>
        </div>
      </section>

      <section id="blog-posts">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const postImage = PlaceHolderImages.find(p => p.id === post.imageId);
              return (
                <Card key={post.id} className="flex flex-col overflow-hidden group transition-shadow hover:shadow-xl">
                  {postImage && (
                    <CardHeader className="p-0">
                      <Image
                        src={postImage.imageUrl}
                        alt={postImage.description}
                        width={600}
                        height={400}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={postImage.imageHint}
                      />
                    </CardHeader>
                  )}
                  <CardContent className="p-6 flex-grow">
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <CardTitle className="font-headline text-2xl mb-3">{post.title}</CardTitle>
                    <CardDescription>{post.summary}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <AISummaryButton contentToSummarize={post.content} />
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
