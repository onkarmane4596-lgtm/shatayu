'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Classes', href: '/classes' },
  { name: 'About Us', href: '/about' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
        <motion.div
          initial={false}
          animate={scrolled ? 'scrolled' : 'top'}
          variants={{
            top: { backgroundColor: 'rgba(255, 251, 242, 0.92)', backdropFilter: 'blur(8px)', boxShadow: 'none' },
            scrolled: { backgroundColor: 'rgba(255, 251, 242, 0.98)', backdropFilter: 'blur(14px)', boxShadow: '0 10px 30px rgba(47,67,67,0.08)' },
          }}
          className="w-full h-16 sm:h-20 flex items-center border-b border-border/40"
        >
          <div className="container-tight flex items-center justify-between">

            {/* Logo Left */}
            <Link href="/" className="flex items-center gap-3 z-[60]">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden flex-shrink-0 bg-primary/10 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Shatayu Yoga Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                Shatayu <span className="text-primary font-semibold">Yoga</span>
              </span>
            </Link>

            {/* Desktop Links Right */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#5DA89F] to-[#5EA8E6] hover:opacity-90 text-[#FFFBF2] text-sm font-bold transition-all shadow-[0_4px_14px_rgba(93,168,159,0.3)] hover:shadow-[0_6px_20px_rgba(93,168,159,0.4)] active:scale-95 flex items-center gap-2"
              >
                Join Classes <ArrowRight className="w-4 h-4" />
              </Link>
            </nav>

            {/* Mobile Menu Button - Animating Hamburger */}
            <button
              className="lg:hidden relative w-10 h-10 z-[60] flex flex-col items-center justify-center gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-foreground rounded-full block transition-transform"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-foreground rounded-full block transition-opacity"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-foreground rounded-full block transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Modern Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 lg:hidden bg-background flex flex-col p-8 pt-24"
          >
            {/* Background Texture for Mobile Menu */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-[#5DA89F]/5 pointer-events-none" />

            <nav className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-3xl font-bold tracking-tight transition-colors",
                      pathname === link.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 rounded-xl bg-[#5DA89F] text-white text-center font-bold text-lg shadow-xl shadow-[#5DA89F]/20 block"
                >
                  Start Practice Now
                </Link>
              </motion.div>
            </nav>

            <div className="mt-auto text-center opacity-40">
              <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">Authentic Yoga Experience</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
