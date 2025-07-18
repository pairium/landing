import type { Metadata } from "next";
import { Crimson_Text, Inter } from 'next/font/google';
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";

// Define fonts to match reflection.ai
const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-primary',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-secondary',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pairium.ai'),
  title: "Pairium AI",
  description: "Personalizing the Agentic Age",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  openGraph: {
    title: 'Pairium AI',
    description: 'Personalizing the Agentic Age',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 1200,
        alt: 'Pairium AI - Personalizing the Agentic Age'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pairium AI',
    description: 'Personalizing the Agentic Age',
    images: ['/og-image.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${crimsonText.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid md:grid-cols-[repeat(8,1fr)] grid-rows-[1fr_auto] gap-4 min-h-screen max-w-[1324px] mx-auto px-8 box-content md:pt-40">
            <Nav />
            <main className="md:col-start-3 md:col-span-6">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
