import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  rating,
  image,
}: TestimonialCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      
      <p className="mb-6 text-foreground leading-relaxed">{content}</p>
      
      <div className="flex items-center gap-3">
        {image && (
          <img
            src={image}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
