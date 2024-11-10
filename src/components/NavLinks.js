import Link from 'next/link';

export default function NavLinks(props) {
    const { navClass, linkClass, onNavLinkClick } = props;
  
    return (
      <nav className={navClass}>
        <Link
          href="/"
          className={linkClass}
          prefetch={false}
          onClick={onNavLinkClick}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={linkClass}
          prefetch={false}
          onClick={onNavLinkClick}
        >
          About
        </Link>
        <Link
          href="/coaching-and-facilitation-offerings"
          className={linkClass}
          prefetch={false}
          onClick={onNavLinkClick}
        >
          Coaching and Facilitation Offerings
        </Link>
        <Link
          href="/impact-stories"
          className={linkClass}
          prefetch={false}
          onClick={onNavLinkClick}
        >
          Impact Stories
        </Link>
        <Link
          href="/begin-your-journey"
          className={linkClass}
          prefetch={false}
          onClick={onNavLinkClick}
        >
          Begin Your Journey
        </Link>
      </nav>
    );
  }