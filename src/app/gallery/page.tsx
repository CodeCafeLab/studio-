import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container text-center py-16 md:py-24">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Gallery</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl">A glimpse into our world of action, compassion, and change. These are real photos from our events and classes.</p>
        </div>
      </section>

      <section id="image-gallery">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Photo Gallery</h2>
          <div 
            className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {galleryImages.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden rounded-lg cursor-pointer group break-inside-avoid">
                    <CardContent className="p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.imageHint}
                      />
                    </CardContent>
                    <CardFooter className="p-2 bg-background/80">
                      <p className="text-xs text-center w-full font-semibold">{image.caption || image.description}</p>
                    </CardFooter>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-2">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-lg"
                    data-ai-hint={image.imageHint}
                  />
                   <p className="text-center text-sm mt-2">{image.caption || image.description}</p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
