import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CLINIC_NAME, LOCATION, PHONE_PRIMARY, PHONE_SECONDARY } from "@/types";
import { ExternalLink } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const utmUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <footer className="bg-foreground text-primary-foreground border-t border-border/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-sm">
                    S
                  </span>
                </div>
                <div>
                  <div className="font-display font-bold text-white text-sm">
                    {CLINIC_NAME}
                  </div>
                  <div className="text-white/60 text-xs">{LOCATION}</div>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Advanced physiotherapy with latest technology. Expert care for
                faster recovery.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-4">
                Contact
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}
                  className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                >
                  📞 {PHONE_PRIMARY}
                </a>
                <a
                  href={`tel:${PHONE_SECONDARY.replace(/\s/g, "")}`}
                  className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                >
                  📞 {PHONE_SECONDARY}
                </a>
                <p className="text-white/70 text-sm">📍 {LOCATION}</p>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-4">
                Services
              </h4>
              <div className="flex flex-col gap-2">
                {[
                  "Back Pain Treatment",
                  "Cervical Pain",
                  "Knee Pain & Arthritis",
                  "Sports Injury",
                  "Sciatica",
                  "Shockwave Therapy",
                ].map((s) => (
                  <span key={s} className="text-white/70 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-xs">
              © {year} {CLINIC_NAME}. All rights reserved.
            </p>
            <a
              href={utmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 text-xs hover:text-white/70 flex items-center gap-1 transition-colors duration-200"
            >
              Built with love using caffeine.ai
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
