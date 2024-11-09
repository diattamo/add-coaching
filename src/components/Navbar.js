// components/Navbar.js
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


function NavLinks(props) {
  const { navClass, linkClass } = props;

  return (
    <nav className={navClass}>
      <Link
        href="/"
        className={linkClass}
        prefetch={false}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={linkClass}
        prefetch={false}
      >
        About
      </Link>
      <Link
        href="/coaching-and-facilitation-offerings"
        className={linkClass}
        prefetch={false}
      >
        Coaching and Facilitation Offerings
      </Link>
      <Link
        href="/impact-stories"
        className={linkClass}
        prefetch={false}
      >
        Impact Stories
      </Link>
      <Link
        href="/begin-your-journey"
        className={linkClass}
        prefetch={false}
      >
        Begin Your Journey
      </Link>
    </nav>
  );
}

export default function Navbar() {
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
          <MountainIcon className="h-8 w-8 text-[var(--secondary)]" />
          <span className="ml-3 text-2xl font-bold text-[var(--secondary)]">
            ADD Coaching &amp; Facilitation
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavLinks
          navClass="ml-auto hidden lg:flex gap-6"
          linkClass="text-lg hover:text-[var(--primary-foreground)] transition-colors"
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
