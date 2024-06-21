import type {Metadata} from 'next';
import {Inter as FontSans} from 'next/font/google';
import './globals.css';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import {cn} from '@/lib/utils';
import Providers from '@/components/Providers';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Neurain',
  description: 'Chat with any website or pdf'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang='en'>
          <body
            className={cn(
              'min-h-screen bg-background font-sans antialiased',
              fontSans.variable
            )}>
            {children}
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}
