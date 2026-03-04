'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Award, Clock } from 'lucide-react'
import { SITE_CONTACT } from '@/lib/site-config'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FFFBF2] text-[#2F4343]">

      {/* BACKGROUND IMAGE - placed in the background as requested */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-posed.png"
          alt="Yoga instructor"
          fill
          priority
          className="object-cover object-top sm:object-center opacity-30 mix-blend-multiply"
        />
      </div>

      {/* DYNAMIC BACKGROUND GRADIENTS / OVERLAY */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FFFBF2]/90 via-[#FFFBF2]/60 to-[#FFFBF2]/30 pointer-events-none" />

      {/* Floating organic dynamic accents */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#5DA89F]/30 blur-[130px] pointer-events-none z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#E67E22]/20 blur-[140px] pointer-events-none z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 container-tight px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[70vh]">

        {/* LEFT COLUMN: Typographic Focus */}
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start z-10">

          {/* Headline Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-2xl"
          >
            <Image
              src="/assets/123.png"
              alt="योग – शरीर आणि मनाचा सुंदर संगम"
              width={800}
              height={300}
              className="w-full h-auto drop-shadow-md"
              priority
            />
          </motion.div>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-lg sm:text-xl text-[#2F4343]/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-lite"
          >
            Discover balance through guided yoga, pranayam, and meditation
            designed to transform your body and mind.

            <span className="block mt-4 text-[#E67E22] text-xl drop-shadow-sm font-medium">
              घरबसल्या मिळवा उत्तम आरोग्य – आजच जॉईन व्हा!
            </span>
          </motion.p>

        </div>

        {/* RIGHT COLUMN: Interactive & Stats Focus */}
        <div className="flex flex-col items-center lg:items-end w-full space-y-8 z-10">

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-[#5DA89F]/20 rounded-3xl p-8 shadow-2xl flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold text-[#2F4343] text-center lg:text-left border-b border-[#5DA89F]/10 pb-4">
              Start Your Journey
            </h3>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4 w-full">
              <a
                href={SITE_CONTACT.getWhatsAppLink(
                  'Namaste! I want to join Shatayu Yoga classes.'
                )}
                className="group relative flex items-center justify-center h-16 w-full rounded-2xl bg-gradient-to-r from-[#5DA89F] to-[#5EA8E6] text-[#FFFBF2] font-bold text-lg shadow-[0_10px_30px_rgba(93,168,159,0.2)] hover:shadow-[0_15px_40px_rgba(93,168,159,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center">
                  Join a Batch
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </a>

              <Link
                href="/classes"
                className="flex items-center justify-center h-16 w-full rounded-2xl border border-[#5DA89F]/30 bg-[#5DA89F]/5 hover:bg-[#5DA89F]/10 text-[#5DA89F] font-bold text-lg transition-all duration-300"
              >
                Explore Classes
              </Link>
            </div>

            {/* Stats list */}
            <div className="mt-4 flex flex-col gap-4 text-sm font-bold tracking-wide text-[#2F4343]">
              <div className="flex items-center gap-4 bg-white/90 p-3 rounded-xl border border-[#5DA89F]/10 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#E67E22]/10 border border-[#E67E22]/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#E67E22]" />
                </div>
                <span>Government AYUSH Certified</span>
              </div>

              <div className="flex items-center gap-4 bg-white/90 p-3 rounded-xl border border-[#5DA89F]/10 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#5DA89F]/10 border border-[#5DA89F]/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#5DA89F]" />
                </div>
                <span>4+ Years of Expert Experience</span>
              </div>

              <div className="flex items-center gap-4 bg-white/90 p-3 rounded-xl border border-[#5DA89F]/10 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#5EA8E6]/10 border border-[#5EA8E6]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#5EA8E6]" />
                </div>
                <span>Flexible Daily Online Batches</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}