import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import nextI18nextConfig from '../next-i18next.config';

export const initI18n = async () => {
  const defaultLocale = 'en';
  let locale;

  // Detect locale from cookies or default to `en`
  if (typeof window !== 'undefined') {
    locale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1];
  }

  locale = locale || defaultLocale;

  if (!i18n.isInitialized) {
    await i18n
      .use(initReactI18next)
      .init({
        lng: locale,
        fallbackLng: defaultLocale,
        ns: ['common'],
        defaultNS: 'common',
        backend: {
          loadPath: `/locales/{{lng}}/{{ns}}.json`,
        },
        ...nextI18nextConfig.i18n,
      });
  }
};
