import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
    // Provide the path to your requests module
    './src/i18n/requests.js'
);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);