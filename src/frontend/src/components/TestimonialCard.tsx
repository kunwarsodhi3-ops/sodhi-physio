import type { Testimonial } from "@/types";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <div
      className="bg-card rounded-xl p-6 shadow-subtle border border-border hover:shadow-elevated transition-smooth flex flex-col gap-4"
      data-ocid={`testimonials.item.${index + 1}`}
    >
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Star
            key={`star-${testimonial.name}-${i}`}
            size={14}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      <p className="text-foreground/80 text-sm leading-relaxed font-body italic">
        "{testimonial.review}"
      </p>
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
        <div>
          <div className="font-display font-semibold text-foreground text-sm">
            {testimonial.name}
          </div>
          <div className="text-muted-foreground text-xs">
            {testimonial.location}
          </div>
        </div>
        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
          {testimonial.condition}
        </span>
      </div>
    </div>
  );
}
