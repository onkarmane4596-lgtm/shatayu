'use client';

import { Quote, Star, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONTACT } from '@/lib/site-config';

const testimonials = [
    {
        name: 'Anita Jadhav',
        role: 'Student',
        content: 'मी अनिता जाधव. मी योगा जॉईन करून तीन महिने झाले. आता मी पुन्हा ऑगस्ट मध्ये योगा क्लास जॉईन करणार आहे. कारण शुभांगी मॅडम खूपच छान योगा शिकवतात. शिकवण्याची पद्धत खूप छान आहे. पर्सनली प्रत्येकाकडे लक्ष देऊन सर्व आसने करून घेतात. सहज सोप्या पद्धतीने समजावून सांगतात. वेगवेगळ्या प्रकारे पूर्ण शरीराचा व्यायाम करून घेतात. थोडे ध्यान घेतात.. प्राणायाम घेतात. योग निद्रा घेतात.. सर्वच खूप छान शिकवतात.. पूर्ण एक तासात बरोबर सर्व पूर्ण करतात. ते मला खूप आवडते. त्याचे वेळेचे नियोजज खूप छान आहे. योगा केल्यामळे पूर्ण दिवस खूप छान प्रसन्न व आनंदी जातो. बॉडी पूर्ण हलकी वाटते. धन्यवाद शुभांगी मॅडम',
    },
    {
        name: 'Rekha M Salunke',
        role: 'Teacher',
        content: 'नमस्कार, मी रेखा साळुंके. (शिक्षिका) वय 47 वर्ष. वय सांगण्याचा हेतू एवढाच आहे, की पन्नाशीकडे जाता जाता का होईना पण मला योगाची आवड लागली. याचं कारण म्हणजे मी मागे फेस योगाचा क्लास मॅडम कडे केला होता आणि त्याचवेळी त्यांना सांगितलं होतं की मी योगा क्लास ही जॉईन करेल. दिवसभर शाळा असल्यामुळे संध्याकाळी योगा केल्यानंतर अतिशय फ्रेश वाटायला लागले, शरीरही हलकं वाटतय, दहा ते 15 दिवसांमध्ये एक किलो वजन कमी झाले. कोणतेही काम करायला प्रसन्न वाटतंय आणि मी योगा करते हे पाहून माझ्या मुलांनाही बरं वाटतंय माझा मुलगा एमबीबीएस करतोय पण आई स्वतःच्या हेल्थ कडे लक्ष देते हे नुसतं ऐकूनच तो खूप आनंदी झाला. मला स्वतःला खूप छान वाटतंय. रात्री झोपण्या अगोदर मी मॅडमने सांगितल्याप्रमाणे आणि शिकवल्याप्रमाणे फेस योगा ही करते एकूणच स्वतःच्या व्यक्तीमत्वामध्ये बदल झालेला आढळला. मॅडम तुमचं खूप खूप कृतज्ञ पूर्वक धन्यवाद.',
    },
    {
        name: 'Rohini',
        role: 'Student',
        content: 'मी रोहिणी... शतायु योगा क्लासेस जॉईन करून मला एक महिना पूर्ण झालेला आहे.. मी वेटलॉस फॅट लॉस साठी क्लास जॉईन केला होता आणि मला योगा एक्सरसाइज आणि जेवणामध्ये केलेले थोडेसे बदल यामुळे मला खूप चांगला रिझल्ट मिळाला आहे. त्यामध्ये साधारण माझे एक महिन्यांमध्ये दोन किलो वजन कमी झाले आहे. मी दररोज एक तास योगा चार किलोमीटर चालणे आणि आहारामध्ये बदल या सर्व गोष्टींमुळे हे साध्य झालेला आहे. त्यासाठी मी शतायु योग क्लासेसचे सोनाली मॅम चे मनापासून धन्यवाद व्यक्त करते.',
    },
    {
        name: 'Priya Sharma',
        role: 'Working Professional',
        content: 'Shubhangi\'s classes transformed my life! My stress levels dropped significantly, and I feel so much more energetic. The personalized attention makes all the difference.',
    },
    {
        name: 'Rajesh Kumar',
        role: 'Entrepreneur',
        content: 'Best decision to join these classes. The therapeutic yoga sessions helped me recover from chronic back pain. Highly recommend to everyone!',
    },
    {
        name: 'Anjali Patel',
        role: 'Student',
        content: 'The kids yoga program is amazing! My daughter loves the classes and has become so much more focused with her studies. Great instructor!',
    },
    {
        name: 'Deepak Singh',
        role: 'IT Professional',
        content: 'Pranayama classes have been a game-changer for my mental health. The breathing techniques are so effective, and I recommend it to all my colleagues.',
    },
];

function TestimonialCard({ testimonial, index, isMarquee = false }: { testimonial: typeof testimonials[0], index: number, isMarquee?: boolean }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLongText = testimonial.content.length > 200;

    return (
        <motion.div
            initial={isMarquee ? {} : { opacity: 0, y: 20 }}
            whileInView={isMarquee ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`break-inside-avoid ${isMarquee ? 'w-[300px] sm:w-[350px] shrink-0' : 'mb-6'}`}
        >
            <div className={`bg-background/60 backdrop-blur-md border border-border/40 ${isMarquee ? 'p-5 sm:p-6' : 'p-6 sm:p-8'} rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 group flex flex-col h-full uppercase-none`}>
                <Quote size={24} className="text-primary/20 mb-3 group-hover:text-primary/40 transition-colors" />

                <div className="relative flex-grow">
                    <p className={`text-muted-foreground text-sm leading-relaxed ${!isExpanded && 'line-clamp-6'} transition-all duration-300 font-medium uppercase-none`}>
                        {testimonial.content}
                    </p>

                    {isLongText && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsExpanded(!isExpanded);
                            }}
                            className="text-primary text-[10px] font-bold uppercase tracking-wider mt-3 flex items-center gap-1 hover:underline"
                        >
                            {isExpanded ? (
                                <>Show Less <ChevronUp size={12} /></>
                            ) : (
                                <>Read More <ChevronDown size={12} /></>
                            )}
                        </button>
                    )}
                </div>

                <div className={`flex items-center gap-3 mt-6 pt-5 border-t border-border/20`}>
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold font-serif text-base border border-primary/20 shrink-0">
                        {testimonial.name.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-foreground font-bold font-serif text-sm leading-tight">{testimonial.name}</h3>
                        <p className="text-primary/70 text-[9px] uppercase tracking-widest font-bold mt-1">{testimonial.role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function TestimonialsPage() {
    const marqueeTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="bg-secondary/20 min-h-screen pb-24 overflow-hidden relative selection:bg-primary/20 selection:text-primary uppercase-none">
            {/* Decorative background visual dynamics */}
            <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-background to-transparent mix-blend-overlay pointer-events-none" />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-[20%] -right-[20%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"
            />

            <section className="bg-background py-12 sm:py-20 lg:py-28 border-b border-border/40 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container-tight text-center px-4"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-foreground mb-4 tracking-tight">Student Stories</h1>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
                        Real transformations from our community—profound shifts in health, vitality, and mental peace.
                    </p>
                </motion.div>
            </section>

            {/* Testimonials Display */}
            <section className="py-12 sm:py-20 relative z-10">
                {/* Desktop/Tablet: Masonry Grid */}
                <div className="hidden md:block container-tight px-6 lg:px-8">
                    <div className="columns-2 lg:columns-3 gap-8 space-y-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} index={index} />
                        ))}
                    </div>
                </div>

                {/* Mobile: Slow Marquee Scroll */}
                <div className="md:hidden relative w-full overflow-hidden py-4">
                    {/* Gradient Fades for Edge */}
                    <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-secondary/20 to-transparent z-20 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-secondary/20 to-transparent z-20 pointer-events-none" />

                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 50, // Very slow scroll
                            ease: "linear",
                            repeat: Infinity
                        }}
                        className="flex gap-4 px-4 w-fit"
                    >
                        {marqueeTestimonials.map((testimonial, index) => (
                            <TestimonialCard key={`marquee-${index}`} testimonial={testimonial} index={index} isMarquee={true} />
                        ))}
                    </motion.div>

                    <div className="mt-8 flex justify-center">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60 animate-pulse">
                            <span>Swipe to explore</span>
                            <ArrowRight size={12} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Review CTA Section - Premium & Modern */}
            <section className="container-tight pb-32 relative z-10 px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group lg:max-w-4xl lg:mx-auto"
                >
                    {/* Decorative background glow for the CTA card */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative bg-background/80 backdrop-blur-xl border border-primary/20 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                        {/* Abstract background shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        {/* Star Rating Visualization */}
                        <div className="flex justify-center gap-1.5 mb-8">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <motion.div
                                    key={s}
                                    initial={{ scale: 0, rotate: -30 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.1 * s, type: "spring", stiffness: 200 }}
                                >
                                    <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-primary text-primary" />
                                </motion.div>
                            ))}
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 tracking-tight leading-tight">
                            Love Your Practice? <br />
                            <span className="italic text-primary font-normal text-3xl sm:text-4xl md:text-5xl">Share the Light.</span>
                        </h2>

                        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-medium">
                            Your journey inspires others. Share your experience at Shatayu Yoga Classes and help our healing community grow.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href={SITE_CONTACT.googleReview}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative inline-flex items-center justify-center gap-3 h-14 sm:h-16 px-10 text-base font-bold rounded-full bg-foreground text-background hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                                <span className="relative z-10 flex items-center gap-3">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.32-2.08 4.44-1.24 1.2-3.12 2.48-6.2 2.48-4.96 0-8.88-4.04-8.88-9s3.92-9 8.88-9c2.68 0 4.68 1.04 6.12 2.4l2.32-2.32C18.68 1.12 15.16 0 11.48 0 5.16 0 0 5.16 0 11.5s5.16 11.5 11.48 11.5c3.48 0 6.12-1.12 8.12-3.2 2.08-2.08 2.72-5 2.72-7.36 0-.72-.04-1.4-.16-2.04h-9.68z" />
                                    </svg>
                                    Write a Google Review
                                </span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Trust text */}
                        <div className="mt-10 flex items-center justify-center gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground/60">
                            <span className="w-8 h-px bg-border/60" />
                            Trusted by 100+ Students
                            <span className="w-8 h-px bg-border/60" />
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
