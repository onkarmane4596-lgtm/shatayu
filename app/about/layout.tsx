import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Shatayu Yoga and our founder, Shubhangi Ghule. Experience traditional yoga with 4+ years of online training, focusing on health, flexibility, and mind-body balance.',
    keywords: ['About Shatayu Yoga', 'Shubhangi Ghule Yoga Teacher', 'Pune best yoga instructor', 'VTP Leonara yoga trainer', 'Mahalunge yoga center'],
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
