import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full relative z-0">
        {children}
      </main>
      <Footer />
    </>
  )
}
