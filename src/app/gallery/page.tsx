import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));
  const videoIds = ['dQw4w9WgXcQ', '3JZ_D3ELwOQ']; // Example YouTube video IDs

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container text-center py-16 md:py-24">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Gallery</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl">A glimpse into our world of action, compassion, and change.</p>
        </div>
      </section>

      <section id="image-gallery">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-center mb-12">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <div className="overflow-hidden rounded-lg cursor-pointer group">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-lg"
                    data-ai-hint={image.imageHint}
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
      
      <section id="video-gallery" className="bg-secondary/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-center mb-12">Video Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videoIds.map(videoId => (
              <div key={videoId} className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
