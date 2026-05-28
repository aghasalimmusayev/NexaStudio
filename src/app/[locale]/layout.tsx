import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';
import Header from '@/components/layout/Header';
import ScrollTop from '@/components/ui/ScrollTop';
import { Toaster } from 'sonner';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

export const metadata: Metadata = {
    title: 'NexaStudio',
    description: 'Creative design agency',
};

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as 'az' | 'en' | 'ru')) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} className={`${geist.variable} h-full antialiased scroll-smooth`}>
            <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50">
                <NextIntlClientProvider messages={messages}>
                    <Toaster position="top-right" richColors />
                    <Header />
                    <ScrollTop />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
