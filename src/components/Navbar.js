
"use client"
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NavLinks from './NavLinks';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    const links = document.querySelectorAll('.link');
    console.log(links);
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--primary)] text-[var(--secondary)] py-4 shadow-md">
      <div className="w-full flex items-center justify-between h-20 px-6">
        <Sheet>
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
            />
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="hidden lg:flex items-center" prefetch={false}>
          {/* <MountainIcon className="h-8 w-8 text-[var(--secondary)]" /> */}
          <span className="ml-3 text-2xl font-bold text-[var(--secondary)]">
            <>Aminata</> <strong>Dia</strong><>tta</>
          </span>
        </Link>

        {/* Desktop Navigation */}
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

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M8 3L12 11L17 6L22 21H2L8 3Z" />
    </svg>
  );
}
