import type { Metadata } from 'next'
import { Poppins, Yatra_One, Khand } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-sans',
});

const yatraOne = Yatra_One({
  subsets: ['devanagari', 'latin'],
  weight: ['400'],
  variable: '--font-marathi',
});

const khand = Khand({
  subsets: ['devanagari', 'latin'],
  weight: ['600', '700'],
  variable: '--font-impact',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shatayuyoga.in'), // Update to actual production domain
  title: {
    default: 'Shatayu Yoga Classes | Best Yoga Center in Mahalunge, Pune',
    template: '%s | Shatayu Yoga Pune',
  },
  description: 'Join Shatayu Yoga Classes in Pune led by certified instructor Shubhangi Ghule. Specialized in Fitness Yoga, Therapeutic Yoga, Face Yoga, and Kids Yoga online and offline.',
  keywords: [
    'yoga classes in Pune',
    'yoga center Mahalunge',
    'online yoga classes',
    'fitness yoga batch Pune',
    'therapeutic yoga for back pain',
    'face yoga for glowing skin',
    'kids yoga classes online',
    'pranayama and meditation Pune',
    'Shubhangi Ghule yoga',
    'best yoga instructor near Mahalunge',
    'Nande Road yoga center',
    'immunity boosting yoga',
    'vtp leonara yoga classes'
  ],
  authors: [{ name: 'Shubhangi Ghule' }],
  creator: 'Shatayu Yoga',
  publisher: 'Shatayu Yoga',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'mr_IN',
    url: 'https://shatayuyoga.in',
    siteName: 'Shatayu Yoga Classes',
    title: 'Shatayu Yoga Classes | Offline & Online Yoga in Pune',
    description: 'Experience holisitic well-being with Shatayu Yoga by AYUSH certified Shubhangi Ghule. Offering online & local batches in Mahalunge, Pune.',
    images: [
      {
        url: '/assets/logo.png', // Fallback to logo or suitable hero image
        width: 800,
        height: 600,
        alt: 'Shatayu Yoga Classes in Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shatayu Yoga Classes | Pune',
    description: 'Expert-led Yoga Sessions by Shubhangi Ghule. Join our online/offline batches today!',
    creator: '@shatayuyoga',
    images: ['/assets/logo.png'],
  },
  generator: 'Next.js',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${yatraOne.variable} ${khand.variable}`}>
      <body className="font-sans font-medium antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full relative z-0">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
