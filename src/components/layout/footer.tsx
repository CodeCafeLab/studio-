import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Logo } from '@/components/logo';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-[#005A9C] text-white">
      {/* Wave Top */}
      <div className="w-full">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V60Z"
            fill="white"
          />
        </svg>
      </div>
      
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo />
            <p className="text-white/80 text-sm leading-relaxed">
              हर हाथ, एक नई उम्मीद | Every Hand, A New Hope
            </p>
            <p className="text-white/70 text-sm">
              Empowering children through education in Bandikui (Dausa), Rajasthan.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Link 
                href={SOCIAL_LINKS.facebook} 
                aria-label="Facebook" 
                target="_blank" 
                className="p-2.5 bg-white/10 rounded-full hover:bg-[#F4B400] transition-colors duration-300"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link 
                href={SOCIAL_LINKS.instagram} 
                aria-label="Instagram" 
                target="_blank" 
                className="p-2.5 bg-white/10 rounded-full hover:bg-[#F4B400] transition-colors duration-300"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link 
                href={SOCIAL_LINKS.youtube} 
                aria-label="YouTube" 
                target="_blank" 
                className="p-2.5 bg-white/10 rounded-full hover:bg-[#F4B400] transition-colors duration-300"
              >
                <Youtube className="h-4 w-4" />
              </Link>
              <Link 
                href={SOCIAL_LINKS.twitter} 
                aria-label="Twitter" 
                target="_blank" 
                className="p-2.5 bg-white/10 rounded-full hover:bg-[#F4B400] transition-colors duration-300"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#F4B400]">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-white/80 text-sm hover:text-[#F4B400] transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#F4B400] rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#F4B400]">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-white/80 text-sm hover:text-[#F4B400] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#F4B400] rounded-full" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-of-service" 
                  className="text-white/80 text-sm hover:text-[#F4B400] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#F4B400] rounded-full" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#F4B400]">Contact Us</h4>
            <address className="not-italic text-sm space-y-3">
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="h-4 w-4 mt-1 text-[#F4B400] flex-shrink-0" />
                <p>Greta Bhagwan Shiv Colony, Gudha Road, Bandikui, Dausa, Rajasthan</p>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="h-4 w-4 text-[#F4B400] flex-shrink-0" />
                <a 
                  href="mailto:ojashwelfaresociety@gmail.com" 
                  className="hover:text-[#F4B400] transition-colors duration-300"
                >
                  ojashwelfaresociety@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="h-4 w-4 text-[#F4B400] flex-shrink-0" />
                <a 
                  href="tel:+919680404555" 
                  className="hover:text-[#F4B400] transition-colors duration-300"
                >
                  +91 96804 04555
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} OJASH WELFARE Society. All Rights Reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-[#F4B400] fill-[#F4B400]" /> for the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
