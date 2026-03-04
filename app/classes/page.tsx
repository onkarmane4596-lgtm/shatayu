'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Users, CalendarDays, ArrowRight, Sunrise, Sunset, Dumbbell, HeartPulse, ToyBrick, Smile, Wind } from 'lucide-react';
import { SITE_CONTACT } from '@/lib/site-config';

const classes = [
    { id: '01', title: 'Fitness Yoga Batch', icon: Dumbbell, type: 'Dynamic Body Strength', desc: 'An intense sequence designed to build physical strength, flexibility, and cardiovascular endurance.', time: '45 Mins', level: 'Intermediate', img: '/assets/offerings/1.png' },
    { id: '02', title: 'Therapeutic Yoga Batch', icon: HeartPulse, type: 'Healing & Alignment', desc: 'Tailored sequences for joint mobility, pain relief (back, neck, knees), and postural correction.', time: '60 Mins', level: 'All Levels', img: '/assets/offerings/therapeutic.png' },
    { id: '03', title: "Kid's Yoga Batch", icon: ToyBrick, type: 'Fun & Focus', desc: 'Age-appropriate yoga and mindfulness to build focus, flexibility, and calm in children.', time: '30 Mins', level: 'Kids', img: '/assets/offerings/kids.png' },
    { id: '04', title: "Women's Special Face Yoga Batch", icon: Smile, type: 'Radiance & Rejuvenation', desc: 'Targeted facial exercises for collagen support, jaw release, and natural glow.', time: '20 Mins', level: 'All Levels', img: '/assets/offerings/face.png' },
    { id: '05', title: 'Meditation & Pranayam Batch', icon: Wind, type: 'Breath & Consciousness', desc: 'Breathing techniques and meditation to down-regulate the nervous system and deepen practice.', time: '30 Mins', level: 'All Levels', img: '/assets/offerings/pranayam.png' }
];

export default function ClassesPage() {
    return (
        <div className="bg-secondary/20 pb-32 overflow-hidden selection:bg-primary/20 selection:text-primary">

            {/* Standard Header Banner with smooth fade in */}
            <section className="bg-background pt-32 pb-14 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-28 border-b border-border/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 container-tight text-center"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-foreground mb-4 tracking-tight">Our Classes</h1>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
                    <p className="mt-6 sm:mt-8 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                        Structured programs for physical vitality and mental peace. All classes 100% online.
                    </p>
                </motion.div>
            </section>

            {/* Classes Grid with Staggered Entrance and deep hover shadows */}
            <section className="container-tight py-12 sm:py-20 lg:py-24">
                {/* Horizontal Scroll Indicator for Mobile */}
                <div className="flex items-center gap-2 mb-6 lg:hidden px-4">
                    <div className="flex gap-1">
                        <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowRight size={16} className="text-primary" />
                        </motion.div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">Swipe to explore</span>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                    className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide lg:mx-0 lg:px-0 lg:grid lg:grid-cols-2 gap-6 lg:gap-10"
                >
                    {classes.map((cls, idx) => (
                        <motion.div
                            key={idx}
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                            className="flex-shrink-0 w-[85vw] sm:w-[480px] lg:w-auto flex flex-col sm:flex-row bg-background border border-border/40 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden hover:-translate-y-2 will-change-[transform,opacity]"
                        >

                            {/* Image Half */}
                            <div className="relative sm:w-[42%] h-72 sm:h-auto shrink-0 overflow-hidden">
                                <Image
                                    src={cls.img}
                                    alt={cls.title}
                                    fill
                                    className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700 ease-out"
                                />
                                {/* Subtle inner shadow overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Content Half */}
                            <div className="p-6 sm:p-7 sm:w-[58%] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <cls.icon size={18} />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-foreground group-hover:text-primary transition-colors leading-tight">{cls.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                                        {cls.desc}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-3 text-foreground/80 text-xs font-medium mb-6 p-2.5 bg-secondary/30 rounded-2xl border border-border/40">
                                        <span className="flex items-center gap-1.5 bg-background px-2.5 py-1 rounded-full border border-border/20"><Clock size={14} className="text-primary" /> {cls.time}</span>
                                        <span className="flex items-center gap-1.5 bg-background px-2.5 py-1 rounded-full border border-border/20"><Users size={14} className="text-primary" /> {cls.level}</span>
                                    </div>
                                </div>

                                <a
                                    href={SITE_CONTACT.getWhatsAppLink(`Hi! I'm interested in the ${cls.title}. Please share the details and how to join.`)}
                                    className="inline-flex flex-wrap items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-primary/70 transition-colors group/btn w-fit"
                                >
                                    <span className="relative overflow-hidden inline-block pb-1">
                                        Join Our Batch
                                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                                    </span>
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Batch Timings Section (Updated per user request) */}
            <section className="bg-background py-16 sm:py-20 px-4 sm:px-6 mx-2 sm:mx-4 md:mx-6 rounded-3xl sm:rounded-[2rem] shadow-lg border border-border/40 relative overflow-hidden">
                <div className="absolute -top-32 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="max-w-[1000px] mx-auto relative z-10 container-tight">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-foreground mb-4 tracking-tight">Batch Timings</h2>
                        <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 max-w-6xl mx-auto"
                    >
                        {[
                            { session: 'Morning', time: '5:30 – 6:30 AM' },
                            { session: 'Morning', time: '6:00 – 7:00 AM' },
                            { session: 'Morning', time: '8:00 – 9:00 AM' },
                            { session: 'Morning', time: '9:00 – 10:00 AM' },
                            { session: 'Evening', time: '6:00 – 7:00 PM' }
                        ].map((item, idx) => {
                            const Icon = item.session === 'Morning' ? Sunrise : Sunset;
                            return (
                                <motion.div
                                    key={idx}
                                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                                    whileHover={{ y: -5, borderColor: 'hsl(var(--primary))' }}
                                    className="group relative flex flex-col items-center justify-center p-6 rounded-[1.5rem] bg-card/40 backdrop-blur-xl border border-border/80 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 w-full aspect-square sm:aspect-auto sm:min-h-[160px] will-change-[transform,opacity]"
                                >
                                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner group-hover:rotate-12">
                                        <Icon size={18} />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-1.5">{item.session}</span>
                                    <span className="text-sm font-bold text-foreground text-center leading-tight">
                                        {item.time}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-20 text-center"
                    >
                        <p className="text-muted-foreground mb-8 font-medium text-lg">Have specific timing requirements? Our schedules accommodate various timezones.</p>
                        <a
                            href={SITE_CONTACT.getWhatsAppLink("Namaste Shubhangi! I'm interested in your yoga classes but need a specific schedule. Do you have other timings available?")}
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-full hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 text-sm sm:text-base"
                        >
                            <CalendarDays size={20} className="group-hover:scale-110 transition-transform" />
                            Request Specific Schedule
                        </a>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
