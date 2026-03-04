import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppCTAProps {
  text?: string;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  whatsappLink: string;
  icon?: boolean;
}

export function WhatsAppCTA({
  text = 'Chat on WhatsApp',
  className = '',
  variant = 'default',
  size = 'md',
  whatsappLink,
  icon = true,
}: WhatsAppCTAProps) {
  const variants = {
    default: 'bg-gradient-to-r from-[#5DA89F] to-[#5EA8E6] text-[#FFFBF2] hover:opacity-90',
    outline: 'border-2 border-[#5DA89F] text-[#5DA89F] hover:bg-[#5DA89F]/5',
    ghost: 'text-[#5DA89F] hover:bg-[#5DA89F]/10',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <Button
        className={`gap-2 transition-all duration-300 hover:scale-105 ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {icon && <MessageCircle className="h-5 w-5" />}
        {text}
      </Button>
    </a>
  );
}
