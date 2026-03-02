import { Dumbbell, HeartPulse, Wind, Smile, ToyBrick } from 'lucide-react';

// Contact & site info — single source of truth

export const SITE_CONTACT = {
  phone: '95277 01936',
  phoneFull: '+91 95277 01936',
  telLink: 'tel:+919527701936',
  whatsappLink: 'https://wa.me/919527701936',
  getWhatsAppLink: (message: string) => `https://wa.me/919527701936?text=${encodeURIComponent(message)}`,
  email: 'Shatayuyogaclasses@gmail.com',
  mailtoLink: 'mailto:Shatayuyogaclasses@gmail.com',
  address: 'Shatayu Yoga Classes, Vtp leonara H, Nande Road, Mahalunge, Pune-411045',
  youtube: 'https://youtube.com/@shatayuyoga?si=lign21vTx11Hqjx8',
  instagram: 'https://www.instagram.com/shatayuyogacenter?igsh=MTJtdWdpM3plc2FzNQ==',
  facebook: 'https://www.facebook.com/share/19dvMQZ5kZ/',
  googleReview: 'https://g.page/r/CbUDrzlT9rqKEAI/review',
} as const;

export const SITE_SERVICES = [
  'Fitness Yoga Batch',
  'Therapeutic Yoga Batch',
  "Kid's Yoga Batch",
  "Women's Special Face Yoga Batch",
  'Meditation & Pranayam Batch',
] as const;

export const PRACTICE_ICONS = {
  'Fitness Yoga Batch': Dumbbell,
  'Therapeutic Yoga Batch': HeartPulse,
  "Kid's Yoga Batch": ToyBrick,
  "Women's Special Face Yoga Batch": Smile,
  'Meditation & Pranayam Batch': Wind,
} as const;

export const SITE_TAGLINE = 'OVER 4 YEARS EXPERIENCE';
