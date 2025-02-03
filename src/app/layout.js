// components/RootLayout.js

import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/SiteHeader';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {getUserLocale} from "@/lib/locale";
import {Amplify} from "aws-amplify";
import outputs from '/amplify_outputs.json';


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


export default async function RootLayout({children, params}) {
    const locale = await getUserLocale();
    const messages = await getMessages();


    return (
        <NextIntlClientProvider messages={messages}>
            <html lang={locale} className="h-full">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-[var(--foreground)]`}>
            <div className="relative flex flex-col min-h-screen">
                <div
                    className="responsive-bg fixed inset-0 -z-10"
                    // style={{
                    //     backgroundImage: 'url("/addstand.png")',
                    //     backgroundSize: 'cover',
                    //     backgroundPosition: 'center'
                    // }}
                />
                <main className="flex-1 flex items-center">
                    {children}
                </main>
            </div>
            </body>
            </html>
        </NextIntlClientProvider>
    );
}