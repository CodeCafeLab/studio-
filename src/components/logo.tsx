import { HandHeart } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
      <HandHeart className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline text-primary-foreground">
        Ojash Digital Uplift
      </span>
    </Link>
  );
}
