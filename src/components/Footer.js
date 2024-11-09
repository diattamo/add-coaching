// components/Footer.js

import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-[var(--secondary)] py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm mb-2 sm:mb-0">
            © 2024 Aminata Dia
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/aminata-dia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary-foreground)] transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com/aminata_dia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary-foreground)] transition-colors"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
