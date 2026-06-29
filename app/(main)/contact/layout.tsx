import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Shatayu Yoga Classes in Mahalunge, Pune. Book a session, join our WhatsApp community, or inquire about our yoga batches.',
    keywords: ['contact Shatayu Yoga', 'book yoga class Pune', 'Shubhangi Ghule contact', 'yoga classes Mahalunge Pune address', 'join online yoga class'],
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
