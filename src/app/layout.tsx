import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainSelector from '@/components/MainSelector/MainSelector';
import Script from 'next/script';

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
           <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js" />
            <body className={inter.className}>
                <MainSelector />
                {children}
            </body>
        </html>
    );
}
