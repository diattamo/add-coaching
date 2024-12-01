
"use client"
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NavLinks from './NavLinks';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function Navbar({ locale }) {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, [pathname]);

  const handleNavLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--primary)] text-[var(--secondary)] py-4 shadow-md">
      <div className="w-full flex items-center justify-between h-20 px-6">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden text-[var(--secondary)]">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[var(--primary)] text-[var(--secondary)]">
            <NavLinks 
              navClass="grid gap-2 py-6"
              linkClass="flex w-full items-center py-2 text-lg font-semibold hover:text-[var(--primary-foreground)] transition-colors"
              onNavLinkClick={handleNavLinkClick}
            />
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="hidden lg:flex items-center" prefetch={false}>
          <FlowerImage />
          <span className="ml-3 text-2xl font-bold text-[var(--secondary)]">
            <>Aminata</> <strong>Dia</strong><>tta</>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <LocaleSwitcher initialLocale={locale}/>
        <NavLinks
          navClass="ml-auto hidden lg:flex gap-6"
          linkClass="text-lg hover:text-[var(--primary-foreground)] transition-colors link"
        />
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function FlowerImage() {
  return (
    <Image
      className="w-auto h-auto"
      src="/green-flower-1.png"
      alt="Green Flower"
      width={64}
      height={64}
    />
  );
}
