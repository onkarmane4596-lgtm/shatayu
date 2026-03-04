import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageCircle, ChevronRight } from 'lucide-react';
import { SITE_CONTACT, SITE_SERVICES, SITE_TAGLINE } from '@/lib/site-config';

export function Footer() {
    return (
        <footer className="bg-foreground relative pt-20 pb-10 overflow-hidden">
            {/* Premium Gold Header Border */}
            <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />

            {/* Subtle Texture/Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="container-tight relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="group inline-flex items-center gap-4 transition-transform duration-300 font-sans">
                            <span className="relative w-14 h-14 flex-shrink-0 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden border border-white transition-all duration-500 group-hover:scale-105">
                                <Image src="/logo.png" alt="Shatayu Logo" width={56} height={56} className="object-contain w-11 h-11" unoptimized />
                            </span>
                            <div className="flex flex-col">
                                <span className="text-2xl font-serif font-bold text-white tracking-tight leading-none">
                                    Shatayu <span className="text-emerald-400 font-normal">Yoga</span>
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-400/80 mt-1 font-bold">
                                    {SITE_TAGLINE}
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm leading-relaxed text-white/80 max-w-xs font-medium">
                            Step into a comfortable sanctuary designed for total balance, harmony, and profound energy renewal.
                        </p>

                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, label: 'Facebook', href: SITE_CONTACT.facebook },
                                { icon: Youtube, label: 'YouTube', href: SITE_CONTACT.youtube },
                                { icon: Instagram, label: 'Instagram', href: SITE_CONTACT.instagram }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="text-white font-serif text-lg font-bold mb-8 relative inline-block">
                            Quick Explorer
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary/40 rounded-full" />
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: 'Go to Home', href: '/' },
                                { label: 'Explore Classes', href: '/classes' },
                                { label: 'Our Story', href: '/about' },
                                { label: 'What Students Say', href: '/testimonials' },
                                { label: 'Contact Us', href: '/contact' },
                            ].map(({ label, href }) => (
                                <li key={href}>
                                    <Link href={href} className="group text-sm text-white/80 hover:text-emerald-400 transition-colors flex items-center gap-2">
                                        <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-white font-serif text-lg font-bold mb-8 relative inline-block">
                            Healing Services
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary/40 rounded-full" />
                        </h4>
                        <ul className="space-y-4">
                            {SITE_SERVICES.map((name) => (
                                <li key={name}>
                                    <Link href="/classes" className="group text-sm text-white/80 hover:text-emerald-400 transition-colors flex items-center gap-2">
                                        <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Reach Us Column */}
                    <div className="space-y-12">
                        <div>
                            <h4 className="text-white font-serif text-lg font-bold mb-8 relative inline-block">
                                Reach Us
                                <span className="absolute -bottom-2 left-0 w-8 h-[3px] bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            </h4>
                            <ul className="space-y-5">
                                <li className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                        <Phone size={18} />
                                    </div>
                                    <a href={SITE_CONTACT.telLink} className="text-sm font-bold text-white/95 group-hover:text-emerald-400 transition-colors">
                                        {SITE_CONTACT.phoneFull}
                                    </a>
                                </li>
                                <li className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                        <Mail size={18} />
                                    </div>
                                    <a href={SITE_CONTACT.mailtoLink} className="text-sm font-bold text-white/95 group-hover:text-emerald-400 transition-colors break-all">
                                        {SITE_CONTACT.email}
                                    </a>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 mt-0.5 shrink-0">
                                        <MapPin size={18} />
                                    </div>
                                    <span className="text-sm text-white/80 leading-relaxed font-medium">
                                        {SITE_CONTACT.address}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-serif text-sm font-bold uppercase tracking-[0.2em] mb-6 text-emerald-400/80">
                                Practice Hours
                            </h4>
                            <ul className="space-y-3 text-xs font-semibold">
                                <li className="flex justify-between items-center text-white/60 border-b border-white/5 pb-2">
                                    <span>Mon — Fri</span>
                                    <span className="text-white/90">5:30 AM – 7:00 PM</span>
                                </li>
                                <li className="flex justify-between items-center text-white/60">
                                    <span>Sat — Sun</span>
                                    <span className="text-emerald-400/90">Morning Only / Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                        &copy; {new Date().getFullYear()} Shatayu Yoga • <span className="text-emerald-400/80">Divine Harmony</span>
                    </p>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 animate-pulse" />
                            Global Live Sessions
                        </div>
                        <a
                            href={SITE_CONTACT.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-bold uppercase tracking-wider text-[#25D366] hover:brightness-125 transition-all flex items-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp Community
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
