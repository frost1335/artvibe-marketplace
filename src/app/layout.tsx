import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import { Locale, i18n } from "@/i18n.config";

const inter = Inter({ subsets: ["latin", 'cyrillic'] });

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: "ArtVibe MARKET - Internet do'kon",
  description: "Eng zo'r futbolka, ko'ylak va xudilar ArtVibe Market - Internet do'konida",
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale }
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} color="#FF00CC" />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
