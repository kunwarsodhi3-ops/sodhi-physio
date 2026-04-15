import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/types";
import {
  Award,
  CheckCircle2,
  Clock,
  GraduationCap,
  Heart,
  Phone,
  Shield,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const STATS = [
  { value: "500+", label: "Patients Treated", icon: Users },
  { value: "5+", label: "Years of Excellence", icon: Clock },
  { value: "8+", label: "Advanced Machines", icon: Zap },
  { value: "95%", label: "Patient Success Rate", icon: Star },
];

const VALUES = [
  {
    icon: Heart,
    title: "Patient-First Approach",
    desc: "Every treatment plan is tailored to the individual. We listen carefully, diagnose accurately, and treat with compassion.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: GraduationCap,
    title: "Evidence-Based Practice",
    desc: "Our physiotherapist holds a Bachelor of Physiotherapy (BPT) degree and stays current with the latest clinical research.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Target,
    title: "Goal-Oriented Outcomes",
    desc: "We set clear, measurable recovery milestones with every patient — so you always know how far you've come.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Drug-Free Philosophy",
    desc: "We believe the body can heal naturally with the right therapeutic support — no dependency on painkillers or surgery.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const EQUIPMENT = [
  { name: "Extracorporeal Shockwave Therapy (ESWT)", badge: "Advanced" },
  { name: "Electrotherapy (TENS / IFT / NMES)", badge: "" },
  { name: "T-CAR Therapy (Tecarterapia)", badge: "Premium" },
  { name: "BCM (Bio-Current Machine)", badge: "" },
  { name: "Ultrasound Therapy", badge: "" },
  { name: "Traction & Spinal Decompression", badge: "" },
  { name: "Hot & Cold Therapy Systems", badge: "" },
  { name: "Manual Therapy Tools", badge: "" },
];

export default function About() {
  const handleBooking = () => window.open(WHATSAPP_URL, "_blank");

  return (
    <Layout>
      {/* Hero Banner */}
      <section
        className="relative bg-foreground overflow-hidden py-20 md:py-28"
        data-ocid="about.hero.section"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/clinic-interior.dim_800x600.jpg"
            alt="Sodhi Physiotherapy Clinic"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-6">
              <Award size={14} className="text-primary" />
              <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                About Us
              </span>
            </div>
            <h1 className="font-display font-bold text-white text-3xl md:text-4xl xl:text-5xl leading-tight mb-6">
              About Sodhi Physiotherapy Clinic —{" "}
              <span className="text-accent">
                Trusted Physiotherapist in Mansa
              </span>
            </h1>
            <p className="text-white/80 text-lg font-body leading-relaxed max-w-2xl">
              For over five years, Sodhi Physiotherapy Clinic has been Mansa's
              premier destination for advanced, drug-free pain relief. We
              combine BPT-qualified expertise with the latest physiotherapy
              technology to help you recover faster and live better.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section
        className="bg-card border-b border-border"
        data-ocid="about.stats.section"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center"
                  data-ocid={`about.stat.${stat.label.toLowerCase().replace(/\s+/g, "_")}`}
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div className="font-display font-bold text-primary text-3xl md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm font-body mt-1">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-20 bg-background" data-ocid="about.story.section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Heart size={14} className="text-primary" />
                <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="font-display font-bold text-foreground text-3xl md:text-4xl mb-6 leading-tight">
                Built on a Mission to Bring{" "}
                <span className="text-primary">Drug-Free Pain Relief</span> to
                Mansa
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-5 font-body">
                Sodhi Physiotherapy Clinic was established with a single
                purpose: to give people in Mansa and across Punjab access to
                world-class physiotherapy without having to travel to big
                cities. Our founder — a{" "}
                <strong className="text-foreground">
                  BPT qualified physiotherapist
                </strong>{" "}
                — saw how chronic pain was affecting quality of life in our
                community and decided to bring advanced treatment home.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-5 font-body">
                Over five years, we have grown into one of the most trusted
                physiotherapy centres in Mansa, treating hundreds of patients
                suffering from back pain, cervical pain, knee arthritis, sports
                injuries, sciatica, and more. Our approach is always
                patient-focused:{" "}
                <strong className="text-foreground">
                  understand the root cause, create a personalised plan, and
                  deliver measurable results.
                </strong>
              </p>
              <p className="text-muted-foreground text-base leading-relaxed font-body">
                Today, Sodhi Physiotherapy Clinic is equipped with advanced
                machines including{" "}
                <strong className="text-foreground">
                  Shockwave Therapy, Electrotherapy, T-CAR, and BCM
                </strong>{" "}
                — technology that was previously only available in metro
                hospitals. We are proud to be Mansa's premier physiotherapy
                destination.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/assets/generated/physiotherapist-treatment.dim_700x500.jpg"
                  alt="Expert physiotherapist treating patient at Sodhi Physiotherapy Clinic"
                  className="w-full h-80 lg:h-[440px] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-primary text-primary-foreground rounded-xl p-5 shadow-elevated">
                <div className="font-display font-bold text-3xl">BPT</div>
                <div className="text-primary-foreground/80 text-xs mt-1">
                  Qualified Physiotherapist
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-card rounded-xl p-4 shadow-elevated border border-border">
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-yellow-400 text-base">
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

      {/* Our Values */}
      <section className="py-20 bg-muted/30" data-ocid="about.values.section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Shield size={14} className="text-accent" />
              <span className="text-accent text-xs font-semibold tracking-wide uppercase">
                Our Philosophy
              </span>
            </div>
            <h2 className="font-display font-bold text-foreground text-3xl md:text-4xl mb-4">
              The Values That Guide Our Care
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
              Every decision we make — from treatment protocols to clinic design
              — is guided by our commitment to patient wellbeing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card rounded-xl p-7 border border-border hover:border-primary/30 hover:shadow-subtle transition-smooth"
                  data-ocid={`about.value.item.${i + 1}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${value.bg} flex items-center justify-center mb-5`}
                  >
                    <Icon size={22} className={value.color} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section
        className="py-20 bg-background"
        data-ocid="about.equipment.section"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap size={14} className="text-primary" />
                <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                  Modern Technology
                </span>
              </div>
              <h2 className="font-display font-bold text-foreground text-3xl md:text-4xl mb-6 leading-tight">
                Advanced Machines for Faster Recovery
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 font-body">
                We invest in the latest physiotherapy technology so our patients
                get results that traditional clinics cannot deliver. Our
                state-of-the-art equipment enables precise diagnosis and more
                effective treatment at every stage of recovery.
              </p>
              <div className="flex flex-col gap-3">
                {EQUIPMENT.map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-accent flex-shrink-0"
                    />
                    <span className="text-foreground text-sm font-body flex-1">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elevated bg-muted/30 border border-border p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap size={28} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-xl mb-2">
                  Why Technology Matters
                </h3>
                <p className="text-muted-foreground text-sm font-body">
                  The right machine at the right time can cut recovery time in
                  half and eliminate pain that manual therapy alone cannot
                  resolve.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2x", label: "Faster Recovery" },
                  { value: "0", label: "Drug Side Effects" },
                  { value: "95%", label: "Patient Satisfaction" },
                  { value: "8+", label: "Treatment Modalities" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-card rounded-xl p-4 border border-border text-center"
                  >
                    <div className="font-display font-bold text-primary text-2xl">
                      {s.value}
                    </div>
                    <div className="text-muted-foreground text-xs mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-muted/30" data-ocid="about.trust.section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-3">
              One of the Most Trusted Physiotherapy Centres in Mansa
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto font-body">
              Hundreds of patients from Mansa and surrounding districts trust us
              for their physiotherapy needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              "BPT Qualified Physiotherapist",
              "Latest Physiotherapy Machines",
              "Personalised Treatment Plans",
              "Affordable, Transparent Pricing",
              "Drug-Free Recovery Methods",
              "Serving Mansa Since 5+ Years",
              "High Patient Success Rate",
              "Clean, Hygienic Clinic Environment",
            ].map((item, i) => (
              <div
                key={item}
                className="bg-card rounded-xl p-4 border border-border text-center hover:border-primary/30 transition-colors duration-200"
                data-ocid={`about.trust.item.${i + 1}`}
              >
                <CheckCircle2 size={18} className="text-accent mx-auto mb-2" />
                <p className="text-foreground text-xs font-body leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary" data-ocid="about.cta.section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-primary-foreground text-3xl md:text-4xl mb-4">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto font-body mb-10">
            Book a consultation with Mansa's most trusted physiotherapist today.
            Same-day appointments often available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="font-semibold gap-2 transition-smooth"
              onClick={handleBooking}
              data-ocid="about.book_appointment.primary_button"
            >
              <Phone size={18} />
              Book Appointment Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 gap-2 transition-smooth"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              data-ocid="about.whatsapp.secondary_button"
            >
              <SiWhatsapp size={18} />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
