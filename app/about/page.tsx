'use client';

import { Award, Heart, ShieldCheck, Sprout, Sparkles, Target, Zap, Waves } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SITE_CONTACT } from '@/lib/site-config';

export default function AboutPage() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    return (
        <div className="bg-background pb-32 overflow-hidden selection:bg-primary/20 selection:text-primary">

            {/* Standard Header Banner */}
            <section className="bg-secondary/30 pt-32 pb-14 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-28 border-b border-border/40 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 container-tight text-center"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-foreground mb-4 tracking-tight">About Us</h1>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
                        The philosophy and legacy behind Shatayu Yoga—dedicated to physical vitality and mental peace.
                    </p>
                </motion.div>
            </section>


            {/* Core Brand Pillars - Typography Focused Grid */}
            <section className="container-tight py-24 sm:py-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* The 4 Year Legacy */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 lg:col-span-2 bg-secondary/30 rounded-[3rem] p-10 sm:p-16 border border-border/40 relative overflow-hidden group will-change-[transform,opacity]"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Zap size={200} className="text-primary" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-7xl sm:text-9xl font-bold font-serif text-primary/20 leading-none mb-4 group-hover:text-primary/30 transition-colors">4+</h2>
                            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-foreground mb-6">Years of Dedicated Healing</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                                Founded with a mission to bridge ancient wisdom and modern living, Shatayu Yoga has evolved into a sanctuary for genuine physical and mental transformation. Our consistency in delivering high-quality online sessions has impacted hundreds of lives since inception.
                            </p>
                        </div>
                    </motion.div>

                    {/* Quick Stats / Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="bg-background border border-border/40 rounded-[2.5rem] p-8 flex-grow shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <ShieldCheck size={28} />
                            </div>
                            <h4 className="font-bold font-serif text-xl text-foreground mb-3">Certified Expertise</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">Internationally recognized certifications spanning Hatha, Vinyasa, and Restorative flows.</p>
                        </div>

                        <div className="bg-foreground text-background rounded-[2.5rem] p-8 flex-grow shadow-2xl">
                            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6">
                                <Sprout size={28} />
                            </div>
                            <h4 className="font-bold font-serif text-xl text-white mb-3">Holistic Growth</h4>
                            <p className="text-white/60 text-sm leading-relaxed">Focusing on long-term sustainability through breathwork, posture, and mental clarity.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section - Immersive Icons & Text */}
            <section className="bg-secondary/20 py-24 sm:py-32 relative overflow-hidden">
                <div className="container-tight relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold font-serif text-foreground tracking-tight mb-6">Our Philosophy</h2>
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                        {[
                            {
                                icon: Target,
                                title: 'Accessibility for All',
                                desc: 'Yoga is not just for the flexible. Modifications are provided for every single body type and experience level, ensuring anyone can start their journey today.'
                            },
                            {
                                icon: Waves,
                                title: 'Consistent Practice',
                                desc: 'Our 100% online model ensures you can maintain your practice no matter where you travel or how busy life gets. Continuity is key to lasting results.'
                            },
                            {
                                icon: ShieldCheck,
                                title: 'Safe Alignments',
                                desc: 'A massive focus on structural safety prevents injuries and heals existing joint pains over time. We prioritize long-term health over immediate depth.'
                            },
                            {
                                icon: Heart,
                                title: 'Compassionate Community',
                                desc: 'Healing happens better together. We foster a supportive environment where every student is encouraged at their own pace.'
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-6 group"
                            >
                                <div className="shrink-0 w-16 h-16 rounded-3xl bg-background border border-border/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500 shadow-sm group-hover:shadow-primary/20">
                                    <item.icon size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl sm:text-2xl font-bold font-serif text-foreground mb-3">{item.title}</h4>
                                    <p className="text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Brand Message Block - Creative Redesign */}
            <section className="py-20 sm:py-32 container-tight">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-[#f2f1e8] rounded-[3rem] p-12 sm:p-20 text-center relative overflow-hidden border border-border/10 shadow-[0_20px_50px_rgba(45,74,54,0.08)] group will-change-[transform,opacity,scale]"
                >
                    {/* Artistic Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#e8e6d9] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e8e6d9] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#2d4a36] tracking-tight leading-[1.15] relative z-10 mx-auto max-w-4xl mb-8">
                        तुमचा आरोग्यदायी शरीराचा प्रवास <br className="hidden sm:block" />
                        <span className="relative inline-block mt-2">
                            <span className="relative z-10 italic">आजच सुरू करा!</span>
                            <span className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-3 sm:h-4 bg-[#41947b]/20 -z-0 -rotate-1" />
                        </span>
                    </h2>

                    <p className="text-[#59695f] text-lg sm:text-xl max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed font-medium">
                        आता वाट कसली पाहताय? रोज फक्त १ तास स्वतःसाठी द्या आणि अनुभवा शरीरातला तो ऊर्जावान बदल. घरबसल्या मिळवा सर्वोत्तम आरोग्य. आजच माझ्या क्लासला जॉईन व्हा!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                        <a
                            href={SITE_CONTACT.getWhatsAppLink("नमस्कार शुभांगी मॅडम! मला तुमच्या योगा क्लासबद्दल माहिती हवी आहे. मी जॉईन कसा करू शकतो?")}
                            className="group/btn relative overflow-hidden inline-flex items-center gap-3 px-10 py-5 bg-[#2d4a36] text-white rounded-full font-bold text-lg hover:shadow-[0_10px_30px_rgba(45,74,54,0.3)] active:scale-95 transition-all duration-300 w-full sm:w-auto justify-center"
                        >
                            <span className="absolute inset-0 bg-[#41947b] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative z-10">आजच सुरु करा</span>
                            <Award size={22} className="relative z-10 text-[#f2f1e8] group-hover/btn:rotate-12 transition-transform duration-300" />
                        </a>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#41947b] opacity-80">
                            100% Online Classes
                        </span>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
