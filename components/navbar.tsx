'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Home, Flower2, User2, Star, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_FALLBACK = '/placeholder-logo.svg';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Classes', href: '/classes', icon: Flower2 },
  { name: 'About Us', href: '/about', icon: User2 },
  { name: 'Testimonials', href: '/testimonials', icon: Star },
  { name: 'Contact', href: '/contact', icon: Send },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/logo.png');
  const pathname = usePathname();

  // Handle scroll detection for the modern floating effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Remove explicit body overflow lock to prevent layout shift (fluctuation) on Windows/Desktop when testing mobile view
  useEffect(() => {
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          scrolled
            ? 'top-4 sm:top-6 px-4 sm:px-6'
            : 'top-0 px-0'
        )}
      >
        <div
          className={cn(
            'mx-auto transition-all duration-500 max-w-[1200px]',
            scrolled
              ? 'rounded-[2rem] bg-background/80 backdrop-blur-xl border border-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-2 sm:py-3 px-4 sm:px-6'
              : 'rounded-none bg-transparent py-4 sm:py-6 px-4 sm:px-8'
          )}
        >
          <div className="flex items-center justify-between">

            {/* Logo Section */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group touch-target min-w-0 z-50"
              aria-label="Shatayu Yoga Home"
            >
              <span className={cn(
                "relative flex-shrink-0 flex items-center justify-center overflow-hidden transition-all duration-300",
                scrolled ? "w-10 h-10 rounded-xl bg-primary/10" : "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/40 shadow-sm"
              )}>
                <Image
                  src={logoSrc}
                  alt=""
                  width={48}
                  height={48}
                  className={cn(
                    "object-contain group-hover:scale-105 transition-transform",
                    scrolled ? "w-7 h-7" : "w-8 h-8 sm:w-10 sm:h-10"
                  )}
                  priority
                  unoptimized
                  onError={() => setLogoSrc(LOGO_FALLBACK)}
                />
              </span>
              <span className={cn(
                "font-bold font-serif text-foreground tracking-tight truncate transition-all",
                scrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl drop-shadow-sm"
              )}>
                Shatayu <span className="text-primary font-normal italic">Yoga</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 rounded-full backdrop-blur-md bg-foreground/5 border border-foreground/5 p-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-5 py-2 rounded-full text-[15px] font-semibold tracking-wide transition-all duration-300',
                      isActive
                        ? 'text-primary-foreground bg-primary shadow-md'
                        : 'text-foreground/80 hover:text-foreground hover:bg-foreground/10'
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-4 z-50">
              <Link
                href="/contact"
                className={cn(
                  "hidden md:flex items-center gap-2 rounded-full font-bold transition-all duration-300 active:scale-[0.98]",
                  scrolled
                    ? "px-5 py-2.5 bg-foreground text-background text-sm hover:shadow-lg hover:-translate-y-0.5"
                    : "px-6 py-3 bg-card/80 backdrop-blur-md border border-border/80 text-foreground text-[15px] shadow-sm hover:bg-primary/5 hover:border-primary/40"
                )}
              >
                Join Now
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                className={cn(
                  "lg:hidden touch-target flex items-center justify-center w-12 h-12 rounded-full transition-colors",
                  isMobileMenuOpen
                    ? "bg-primary/10 text-primary"
                    : scrolled
                      ? "bg-foreground/5 backdrop-blur-md text-foreground hover:bg-foreground/10"
                      : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
                )}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-3xl"
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-full h-[50vh] bg-gradient-to-bl from-primary/10 to-transparent -z-10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[80vw] h-[40vh] bg-gradient-to-tr from-emerald-500/10 to-transparent -z-10 blur-3xl pointer-events-none" />

            <div className="flex flex-col h-[100dvh] overflow-y-auto px-6 sm:px-10">

              {/* Spacer for fixed header */}
              <div className="h-32 shrink-0"></div>

              <nav className="flex flex-col gap-6 w-full max-w-sm mx-auto my-auto mt-4">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (0.08 * i), duration: 0.4, ease: "easeOut" }}
                      className="border-b border-foreground/5 pb-4"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-4">
                          <link.icon className={cn(
                            "w-6 h-6 transition-colors duration-300",
                            isActive ? "text-primary" : "text-foreground/40"
                          )} />
                          <span className={cn(
                            'text-3xl sm:text-4xl font-semibold tracking-tight transition-all duration-300',
                            isActive
                              ? 'text-primary'
                              : 'text-foreground/80 group-hover:text-foreground'
                          )}>
                            {link.name}
                          </span>
                        </div>

                        {/* Elegant Active Indicator / Arrow */}
                        <span className={cn(
                          "transition-all duration-300",
                          isActive ? "text-primary translate-x-0 opacity-100" : "text-foreground/20 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none"
                        )}>
                          <ArrowRight className="w-6 h-6" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (0.08 * navLinks.length), duration: 0.5 }}
                  className="mt-8 mb-12"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-center items-center w-full py-5 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold text-lg shadow-[0_10px_40px_rgba(217,119,6,0.3)] active:scale-[0.98] transition-transform"
                  >
                    Start Your Practice
                  </Link>
                </motion.div>

                {/* Minimal Footer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center pb-8 mt-auto"
                >
                  <p className="text-xs uppercase tracking-[0.2em] font-medium text-foreground/40">Shatayu Yoga</p>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
