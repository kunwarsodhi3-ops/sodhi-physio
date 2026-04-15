import { Button } from "@/components/ui/button";
import { NAV_ITEMS, PHONE_PRIMARY, WHATSAPP_URL } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // navigate home first then scroll
        void navigate({ to: "/" }).then(() => {
          setTimeout(() => {
            const target = document.querySelector(href);
            target?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        });
      }
    } else {
      void navigate({ to: href as "/" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-elevated border-b border-border"
          : "bg-card/90 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
            data-ocid="nav.logo"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-subtle">
              <span className="text-primary-foreground font-display font-bold text-sm">
                S
              </span>
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-foreground text-sm leading-tight group-hover:text-primary transition-colors duration-200">
                Sodhi Physiotherapy
              </div>
              <div className="text-muted-foreground text-xs">Mansa, Punjab</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/5"
                data-ocid={`nav.${item.label.toLowerCase().replace(/\s+/g, "_")}.link`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}
              className="hidden sm:flex items-center gap-2 text-sm font-body text-primary hover:text-primary/80 transition-colors duration-200"
              data-ocid="nav.phone.link"
            >
              <Phone size={14} />
              <span className="font-medium">{PHONE_PRIMARY}</span>
            </a>
            <Button
              size="sm"
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              data-ocid="nav.book_appointment.primary_button"
            >
              Book Now
            </Button>
            <button
              type="button"
              className="md:hidden p-2 rounded-md hover:bg-muted transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.mobile_menu.toggle"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-foreground" />
              ) : (
                <Menu size={20} className="text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-card border-t border-border shadow-elevated"
          data-ocid="nav.mobile_menu.panel"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left px-4 py-3 text-sm font-body text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors duration-200"
                data-ocid={`nav.mobile.${item.label.toLowerCase().replace(/\s+/g, "_")}.link`}
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-border mt-2 pt-3 flex flex-col gap-2">
              <a
                href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}
                className="flex items-center gap-2 px-4 py-2 text-sm text-primary"
                data-ocid="nav.mobile.phone.link"
              >
                <Phone size={14} />
                {PHONE_PRIMARY}
              </a>
              <Button
                className="mx-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  window.open(WHATSAPP_URL, "_blank");
                  setIsMobileMenuOpen(false);
                }}
                data-ocid="nav.mobile.book_appointment.primary_button"
              >
                Book Appointment Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
