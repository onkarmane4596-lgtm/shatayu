import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Student Testimonials & Reviews',
    description: 'Read reviews and student stories from Shatayu Yoga Classes. Discover how our online and local yoga sessions in Pune have transformed lives.',
    keywords: ['Shatayu Yoga reviews', 'Shubhangi Ghule yoga reviews', 'best yoga classes in Pune reviews', 'Mahalunge yoga center ratings', 'yoga transformation stories'],
};

export default function TestimonialsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
