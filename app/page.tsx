'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles, Wind, Heart, Smile, MessageCircle, Calendar, Quote, CheckCircle2, Dumbbell, HeartPulse, ToyBrick, Users, Brain, Activity, Award, Star } from 'lucide-react';
import { SITE_CONTACT } from '@/lib/site-config';
import Hero from '@/components/hero';

const practices = [
  { title: 'Fitness', line: 'Strength & flow', img: '/assets/offerings/1.png', icon: Dumbbell },
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
  { title: 'Fitness Yoga', time: 'Mon–Sat · Morning & evening', img: '/assets/offerings/1.png', tag: 'Beginner ok' },
  { title: 'Therapeutic', time: 'Morning batches', img: '/assets/offerings/therapeutic.png', tag: 'Healing' },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-hidden selection:bg-primary/20 selection:text-primary">

      {/* HERO – Fresh, balanced, responsive in one frame */}
      <Hero />

      {/* Practices — mobile: 2 cards per frame, horizontal scroll */}
      <section className="py-8 sm:py-10 bg-secondary/20 border-y border-border/40">
        <div className="container-tight">
          <div className="flex items-center justify-between gap-4 mb-5">
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              Our Yoga Classes
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
                className="flex-shrink-0 w-[calc(50vw-1.5rem)] min-w-[140px] sm:w-auto sm:min-w-0 group will-change-[transform,opacity]"
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

      {/* Creative Instructor Typographic Feature Section & Testimonials */}
      <section className="py-20 overflow-hidden relative">
        <div className="absolute top-0 inset-x-0 w-full h-[150%] bg-gradient-to-b from-primary/5 via-transparent to-primary/5 -z-10 blur-3xl" />
        <div className="container-tight relative z-10 px-4">

          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Left side: Instructor Profile (takes up 3 columns on large screens) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-3 rounded-[2.5rem] bg-background/60 backdrop-blur-2xl border border-primary/20 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8 lg:p-12 relative overflow-hidden text-center h-full flex flex-col justify-center will-change-[transform,opacity]"
            >
              {/* Elegant Background Accents */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5DA89F]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              {/* Floating Quote Icon */}
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center text-primary shadow-md mb-8 relative z-10 backdrop-blur-md hover:rotate-6 hover:scale-110 transition-transform duration-500">
                <Quote className="w-6 h-6 -translate-y-0.5 translate-x-0.5" />
              </div>

              <h2 className="text-xl sm:text-2xl md:text-[28px] font-medium text-foreground leading-[1.4] text-balance mb-10 italic relative z-10 px-4 md:px-10">
                <span className="absolute -top-6 left-0 text-[80px] font-serif text-primary/10 pointer-events-none select-none hidden sm:block">"</span>
                मी आयुष मान्यताप्राप्त प्रमाणित योग शिक्षक, गेली 4 वर्षे ऑनलाईन योगा क्लासेस घेते आहे.
                <span className="absolute -bottom-16 right-0 text-[80px] font-serif text-primary/10 pointer-events-none select-none hidden sm:block">"</span>
              </h2>

              <div className="flex flex-col items-center relative z-10 mt-auto">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full mb-5" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Shubhangi Ghule
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mt-1 dark:text-[#E67E22]">
                  Shatayu Yoga Classes
                </p>

                {/* Credentials Pills */}
                <div className="flex flex-wrap gap-2.5 mt-6 justify-center">
                  <div className="px-3.5 py-1.5 rounded-full border border-border/80 bg-foreground/5 backdrop-blur-sm text-xs font-bold text-foreground shadow-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5F9EA0]"></span>
                    Flexible
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full border border-border/80 bg-foreground/5 backdrop-blur-sm text-xs font-bold text-foreground shadow-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22]"></span>
                    Be Calm
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side: Student Testimonials (takes up 2 columns on large screens) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:col-span-2 flex flex-col gap-6 will-change-[transform,opacity]"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold font-serif text-foreground flex items-center gap-2">
                  <Star className="w-5 h-5 fill-[#E67E22] text-[#E67E22]" />
                  Student Stories
                </h3>
                <Link href="/testimonials" className="text-xs font-bold text-primary hover:underline flex items-center gap-1 group">
                  View all <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Testimonial 1 - Compact */}
              <div className="bg-background/80 backdrop-blur-md border border-border/40 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <Quote size={16} className="text-primary/30 mb-2" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic line-clamp-4">
                  "Shubhangi's classes transformed my life! My stress levels dropped significantly, and I feel so much more energetic. The personalized attention makes all the difference."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    P
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold text-sm">Priya Sharma</h4>
                    <p className="text-primary/70 text-[10px] uppercase font-bold">Student</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 - Compact Marathi */}
              <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
                <Quote size={16} className="text-primary/40 mb-2" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-medium line-clamp-4">
                  "थोडे ध्यान घेतात.. प्राणायाम घेतात. योग निद्रा घेतात.. सर्वच खूप छान शिकवतात.. पूर्ण एक तासात बरोबर सर्व पूर्ण करतात..."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-background border border-primary/20 rounded-lg flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    A
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold text-sm">Anita Jadhav</h4>
                    <p className="text-primary/70 text-[10px] uppercase font-bold">Student</p>
                  </div>
                </div>
              </div>

            </motion.div>
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
            className="max-w-3xl mx-auto rounded-[3.5rem] bg-background/40 backdrop-blur-3xl border border-primary/10 shadow-[0_30px_100px_rgba(0,0,0,0.08)] p-10 sm:p-20 text-center relative overflow-hidden group will-change-[transform,opacity,scale]"
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DA89F] to-[#5EA8E6] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
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
        <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-[#5DA89F]/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] bg-[#E67E22]/10 rounded-full blur-[100px]" />

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
              <span className="bg-gradient-to-r from-[#5DA89F] to-[#5EA8E6] bg-clip-text text-transparent">
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
                { text: "सर्व वयोगटांसाठी सोपे आणि प्रभावी योगासन", icon: Users },
                { text: "प्राणायाम व ध्यानाने ताणमुक्त जीवन", icon: Brain },
                { text: "वजन नियंत्रण आणि लवचिक शरीर", icon: Activity }
              ].map((item, i) => (
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
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base font-medium text-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>

            {/* Strong CTA Button */}
            <div className="flex flex-col items-center gap-4 mt-8">
              <p className="text-lg sm:text-xl font-medium text-foreground">
                Get the best health from home
              </p>
              <motion.a
                href={SITE_CONTACT.getWhatsAppLink(
                  "Namaste! I want to join your online yoga classes. Please share batch details."
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center justify-center gap-3 px-10 h-14 rounded-full text-base font-bold text-white overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#5DA89F] to-[#5EA8E6] animate-[pulse_4s_ease-in-out_infinite]" />
                <span className="relative z-10 flex items-center gap-2">
                  Join my class today!
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.a>
            </div>

          </motion.div>
        </div>
      </section>

    </div >
  );
}
