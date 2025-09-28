import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Logo() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');
  
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
      {logoImage && (
        <Image 
          src={logoImage.imageUrl} 
          alt="Ojash Welfare Society Logo" 
          width={40} 
          height={40} 
          className="rounded-full"
          data-ai-hint={logoImage.imageHint}
        />
      )}
      <span className="text-xl font-bold">
        Ojash
      </span>
    </Link>
  );
}
