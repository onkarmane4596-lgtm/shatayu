import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Yoga Classes & Batches',
    description: 'Explore Shatayu Yoga classes in Pune: Fitness Yoga, Therapeutic Yoga, Face Yoga, Kids Yoga, and Pranayama. 100% online & local batches available.',
    keywords: ['fitness yoga batch Pune', 'therapeutic yoga Pune', 'face yoga for glowing skin', 'kids yoga classes online', 'pranayama and meditation Pune', 'yoga classes near Nande Road'],
};

export default function ClassesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
