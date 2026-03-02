'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles, Wind, Heart, Smile, MessageCircle, Calendar, Quote, Clock, CheckCircle2, Dumbbell, HeartPulse, ToyBrick } from 'lucide-react';
import { SITE_CONTACT } from '@/lib/site-config';

const practices = [
  { title: 'Fitness', line: 'Strength & flow', img: '/assets/offerings/fitness.png', icon: Dumbbell },
  { title: 'Therapeutic', line: 'Heal & align', img: '/assets/offerings/therapeutic.png', icon: HeartPulse },
  { title: 'Pranayama', line: 'Breath & calm', img: '/assets/offerings/pranayam.png', icon: Wind },
  { title: 'Face Yoga', line: 'Glow & release', img: '/assets/offerings/face.png', icon: Smile },
  { title: 'Kids Yoga', line: 'Fun & focus', img: '/assets/offerings/kids.png', icon: ToyBrick },
];

const why = [
  { label: 'Live online', short: 'Join from anywhere' },
  { label: 'Expert-led', short: 'Certified instructor' },
  { label: 'Your pace', short: 'Beginner to advanced' },
];

const featured = [
  { title: 'Fitness Yoga', time: 'Mon–Sat · Morning & evening', img: '/assets/offerings/fitness.png', tag: 'Beginner ok' },
  { title: 'Therapeutic', time: 'Morning batches', img: '/assets/offerings/therapeutic.png', tag: 'Healing' },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-hidden selection:bg-primary/20 selection:text-primary">

      {/* Premium Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-start pt-[80px] sm:pt-32 pb-8 overflow-hidden">
        {/* Abstract atmospheric background glow */}
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-primary/5 via-background to-background -z-10 pointer-events-none" />

        {/* Animated Background Orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[30%] -right-[20%] w-[70vw] max-w-[800px] aspect-square rounded-full bg-gradient-to-bl from-amber-200/20 to-rose-200/20 blur-[120px] -z-10"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[20%] w-[60vw] max-w-[700px] aspect-square rounded-full bg-gradient-to-tr from-emerald-200/20 to-teal-200/20 blur-[100px] -z-10"
        />

        <div className="container-tight px-4 sm:px-6 relative z-10 w-full flex flex-col items-center text-center flex-1 max-h-screen">

          {/* Main Text Content */}
          <div className="max-w-4xl mx-auto pt-0 mb-6 sm:mb-8 relative z-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tight text-foreground leading-[1] drop-shadow-sm mb-6 sm:mb-8"
            >
              Better Health. Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-600 to-teal-600 font-serif italic pr-2">Day.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="/classes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 sm:h-14 px-8 sm:px-10 text-[15px] sm:text-base font-bold rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,80,40,0.2)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                Join Our Classes
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 sm:h-14 px-8 sm:px-10 text-[15px] sm:text-base font-bold rounded-full border-2 border-border/80 text-foreground bg-card/60 backdrop-blur-md hover:bg-primary/5 hover:border-primary/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                Book a Session
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Full-Bleed Image Container - Placed outside the padded container-tight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative z-10 flex-1 min-h-0 flex items-end justify-center mt-6"
        >
          {/* Creative Massive Foreground Typography (Shatayu Marquee) - Floating OVER the image */}
          <div className="absolute top-[25%] md:top-[35%] w-full overflow-hidden flex items-center z-30 pointer-events-none select-none my-auto mix-blend-overlay">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: "-50%", opacity: 1 }}
              transition={{
                x: { duration: 40, repeat: Infinity, ease: "linear" },
                opacity: { duration: 1.5, delay: 0.4, ease: "easeOut" }
              }}
              className="flex whitespace-nowrap"
            >
              <h2 className="text-[28vw] md:text-[20vw] lg:text-[22vw] xl:text-[300px] font-black uppercase tracking-[0.25em] pl-[0.25em] pr-32 text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.6)] dark:[-webkit-text-stroke:2px_rgba(255,255,255,0.3)] drop-shadow-lg leading-none">
                Shatayu
              </h2>
              <h2 className="text-[28vw] md:text-[20vw] lg:text-[22vw] xl:text-[300px] font-black uppercase tracking-[0.25em] pl-[0.25em] pr-32 text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.6)] dark:[-webkit-text-stroke:2px_rgba(255,255,255,0.3)] drop-shadow-lg leading-none">
                Shatayu
              </h2>
            </motion.div>
          </div>

          {/* The Hero Image (Mobile Specific - Modern & Floating) */}
          <div className="relative w-full h-[45vh] sm:h-[50vh] max-h-[500px] flex items-end justify-center z-20 md:hidden pb-4">
            {/* Elegant Divine Aura (Pulsating Glow) */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-primary/30 via-amber-500/10 to-transparent blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative w-[95%] sm:w-[85%] h-full z-10"
            >
              <Image
                src="/assets/hero-mobile.png"
                alt="Yoga practice — balance and mindfulness"
                fill
                className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] pointer-events-none"
                priority
                sizes="(max-width: 768px) 100vw, 0vw"
              />
            </motion.div>
          </div>

          {/* The Hero Image (Desktop Original - Edge to Edge) */}
          <div className="relative w-full h-[55vh] md:h-[60vh] lg:h-[70vh] max-h-[900px] flex items-end justify-center z-20 hidden md:flex">
            <Image
              src="/assets/hero-posed-1.png"
              alt="Yoga practice — balance and mindfulness"
              fill
              className="object-contain object-bottom drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)] hover:scale-[1.03] transition-transform duration-[2000ms] ease-out"
              priority
              sizes="100vw"
              quality={100}
            />
          </div>

          {/* Seamless Bottom Edge Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-background/95 via-background/40 to-transparent z-20 pointer-events-none opacity-90" />

          {/* Decorative Zen Circles */}
          <div className="absolute top-[40%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-0 pointer-events-none opacity-40 mix-blend-overlay">
            <div className="absolute w-[250px] md:w-[500px] lg:w-[700px] aspect-square rounded-full border-[1.5px] border-primary/30 border-dashed animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[350px] md:w-[700px] lg:w-[950px] aspect-square rounded-full border-[1px] border-emerald-500/20 border-solid animate-[spin_60s_linear_infinite_reverse]" />
          </div>

          {/* Trust & Social Proof Badges - Prominently Displayed (Constrained to container width invisibly) */}
          <div className="absolute inset-0 max-w-[1400px] mx-auto w-full pointer-events-none z-40 hidden md:block">
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="absolute bottom-12 left-8 lg:left-16 pointer-events-auto bg-card/95 backdrop-blur-xl border border-white/20 shadow-[0_12px_40px_rgb(0,0,0,0.15)] rounded-2xl p-4 flex items-center gap-4"
            >
              <div className="flex -space-x-3 isolate">
                {['/assets/pose-lunge.png', '/assets/pose-lotus.png', '/assets/pose-meditation.png'].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary overflow-hidden shrink-0 relative flex items-center justify-center">
                    <Image src={src} fill alt="Student" className="object-cover !scale-125 pt-2 opacity-90 mix-blend-multiply" sizes="40px" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs z-10">4+</div>
              </div>
              <div className="text-left">
                <div className="flex text-amber-500 mb-0.5" aria-label="5 stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-xs font-semibold text-foreground">Years of Expertise</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 1 }}
              className="absolute top-12 right-8 lg:right-16 pointer-events-auto bg-card/95 backdrop-blur-xl border border-white/20 shadow-[0_12px_40px_rgb(0,0,0,0.15)] rounded-2xl p-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Wind className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-left pr-2">
                <h4 className="text-sm font-bold text-foreground leading-tight">Live Classes</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Join from anywhere</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Practices — mobile: 2 cards per frame, horizontal scroll */}
      < section className="py-8 sm:py-10 bg-secondary/20 border-y border-border/40" >
        <div className="container-tight">
          <div className="flex items-center justify-between gap-4 mb-5">
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              What we offer
            </h2>
            <Link href="/classes" className="text-xs font-bold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1">
              All classes <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Horizontal Scroll Indicator for Mobile */}
          <div className="flex items-center gap-2 mb-6 sm:hidden">
            <div className="flex gap-1">
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={14} className="text-primary" />
              </motion.div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">Swipe to explore</span>
          </div>

          {/* Mobile: 2 cards per frame, horizontal scroll. Desktop: grid. Images fit properly in fixed aspect. */}
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:overflow-visible">
            {practices.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex-shrink-0 w-[calc(50vw-1.5rem)] min-w-[140px] sm:w-auto sm:min-w-0 group"
              >
                <Link
                  href="/classes"
                  className="block rounded-2xl overflow-hidden border border-border/80 bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 active:scale-[0.98]"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-sm font-bold text-foreground truncate">{item.title}</p>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">{item.line}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Why us — 3 small pills */}
      < section className="py-8 sm:py-10" >
        <div className="container-tight">
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {why.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary/40 border border-border/40 text-center"
              >
                <Leaf className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="text-xs font-medium text-foreground">{item.short}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section >

      {/* Creative Instructor Typographic Feature Section */}
      <section className="py-20 overflow-hidden relative">
        <div className="absolute top-0 inset-x-0 w-full h-[150%] bg-gradient-to-b from-primary/5 via-transparent to-primary/5 -z-10 blur-3xl" />
        <div className="container-tight relative z-10 px-4">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto rounded-[2.5rem] bg-background/60 backdrop-blur-2xl border border-primary/20 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8 lg:p-12 relative overflow-hidden text-center"
          >
            {/* Elegant Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Floating Quote Icon */}
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center text-primary shadow-md mb-8 relative z-10 backdrop-blur-md hover:rotate-6 hover:scale-110 transition-transform duration-500">
              <Quote className="w-6 h-6 -translate-y-0.5 translate-x-0.5" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-[28px] font-medium text-foreground leading-[1.4] text-balance mb-10 italic relative z-10 px-4 md:px-10">
              <span className="absolute -top-6 left-0 text-[80px] font-serif text-primary/10 pointer-events-none select-none hidden sm:block">"</span>
              मी आयुष मान्यताप्राप्त प्रमाणित योग शिक्षक, गेली 4 वर्षे ऑनलाईन योगा क्लासेस घेते आहे.
              <span className="absolute -bottom-16 right-0 text-[80px] font-serif text-primary/10 pointer-events-none select-none hidden sm:block">"</span>
            </h2>

            <div className="flex flex-col items-center relative z-10">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full mb-5" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Shubhangi Ghule
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mt-1 dark:text-amber-400">
                Shatayu Yoga Classes
              </p>

              {/* Credentials Pills */}
              <div className="flex flex-wrap gap-2.5 mt-6 justify-center">
                <div className="px-3.5 py-1.5 rounded-full border border-border/80 bg-foreground/5 backdrop-blur-sm text-xs font-bold text-foreground shadow-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  AYUSH Certified
                </div>
                <div className="px-3.5 py-1.5 rounded-full border border-border/80 bg-foreground/5 backdrop-blur-sm text-xs font-bold text-foreground shadow-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  4+ Years Online Expert
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured classes — 2 Premium Cards */}
      <section className="py-12 sm:py-16 bg-foreground text-background relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-tight relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Popular Classes
            </h2>
            <div className="h-px bg-gradient-to-r from-primary/40 to-transparent flex-1" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {featured.map((cls, i) => (
              <motion.div
                key={cls.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <a
                  href={SITE_CONTACT.getWhatsAppLink(`Hi! I'm interested in the ${cls.title}. Please share the details and how to join.`)}
                  className="group flex rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-primary/5 relative cursor-pointer block"
                >
                  {/* Hover Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative w-32 sm:w-40 h-40 sm:h-52 flex-shrink-0 bg-black/20 overflow-hidden">
                    <Image
                      src={cls.img}
                      alt={cls.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 128px, 160px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 mix-blend-multiply pointer-events-none" />
                  </div>

                  <div className="flex flex-col justify-center p-4 sm:p-6 min-w-0 flex-1 relative">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1 block">
                      {cls.tag}
                    </span>
                    <p className="text-base sm:text-xl font-bold text-white truncate mb-1.5 group-hover:text-primary transition-colors duration-300">
                      {cls.title}
                    </p>
                    <p className="text-xs sm:text-sm text-white/80 truncate mb-4 font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 opacity-80" />
                      {cls.time}
                    </p>

                    {/* Animated Button Pill */}
                    <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 group-hover:text-primary transition-colors duration-300">
                      <span>Inquire Now</span>
                      <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:translate-x-1 transition-all duration-300">
                        <ArrowRight className="w-3 h-3 text-current" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Premium Zen Footer Call-to-Action */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-secondary/20">
        {/* Artistic Background Geometry */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-40">
          <div className="absolute inset-0 rounded-full border border-primary/10 animate-spin-slow" />
          <div className="absolute inset-10 rounded-full border border-primary/5 animate-spin-slow [animation-direction:reverse]" />
          <div className="absolute inset-20 rounded-full border border-primary/10 animate-spin-slow" />
        </div>

        {/* Abstract Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-tight relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto rounded-[3.5rem] bg-background/40 backdrop-blur-3xl border border-primary/10 shadow-[0_30px_100px_rgba(0,0,0,0.08)] p-10 sm:p-20 text-center relative overflow-hidden group"
          >
            {/* Inner Interactive Light */}
            <div className="absolute -top-[50%] -left-[50%] w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-[100px] group-hover:translate-x-10 group-hover:translate-y-10 transition-transform duration-1000" />

            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                y: [0, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 items-center justify-center mb-10 shadow-inner relative z-10"
            >
              <Leaf className="w-10 h-10 text-primary opacity-90" />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground leading-[1.1] mb-6 relative z-10">
              Start your <span className="italic text-primary">Yoga</span> practice today
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground/90 max-w-lg mx-auto mb-12 relative z-10 leading-relaxed">
              Experience the perfect harmony of mind, body, and soul. Join our live classes from the comfort of your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href={SITE_CONTACT.getWhatsAppLink("Namaste Shubhangi! I'm interested in joining your Yoga classes. Can you provide more details about the batches?")}
                className="group/btn relative inline-flex items-center justify-center gap-3 h-14 px-8 text-sm font-bold rounded-full bg-foreground text-background hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                <MessageCircle className="w-5 h-5 shrink-0 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span className="relative z-10 group-hover/btn:tracking-wider transition-all duration-300">WhatsApp Inquiry</span>
              </a>

              <Link
                href="/contact"
                className="group/btn inline-flex items-center justify-center gap-3 h-14 px-8 text-sm font-bold rounded-full border border-primary/20 bg-primary/5 text-foreground hover:bg-primary/10 hover:border-primary/40 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
                <Calendar className="w-5 h-5 shrink-0 relative z-10 group-hover/btn:-rotate-6 transition-transform duration-300" />
                <span className="relative z-10 font-bold">Book a Session</span>
              </Link>
            </div>

            {/* Subtle subtext */}
            <p className="mt-10 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-primary/40 relative z-10">
              Online Certified Training • Available Worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impactful Final Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-secondary/20">

        {/* Ambient Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-[100px]" />

        <div className="container-tight relative z-10 px-4">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Yoga – A{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Beautiful Union
              </span>{" "}
              of Body and Mind
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
              Discover strength, flexibility, inner calm, and holistic wellness through structured online yoga sessions designed for every age group.
            </p>

            {/* Benefit Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-16">

              {[
                "Simple and effective yoga postures for all age groups",
                "Stress-free living through Pranayama and meditation",
                "Special guidance for weight management and improved flexibility"
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-2xl border border-border/60 bg-card/70 backdrop-blur-xl p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base font-medium text-foreground leading-relaxed">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>

            {/* Strong CTA Button */}
            <motion.a
              href={SITE_CONTACT.getWhatsAppLink(
                "Namaste! I want to join your online yoga classes. Please share batch details."
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center justify-center gap-3 px-10 h-14 rounded-full text-base font-bold text-white overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-500 to-teal-500 animate-[pulse_4s_ease-in-out_infinite]" />
              <span className="relative z-10 flex items-center gap-2">
                Get the best health from home – Join my class today!
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.a>

          </motion.div>
        </div>
      </section>

    </div >
  );
}
