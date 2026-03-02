import { LucideIcon, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  whatsappLink: string;
}

export function ProgramCard({
  icon: Icon,
  title,
  description,
  details,
  whatsappLink,
}: ProgramCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="mb-4 inline-block rounded-full bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>

        <ul className="mb-6 space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start text-sm text-foreground gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            Enroll Now
          </Button>
        </a>
      </div>
    </div>
  );
}
