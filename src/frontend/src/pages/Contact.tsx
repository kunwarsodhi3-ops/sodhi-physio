import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CLINIC_NAME,
  LOCATION,
  PHONE_PRIMARY,
  PHONE_PRIMARY_RAW,
  PHONE_SECONDARY,
  PHONE_SECONDARY_RAW,
  WHATSAPP_URL,
} from "@/types";
import {
  ChevronRight,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
} from "lucide-react";

const WHATSAPP_APPOINTMENT_URL = `https://wa.me/${PHONE_PRIMARY_RAW}?text=${encodeURIComponent(
  "I want to book an appointment",
)}`;

const HOURS = [
  { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM (by appointment)" },
  { day: "Emergency", time: "Call for urgent care availability" },
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section
        data-ocid="contact.page"
        className="bg-primary py-14 md:py-20 text-primary-foreground"
      >
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20 uppercase tracking-widest text-xs">
            Get in Touch
          </Badge>
          <h1 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4">
            Contact {CLINIC_NAME}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Book Your Appointment — Fast Pain Relief Awaits You in Mansa, Punjab
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Phone Numbers */}
              <Card className="p-6 shadow-elevated border-border/50">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <h2 className="font-display font-semibold text-foreground text-lg">
                    Phone Numbers
                  </h2>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    data-ocid="contact.phone_primary"
                    href={`tel:+${PHONE_PRIMARY_RAW}`}
                    className="group flex items-center justify-between px-4 py-3 rounded-lg bg-secondary hover:bg-primary/10 border border-border hover:border-primary/30 transition-smooth"
                  >
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        Primary
                      </p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {PHONE_PRIMARY}
                      </p>
                    </div>
                    <ChevronRight
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-200"
                    />
                  </a>
                  <a
                    data-ocid="contact.phone_secondary"
                    href={`tel:+${PHONE_SECONDARY_RAW}`}
                    className="group flex items-center justify-between px-4 py-3 rounded-lg bg-secondary hover:bg-primary/10 border border-border hover:border-primary/30 transition-smooth"
                  >
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        Secondary
                      </p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {PHONE_SECONDARY}
                      </p>
                    </div>
                    <ChevronRight
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-200"
                    />
                  </a>
                </div>
              </Card>

              {/* Location */}
              <Card className="p-6 shadow-elevated border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <h2 className="font-display font-semibold text-foreground text-lg">
                    Our Location
                  </h2>
                </div>
                <p className="text-foreground font-medium mb-1">
                  {CLINIC_NAME}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {LOCATION}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Best physiotherapy clinic in Mansa — serving patients across
                  Mansa district and nearby areas.
                </p>
              </Card>

              {/* Clinic Hours */}
              <Card className="p-6 shadow-elevated border-border/50">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <h2 className="font-display font-semibold text-foreground text-lg">
                    Clinic Hours
                  </h2>
                </div>
                <div className="flex flex-col gap-3">
                  {HOURS.map((h) => (
                    <div
                      key={h.day}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-border last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {h.day}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Map + CTA Column */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {/* Google Maps Embed */}
              <Card className="overflow-hidden shadow-elevated border-border/50 flex-1">
                <div className="bg-muted/40 px-5 py-4 border-b border-border flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span className="font-display font-semibold text-sm text-foreground">
                    Find Us — Mansa, Punjab
                  </span>
                </div>
                <div className="h-72 md:h-96">
                  <iframe
                    title="Mansa Punjab Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54880.03513600046!2d75.36088!3d29.99312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913baab97f60ff3%3A0xf4c4c4a8b0a6e7a6!2sMansa%2C%20Punjab%20151505!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Card>

              {/* CTA Booking Card */}
              <Card className="p-8 shadow-elevated border-border/50 gradient-primary">
                <div className="text-center mb-6">
                  <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                    Book Your Appointment Today
                  </h2>
                  <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                    Start your journey to a pain-free life. Reach out via
                    WhatsApp or call us directly — we respond fast.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    data-ocid="contact.whatsapp_button"
                    href={WHATSAPP_APPOINTMENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-[oklch(0.52_0.18_145)] hover:bg-[oklch(0.45_0.18_145)] text-white font-semibold gap-2 shadow-elevated transition-smooth"
                    >
                      <MessageCircle size={18} />
                      Book on WhatsApp
                    </Button>
                  </a>
                  <a
                    data-ocid="contact.call_button"
                    href={`tel:+${PHONE_PRIMARY_RAW}`}
                    className="flex-1"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold gap-2 transition-smooth"
                    >
                      <PhoneCall size={18} />
                      Call Now
                    </Button>
                  </a>
                </div>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Drug-free treatment · Fast recovery · Expert physiotherapy in
                  Mansa
                </p>
              </Card>

              {/* Quick Contact Badges */}
              <div className="grid grid-cols-2 gap-3">
                <Card className="p-4 flex items-center gap-3 border-border/50 shadow-subtle">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200 truncate block"
                    >
                      Chat with Us
                    </a>
                  </div>
                </Card>
                <Card className="p-4 flex items-center gap-3 border-border/50 shadow-subtle">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-semibold text-foreground truncate">
                      Mansa, Punjab
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO bottom strip */}
      <section className="bg-muted/40 border-t border-border py-10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display font-semibold text-foreground text-lg mb-2">
            Trusted Physiotherapy Clinic in Mansa, Punjab
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Looking for a physiotherapist near you? Sodhi Physiotherapy Clinic
            offers expert back pain treatment in Mansa, advanced Shockwave
            Therapy in Mansa, and personalised care for cervical pain, knee
            arthritis, and sports injuries. Call us today for fast relief.
          </p>
        </div>
      </section>
    </Layout>
  );
}
