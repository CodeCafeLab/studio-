import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              हर हाथ, एक नई उम्मीद | Every Hand, A New Hope
            </p>
            <div className="flex space-x-4">
              <Link href={SOCIAL_LINKS.facebook} aria-label="Facebook" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.instagram} aria-label="Instagram" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.youtube} aria-label="YouTube" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.twitter} aria-label="Twitter" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-headline font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-headline font-semibold">Legal</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-headline font-semibold">Contact Us</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>123 Hope Street, New Delhi, India</p>
              <p>Email: <a href="mailto:info@ojash.org" className="hover:text-primary transition-colors">info@ojash.org</a></p>
              <p>Phone: <a href="tel:+911234567890" className="hover:text-primary transition-colors">+91 123 456 7890</a></p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ojash Welfare Society. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
