// components/RootLayout.js

import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {getUserLocale} from "@/lib/locale";


// Import the Geist Sans and Geist Mono fonts
const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});

const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

// Metadata for the site
export const metadata = {
	title: 'ADD Coaching & Facilitation',
	description: 'Life Coaching and Facilitation',
};

export default async function RootLayout({ children, params }) {
	const locale = await getUserLocale();
	const messages = await getMessages();

	return (
		<NextIntlClientProvider
			messages={messages} >
			<html lang={locale} className='bg-[var(--background)] text-[var(--foreground)]'>
				<body
					className={`min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
				>
					<SiteHeader
						locale={locale}
					/>
					{children}
					<Footer />
				</body>
			</html>
		</NextIntlClientProvider>
	);
}