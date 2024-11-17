import { NextResponse } from 'next/server';

export function middleware(request) {
  const defaultLocale = 'en';
  const supportedLocales = ['en', 'fr'];

  // Get the language preference from cookies or browser
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const browserLocale = request.headers.get('accept-language')?.split(',')[0]?.split('-')[0];

  const locale = cookieLocale || (supportedLocales.includes(browserLocale) ? browserLocale : defaultLocale);

  // Add the locale to cookies if not already set
  const response = NextResponse.next();
  response.cookies.set('NEXT_LOCALE', locale, { path: '/' });

  return response;
}
