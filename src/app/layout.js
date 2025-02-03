import localFont from 'next/font/local';
import './globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {getUserLocale} from "@/lib/locale";

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