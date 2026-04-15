import type { Service } from "@/types";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.id }}
      className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-elevated transition-smooth group block"
      data-ocid={`services.item.${index + 1}`}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-primary/15 transition-colors duration-200">
        {service.icon}
      </div>
      <h3 className="font-display font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors duration-200">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed font-body mb-4">
        {service.shortDesc}
      </p>
      <div className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all duration-200">
        Learn More <ChevronRight size={14} />
      </div>
    </Link>
  );
}
