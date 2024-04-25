import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import AuthProvider from '@/providers/auth.provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'ToDo App',
    description: 'A simple todo app built with Next.js and Firebase',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <AuthProvider>
                    <main className='flex min-h-[100dvh] flex-col items-center p-24'>
                        {children}
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
