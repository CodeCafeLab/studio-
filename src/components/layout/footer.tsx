import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm">
              हर हाथ, एक नई उम्मीद | Every Hand, A New Hope
            </p>
            <div className="flex space-x-4">
              <Link href={SOCIAL_LINKS.facebook} aria-label="Facebook" target="_blank" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.instagram} aria-label="Instagram" target="_blank" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.youtube} aria-label="YouTube" target="_blank" className="hover:opacity-80 transition-opacity">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.twitter} aria-label="Twitter" target="_blank" className="hover:opacity-80 transition-opacity">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold">Quick Links</h4>
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold">Legal</h4>
            <ul className="space-y-1">
              <li><Link href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold">Contact Us</h4>
            <address className="not-italic text-sm space-y-1">
              <p>Greta bhgwan shiv colony gudha road Bandikui Dausa</p>
              <p>Email: <a href="mailto:info@ojash.org" className="hover:underline">info@ojash.org</a></p>
              <p>Phone: <a href="tel:+91 96804 04555" className="hover:underline">+91 96804 04555</a></p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} OJASH WELFARE Society. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
