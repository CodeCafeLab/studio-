'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, HeartHandshake, ArrowRight } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#005A9C]/10 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Logo />
        </div>

        {/* Mobile Menu */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-[#F4B400]/10">
                <Menu className="h-6 w-6 text-[#005A9C]" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-white">
              <div className="flex items-center justify-between mb-8 pr-6">
                <Logo />
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-[#F4B400]/10">
                    <X className="h-6 w-6 text-[#005A9C]" />
                    <span className="sr-only">Close Menu</span>
                  </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col gap-4 pr-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-all duration-300 px-4 py-2 rounded-lg',
                      pathname === link.href 
                        ? 'text-[#005A9C] bg-[#E5F6FF]' 
                        : 'text-[#005A9C]/70 hover:text-[#F4B400] hover:bg-[#F4B400]/5'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link 
                  href="/donate"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full bg-[#F4B400] text-[#005A9C] hover:bg-[#005A9C] hover:text-white transition-all duration-300"
                >
                  Donate Now <HeartHandshake className="h-5 w-5" />
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
          <nav className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium px-4 py-2 rounded-lg transition-all duration-300',
                  pathname === link.href 
                    ? 'text-[#005A9C] bg-[#E5F6FF]' 
                    : 'text-[#005A9C]/70 hover:text-[#F4B400] hover:bg-[#F4B400]/5'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center ml-6 md:flex">
          <Link 
            href="/donate"
            className="inline-flex items-center justify-center gap-2 font-bold px-6 py-2.5 rounded-full bg-[#F4B400] text-[#005A9C] hover:bg-[#005A9C] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg text-sm"
          >
            Donate Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
