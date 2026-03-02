'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, MessageCircle, ChevronDown } from 'lucide-react';
import { SITE_CONTACT, SITE_SERVICES } from '@/lib/site-config';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const batch = formData.get('batch') as string;
        const message = formData.get('message') as string;

        const whatsappMessage = `Namaste Shubhangi! 🙏\n\n*Inquiry from Website*\n\n*Name:* ${name}\n*Interested Batch:* ${batch === 'general' ? 'General Inquiry' : batch}\n*Message:* ${message || 'No additional message.'}`;

        const waLink = SITE_CONTACT.getWhatsAppLink(whatsappMessage);

        setTimeout(() => {
            setIsSubmitting(false);
            window.open(waLink, '_blank');
            setSuccess(true);
            setTimeout(() => setSuccess(false), 5000);
        }, 1200);
    };

    return (
        <div className="bg-secondary/20 pb-32 min-h-screen relative overflow-hidden selection:bg-primary/20 selection:text-primary">

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <section className="bg-background py-14 sm:py-20 lg:py-28 border-b border-border/40 relative z-10 shadow-sm">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container-tight text-center"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-foreground mb-4 tracking-tight">Contact Us</h1>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
                    <p className="mt-6 sm:mt-8 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                        Questions about classes or schedule? Reach out or use the form below.
                    </p>
                </motion.div>
            </section>

            <section className="container-tight py-16 sm:py-20 lg:py-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Detailed Info Contact Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-foreground mb-4 sm:mb-6 tracking-tight">Get in Touch</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Whether you are a beginner looking to start your journey or an experienced practitioner seeking guidance, we are here to support you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Phone, title: 'Call Us', desc: 'Available Mon–Sat', link: SITE_CONTACT.telLink, linkText: SITE_CONTACT.phoneFull },
                                { icon: Mail, title: 'Email Us', desc: 'For inquiries', link: SITE_CONTACT.mailtoLink, linkText: SITE_CONTACT.email },
                                { icon: MessageCircle, title: 'Join Our WhatsApp Community', desc: 'Chat or join the community', link: SITE_CONTACT.getWhatsAppLink("Namaste Shubhangi! I'd like to join the Shatayu Yoga community or ask a few questions about the classes."), linkText: 'Open WhatsApp' },
                                { icon: MapPin, title: 'Visit Us', desc: SITE_CONTACT.address, link: undefined, linkText: undefined, badge: 'In-person & online classes' }
                            ].map((info, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="group flex gap-4 sm:gap-6 items-center p-5 sm:p-6 bg-background border border-border/40 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md hover:border-border transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-secondary/50 rounded-full flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        <info.icon size={24} className={idx < 2 || true ? "text-primary group-hover:text-primary-foreground transition-colors" : ""} />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-bold font-serif mb-1.5 text-lg">{info.title}</h4>
                                        <p className="text-muted-foreground text-sm mb-2">{info.desc}</p>
                                        {info.link ? (
                                            <a href={info.link} className="text-primary font-bold hover:underline" target={info.link.startsWith('http') ? '_blank' : undefined} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}>{info.linkText}</a>
                                        ) : (
                                            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{info.badge}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Glowing Form Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-background border border-border/40 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-500 relative overflow-hidden"
                    >
                        {/* Soft inner glow on the form card */}
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 opacity-50" />

                        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-foreground mb-6 sm:mb-8 tracking-tight">Send a Message</h3>

                        {success ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-20 text-center space-y-6"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                                >
                                    <CheckCircle size={64} className="text-primary drop-shadow-md" />
                                </motion.div>
                                <h4 className="text-2xl font-bold font-serif text-foreground">Opening WhatsApp!</h4>
                                <p className="text-muted-foreground text-lg">Your inquiry has been prepared.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="block text-foreground font-bold text-xs uppercase tracking-wider pl-1">Your Name *</label>
                                    <input name="name" required className="w-full bg-secondary/20 border border-primary/20 text-foreground p-3.5 sm:p-4 focus:outline-none focus:bg-background focus:border-primary/50 focus:ring-4 focus:ring-primary/5 rounded-2xl transition-all shadow-sm text-base placeholder:text-muted-foreground/40" placeholder="e.g. Rahul Sharma" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-foreground font-bold text-xs uppercase tracking-wider pl-1">Interested Batch</label>
                                    <div className="relative group/select">
                                        <select name="batch" className="w-full bg-secondary/20 border border-primary/20 text-foreground p-3.5 sm:p-4 focus:outline-none focus:bg-background focus:border-primary/50 focus:ring-4 focus:ring-primary/5 rounded-2xl transition-all shadow-sm appearance-none text-base cursor-pointer">
                                            <option value="general">General Inquiry</option>
                                            {SITE_SERVICES.map((service) => (
                                                <option key={service} value={service}>{service}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground/60 transition-colors group-focus-within/select:text-primary">
                                            <ChevronDown size={20} />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-foreground font-bold text-xs uppercase tracking-wider pl-1">Your Message</label>
                                    <textarea name="message" className="w-full bg-secondary/20 border border-primary/20 text-foreground p-3.5 sm:p-4 focus:outline-none focus:bg-background focus:border-primary/50 focus:ring-4 focus:ring-primary/5 rounded-2xl transition-all shadow-sm min-h-[120px] sm:min-h-[140px] resize-none text-base placeholder:text-muted-foreground/40" placeholder="How can we help you on your yoga journey?" />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded-2xl py-4 sm:py-5 hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 mt-4 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base flex items-center justify-center gap-3 group/btn"
                                >
                                    {isSubmitting ? (
                                        'Sending Inquiry...'
                                    ) : (
                                        <>
                                            Send Message
                                            <MessageCircle size={18} className="group-hover/btn:rotate-12 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
