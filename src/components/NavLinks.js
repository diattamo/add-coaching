import Link from 'next/link';

export default function NavLinks(props) {
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