import Link from 'next/link';
import {useTranslations} from "next-intl";

export default function NavLinks(props) {
    const { navClass, linkClass, onNavLinkClick } = props;
    const t = useTranslations();

    return (
      <nav className={navClass}>
        <Link
          href="/"
          className={linkClass}
          prefetch={false}
          onClick={onNavLinkClick}
        >
            {t('home')}
        </Link>
        <Link
          href="/about"
          className={linkClass}
          prefetch={false}
          onClick={onNavLinkClick}
        >
            {t('about')}
        </Link>
        <Link
          href="/coaching-and-facilitation-offerings"
          className={linkClass}
          prefetch={false}
          onClick={onNavLinkClick}
        >
            {t('offerings')}
        </Link>
        <Link
          href="/impact-stories"
          className={linkClass}
          prefetch={false}
          onClick={onNavLinkClick}
        >
            {t('stories')}
        </Link>
        <Link
          href="/begin-your-journey"
          className={linkClass}
          prefetch={false}
          onClick={onNavLinkClick}
        >
            {t('begin_journey')}
        </Link>
      </nav>
    );
  }