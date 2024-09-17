import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainSelector from '@/components/MainSelector/MainSelector';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: 'Galapagateway',
    description: 'Explore the Galapagos Islands',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MainSelector />
                {children}
            </body>
        </html>
    );
}
