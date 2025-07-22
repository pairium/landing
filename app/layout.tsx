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
          <div className="md:grid md:grid-cols-[repeat(8,1fr)] md:grid-rows-[1fr_auto] md:gap-4 min-h-screen md:max-w-[1324px] md:mx-auto md:px-8 md:box-content md:pt-40">
            <Nav />
            <main className="md:col-start-2 md:col-span-7 px-4 md:px-0">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
