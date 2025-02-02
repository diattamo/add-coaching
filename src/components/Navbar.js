
"use client"
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NavLinks from './NavLinks';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LocaleSwitcher from "@/components/LocaleSwitcher";
import {Logo} from "@/components/Logo";

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
    <header className="sticky top-0 z-50 text-[var(--secondary)] py-4 backdrop-blur-sm">
        <div className="w-full flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <Link href="/" className="hidden lg:flex items-center" prefetch={false}>
          <Logo />
        </Link>
        <LocaleSwitcher initialLocale={locale}/>
      </div>
    </header>
  );
}


