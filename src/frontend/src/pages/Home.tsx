import { Layout } from "@/components/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import {
  LOCATION,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  SERVICES,
  TESTIMONIALS,
  WHATSAPP_URL,
} from "@/types";
import {
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WHY_FEATURES = [
  {
    icon: <Zap size={22} className="text-primary" />,
    title: "Advanced Technology",
    desc: "Shockwave Therapy, Electrotherapy, T-CAR Therapy, BCM & more cutting-edge machines for faster healing.",
  },
  {
    icon: <Users size={22} className="text-accent" />,
    title: "Personalised Treatment",
    desc: "Every patient receives a customised treatment plan designed specifically for their condition and goals.",
  },
  {
    icon: <Shield size={22} className="text-primary" />,
    title: "Drug-Free Recovery",
    desc: "100% natural, drug-free physiotherapy treatments that address the root cause — not just symptoms.",
  },
  {
    icon: <Award size={22} className="text-accent" />,
    title: "BPT Qualified Expert",
    desc: "Highly qualified physiotherapist with a Bachelor of Physiotherapy degree and years of clinical experience.",
  },
  {
    icon: <CheckCircle2 size={22} className="text-primary" />,
    title: "High Patient Satisfaction",
    desc: "Hundreds of satisfied patients from Mansa and surrounding areas. 5-star rated clinic.",
  },
  {
    icon: <Clock size={22} className="text-accent" />,
    title: "Affordable Pricing",
    desc: "World-class physiotherapy at Mansa-friendly prices. Transparent billing with no hidden charges.",
  },
];

const STATS = [
  { label: "Patients Treated", value: "500+" },
  { label: "Years Experience", value: "5+" },
  { label: "Success Rate", value: "95%" },
  { label: "Advanced Machines", value: "8+" },
];

export default function Home() {
  const handleBooking = () => window.open(WHATSAPP_URL, "_blank");

  return (
    <Layout>
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        data-ocid="home.hero.section"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/hero-physiotherapy.dim_1400x800.jpg"
            alt="Sodhi Physiotherapy Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white text-xs font-medium tracking-wide">
                Mansa, Punjab's Trusted Physiotherapy Clinic
              </span>
            </div>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl xl:text-6xl leading-tight mb-6">
              Best Physiotherapy Clinic in Mansa for{" "}
              <span className="text-accent">Fast Pain Relief</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-body leading-relaxed mb-8 max-w-xl">
              Advanced treatment with latest technology like{" "}
              <strong className="text-white">Shockwave Therapy</strong>.
              Drug-free treatment, fast recovery, expert care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-elevated transition-smooth"
                onClick={handleBooking}
                data-ocid="hero.book_appointment.primary_button"
              >
                Book Appointment Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 gap-2 transition-smooth"
                onClick={() => window.open(WHATSAPP_URL, "_blank")}
                data-ocid="hero.whatsapp.secondary_button"
              >
                <SiWhatsapp size={18} />
                WhatsApp Us
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                "✅ Drug-Free Treatment",
                "✅ Advanced Machines",
                "✅ Expert Physiotherapist",
                "✅ Affordable Prices",
              ].map((tag) => (
                <span key={tag} className="text-white/80 text-sm font-body">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border/50 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-primary text-2xl md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-20 bg-background"
        data-ocid="about.section"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Award size={14} className="text-primary" />
                <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                  About Us
                </span>
              </div>
              <h2 className="font-display font-bold text-foreground text-3xl md:text-4xl mb-6 leading-tight">
                Mansa's Most Trusted Physiotherapy Centre
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4 font-body">
                Sodhi Physiotherapy Clinic is led by a{" "}
                <strong className="text-foreground">
                  BPT qualified physiotherapist
                </strong>{" "}
                with extensive experience treating complex musculoskeletal and
                neurological conditions. We combine modern technology with
                patient-focused care.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6 font-body">
                Our clinic is equipped with the latest physiotherapy machines
                including{" "}
                <strong className="text-foreground">
                  Shockwave Therapy, Electrotherapy, T-CAR Therapy, and BCM
                </strong>{" "}
                — delivering results that medication alone cannot achieve.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "BPT Qualified Physiotherapist",
                  "Latest Modern Equipment",
                  "Personalised Treatment Plans",
                  "500+ Satisfied Patients",
                  "Drug-Free Treatments",
                  "Affordable Pricing",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-accent flex-shrink-0"
                    />
                    <span className="text-foreground text-sm font-body">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
                onClick={handleBooking}
                data-ocid="about.book_appointment.primary_button"
              >
                Book Your Consultation
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/assets/generated/clinic-interior.dim_800x600.jpg"
                  alt="Sodhi Physiotherapy Clinic Interior"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-elevated">
                <div className="font-display font-bold text-2xl">5+</div>
                <div className="text-primary-foreground/80 text-xs">
                  Years of Excellence
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-elevated border border-border">
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-yellow-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <div className="font-display font-bold text-foreground text-sm">
                  5-Star Rated
                </div>
                <div className="text-muted-foreground text-xs">
                  Google Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-20 bg-muted/30"
        data-ocid="services.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Zap size={14} className="text-accent" />
              <span className="text-accent text-xs font-semibold tracking-wide uppercase">
                Our Services
              </span>
            </div>
            <h2 className="font-display font-bold text-foreground text-3xl md:text-4xl mb-4">
              Expert Treatment for Every Condition
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
              From back pain to sports injuries — we treat all musculoskeletal
              conditions with evidence-based physiotherapy.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
            data-ocid="services.list"
          >
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-4 font-body">
              Looking for back pain treatment in Mansa? Shockwave therapy? We've
              got you covered.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
              onClick={handleBooking}
              data-ocid="services.book_appointment.primary_button"
            >
              Book Appointment Now
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="why-choose-us"
        className="py-20 bg-background"
        data-ocid="why-choose-us.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Shield size={14} className="text-primary" />
              <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-display font-bold text-foreground text-3xl md:text-4xl mb-4">
              Why Patients Choose Sodhi Physiotherapy
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
              We combine advanced technology with compassionate, personalised
              care to deliver exceptional results.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            data-ocid="why-choose-us.list"
          >
            {WHY_FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-subtle transition-smooth"
                data-ocid={`why-choose-us.item.${i + 1}`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center shadow-elevated">
            <h3 className="font-display font-bold text-primary-foreground text-2xl md:text-3xl mb-3">
              Ready to Live Pain-Free?
            </h3>
            <p className="text-primary-foreground/80 text-base mb-8 max-w-xl mx-auto font-body">
              Join hundreds of patients from Mansa and across Punjab who have
              found lasting relief at our clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold transition-smooth"
                onClick={handleBooking}
                data-ocid="why-choose-us.book_appointment.primary_button"
              >
                Book Appointment Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 gap-2 transition-smooth"
                onClick={() => window.open(WHATSAPP_URL, "_blank")}
                data-ocid="why-choose-us.whatsapp.secondary_button"
              >
                <SiWhatsapp size={18} />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="py-20 bg-muted/30"
        data-ocid="testimonials.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Users size={14} className="text-accent" />
              <span className="text-accent text-xs font-semibold tracking-wide uppercase">
                Patient Reviews
              </span>
            </div>
            <h2 className="font-display font-bold text-foreground text-3xl md:text-4xl mb-4">
              What Our Patients Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
              <span className="text-foreground font-semibold ml-2">
                5.0 / 5.0
              </span>
              <span className="text-muted-foreground text-sm ml-1">
                (Google Reviews)
              </span>
            </div>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
              Real stories from real patients who found relief at Sodhi
              Physiotherapy Clinic.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="testimonials.list"
          >
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 bg-background"
        data-ocid="contact.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <MapPin size={14} className="text-primary" />
              <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                Contact Us
              </span>
            </div>
            <h2 className="font-display font-bold text-foreground text-3xl md:text-4xl mb-4">
              Visit Us in Mansa, Punjab
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
              Located in the heart of Mansa. Easy access for patients across the
              district.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6">
              <div className="bg-card rounded-xl p-6 border border-border shadow-subtle">
                <h3 className="font-display font-semibold text-foreground text-xl mb-6">
                  Get In Touch
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm mb-1">
                        Phone Numbers
                      </div>
                      <a
                        href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}
                        className="block text-primary hover:text-primary/80 transition-colors duration-200 font-body"
                        data-ocid="contact.phone_primary.link"
                      >
                        {PHONE_PRIMARY}
                      </a>
                      <a
                        href={`tel:${PHONE_SECONDARY.replace(/\s/g, "")}`}
                        className="block text-primary hover:text-primary/80 transition-colors duration-200 font-body"
                        data-ocid="contact.phone_secondary.link"
                      >
                        {PHONE_SECONDARY}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm mb-1">
                        Location
                      </div>
                      <p className="text-muted-foreground font-body">
                        {LOCATION}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm mb-1">
                        Clinic Hours
                      </div>
                      <div className="text-muted-foreground text-sm font-body">
                        Monday – Saturday: 9:00 AM – 7:00 PM
                      </div>
                      <div className="text-muted-foreground text-sm font-body">
                        Sunday: By Appointment Only
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 transition-smooth"
                  onClick={handleBooking}
                  data-ocid="contact.book_appointment.primary_button"
                >
                  <Phone size={18} />
                  Call Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-border hover:bg-muted gap-2 transition-smooth"
                  onClick={() => window.open(WHATSAPP_URL, "_blank")}
                  data-ocid="contact.whatsapp.secondary_button"
                >
                  <SiWhatsapp size={18} />
                  WhatsApp
                </Button>
              </div>
            </div>
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-elevated border border-border h-96 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54763.91247067073!2d75.3348!3d29.9838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b7bda1ba8c015%3A0x7b8f3e9f7a4e3d5f!2sMansa%2C%20Punjab!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sodhi Physiotherapy Clinic Location - Mansa, Punjab"
                data-ocid="contact.map"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
