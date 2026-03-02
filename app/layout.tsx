import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Shatayu Yoga | Find Balance & Harmony',
  description: 'Join Shatayu Yoga Classes led by certified instructor Shubhangi Ghule. Experience traditional yoga, pranayama, and holistic healing.',
  keywords: ['yoga', 'online classes', 'pranayama', 'meditation', 'therapeutic yoga', 'face yoga', 'Pune'],
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans font-medium antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-hidden pt-[var(--navbar-h,72px)] sm:pt-[80px]">
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
