import { Clock, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ScheduleItemProps {
  day: string;
  time: string;
  duration: string;
  participants: string;
  whatsappLink: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export function ScheduleItem({
  day,
  time,
  duration,
  participants,
  whatsappLink,
  isExpanded,
  onToggle,
}: ScheduleItemProps) {
  return (
    <div className="rounded-lg bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-primary/10 p-3">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-foreground">{day}</h4>
            <p className="text-sm text-muted-foreground">{time}</p>
          </div>
        </div>
        <div className="text-muted-foreground">
          <svg
            className={`h-5 w-5 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-3 text-sm text-foreground">
              <Clock className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Duration: {duration}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <Users className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{participants}</span>
            </div>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
              <MessageCircle className="h-4 w-4" />
              Register via WhatsApp
            </Button>
          </a>
        </div>
      )}
    </div>
  );
}
