import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SERVICES, WHATSAPP_URL } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Phone,
  Zap,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

interface ServicePageData {
  slug: string;
  title: string;
  tagline: string;
  heroDesc: string;
  image: string;
  badge?: string;
  symptoms: string[];
  treatmentApproach: string;
  treatmentMethods: string[];
  benefits: string[];
}

const SERVICE_PAGES: Record<string, ServicePageData> = {
  "back-pain": {
    slug: "back-pain",
    title: "Back Pain Treatment in Mansa",
    tagline: "Evidence-Based Therapy for Acute & Chronic Back Pain",
    heroDesc:
      "Suffering from back pain in Mansa? Our expert physiotherapist offers targeted treatment for lumbar pain, muscle spasms, postural imbalances, and chronic back conditions using advanced electrotherapy and manual therapy techniques.",
    image: "/assets/generated/back-pain-treatment.dim_900x500.jpg",
    symptoms: [
      "Dull, aching lower back pain that worsens with sitting",
      "Sharp or shooting pain when bending or lifting",
      "Morning stiffness that eases with movement",
      "Pain radiating to the hips or buttocks",
      "Muscle spasms and tightness around the lumbar spine",
      "Fatigue and weakness in the back after short activities",
    ],
    treatmentApproach:
      "We start with a thorough postural and movement assessment to identify the root cause — whether it's a structural issue, muscular imbalance, or disc-related problem. Treatment is always individualised for each patient.",
    treatmentMethods: [
      "Interferential Therapy (IFT) for deep tissue pain relief",
      "Ultrasound Therapy to reduce muscle inflammation",
      "Manual Therapy and joint mobilisation",
      "Core strengthening exercise programs",
      "Shockwave Therapy for chronic back conditions",
      "Postural correction and ergonomic training",
      "McKenzie Method for disc-related back pain",
    ],
    benefits: [
      "Significant pain reduction within the first few sessions",
      "Improved flexibility and range of motion",
      "Stronger core muscles to prevent recurrence",
      "Drug-free, non-surgical approach",
      "Return to work and daily activities faster",
      "Long-term back health management strategies",
    ],
  },
  "cervical-pain": {
    slug: "cervical-pain",
    title: "Cervical Pain Treatment in Mansa",
    tagline: "Targeted Neck Rehabilitation for Lasting Relief",
    heroDesc:
      "Cervical spondylosis, neck stiffness, and postural pain are among the most common conditions we treat. Our physiotherapist specialises in cervical spine rehabilitation to restore mobility and eliminate radiating arm pain in Mansa.",
    image: "/assets/generated/cervical-pain-treatment.dim_900x500.jpg",
    symptoms: [
      "Persistent neck pain and stiffness",
      "Headaches originating from the base of the skull",
      "Numbness or tingling radiating into the arms or fingers",
      "Difficulty turning the head fully",
      "Pain that worsens with prolonged screen time",
      "Shoulder ache connected to cervical spine issues",
    ],
    treatmentApproach:
      "Cervical pain often stems from disc degeneration, muscle tightness, or poor ergonomics. We combine cervical traction, soft tissue mobilisation, and targeted exercises to address both the symptoms and the underlying cause.",
    treatmentMethods: [
      "Cervical Traction for disc decompression",
      "TENS and IFT for pain and nerve relief",
      "Soft tissue massage and muscle release",
      "Cervical stabilisation and strengthening exercises",
      "Postural correction and ergonomic counselling",
      "Ultrasound Therapy for soft tissue healing",
      "Neural mobilisation for nerve-related arm symptoms",
    ],
    benefits: [
      "Reduced neck pain and stiffness within days",
      "Relief from radiating arm pain and tingling",
      "Restored neck range of motion",
      "Significant reduction in headache frequency",
      "Better posture for long-term prevention",
      "No surgery, no injections needed",
    ],
  },
  "knee-arthritis": {
    slug: "knee-arthritis",
    title: "Knee Pain & Arthritis Treatment in Mansa",
    tagline: "Non-Surgical Knee Rehabilitation for Lasting Mobility",
    heroDesc:
      "From osteoarthritis to ligament injuries and patellofemoral syndrome, our physiotherapy clinic in Mansa offers comprehensive knee pain treatment without surgery. We restore strength, reduce pain, and improve quality of life.",
    image: "/assets/generated/knee-pain-treatment.dim_900x500.jpg",
    symptoms: [
      "Pain and swelling around the knee joint",
      "Stiffness after prolonged sitting or sleeping",
      "Grinding or clicking sensation in the knee",
      "Difficulty climbing stairs or squatting",
      "Weakness and instability when walking",
      "Chronic aching that worsens in cold weather",
    ],
    treatmentApproach:
      "Knee arthritis requires a multi-faceted approach. We assess your gait, muscle strength, and joint alignment to design a plan combining pain-relief modalities with progressive strengthening exercises.",
    treatmentMethods: [
      "TENS and IFT for pain and swelling reduction",
      "Ultrasound Therapy for joint inflammation",
      "Knee mobilisation and joint techniques",
      "Quadriceps and hamstring strengthening",
      "BCM (Bio-Current Machine) therapy",
      "Balance and proprioception training",
      "Home exercise programs for long-term maintenance",
    ],
    benefits: [
      "Reduced knee pain and swelling",
      "Improved ability to walk, climb stairs, and sit comfortably",
      "Delayed or avoided need for knee replacement surgery",
      "Stronger muscles to protect the joint",
      "Better quality of life and independence",
      "Long-term arthritis management strategies",
    ],
  },
  "sports-injury": {
    slug: "sports-injury",
    title: "Sports Injury Rehabilitation in Mansa",
    tagline: "Rapid Return-to-Sport Programs for Athletes",
    heroDesc:
      "Whether you play cricket, kabaddi, football, or any sport — injuries happen. Our sports physiotherapy clinic in Mansa provides expert rehabilitation for ligament injuries, muscle strains, and overuse conditions to get you back in action fast.",
    image: "/assets/generated/sports-injury-rehab.dim_900x500.jpg",
    symptoms: [
      "Acute pain following a sports injury or fall",
      "Swelling and bruising around a joint",
      "Reduced range of motion post-injury",
      "Muscle weakness after a strain or tear",
      "Repeated injuries to the same area",
      "Pain with specific movements or loading",
    ],
    treatmentApproach:
      "We follow a structured three-phase rehabilitation protocol: initial pain and swelling control, functional strength restoration, and sport-specific return-to-play conditioning. Every phase is tailored to your sport and fitness level.",
    treatmentMethods: [
      "RICE Protocol and acute injury management",
      "Electrotherapy (IFT/TENS) for pain and swelling",
      "Soft tissue therapy and scar tissue management",
      "Progressive strength and conditioning exercises",
      "Functional movement and gait retraining",
      "Sport-specific drills and return-to-play testing",
      "Injury prevention education and strategies",
    ],
    benefits: [
      "Faster return to full training and competition",
      "Significantly reduced risk of re-injury",
      "Full restoration of strength and mobility",
      "Sport-specific fitness conditioning",
      "Expert guidance at every rehabilitation stage",
      "Long-term performance and injury prevention strategies",
    ],
  },
  "slip-disc-sciatica": {
    slug: "slip-disc-sciatica",
    title: "Slip Disc & Sciatica Treatment in Mansa",
    tagline: "Specialised Spinal Decompression & Nerve Pain Relief",
    heroDesc:
      "A slipped disc or sciatic nerve pain can be debilitating. Our physiotherapist uses evidence-based spinal decompression, neural mobilisation, and targeted exercises to relieve nerve pain and restore spinal health without surgery.",
    image: "/assets/generated/sciatica-treatment.dim_900x500.jpg",
    symptoms: [
      "Sharp, shooting pain from the lower back down one leg",
      "Numbness, tingling, or burning sensation in the leg or foot",
      "Weakness in one leg making walking difficult",
      "Pain that worsens with coughing, sneezing, or sitting",
      "Lower back pain combined with leg symptoms",
      "Difficulty standing or sitting for more than a few minutes",
    ],
    treatmentApproach:
      "Disc herniation and sciatica require careful, phased treatment. We begin with pain management and nerve irritation reduction, then progress to spinal stabilisation and postural correction to prevent recurrence.",
    treatmentMethods: [
      "Mechanical Lumbar Traction (spinal decompression)",
      "Ultrasound and IFT for nerve pain relief",
      "Neural Mobilisation (nerve flossing) techniques",
      "McKenzie Method for disc centralisation",
      "Core stabilisation and lumbar strengthening",
      "Postural correction and ergonomic counselling",
      "Shockwave Therapy for chronic disc-related pain",
    ],
    benefits: [
      "Significant reduction in leg pain and nerve symptoms",
      "Restored walking ability and daily function",
      "Avoided or delayed spinal surgery",
      "Stronger core to protect the lumbar discs",
      "Postural awareness to prevent recurrence",
      "Long-term spinal health management",
    ],
  },
  "shockwave-therapy": {
    slug: "shockwave-therapy",
    title: "Shockwave Therapy in Mansa",
    tagline: "Advanced ESWT — The Gold Standard for Chronic Pain",
    heroDesc:
      "Sodhi Physiotherapy Clinic is one of the few clinics in Mansa offering Extracorporeal Shockwave Therapy (ESWT). This non-invasive, cutting-edge treatment accelerates tissue healing and eliminates chronic pain that has not responded to conventional therapy.",
    image: "/assets/generated/shockwave-therapy.dim_900x500.jpg",
    badge: "Advanced Treatment",
    symptoms: [
      "Chronic heel pain (plantar fasciitis) lasting months",
      "Calcific shoulder tendinitis (calcium deposits)",
      "Patellar tendinopathy (jumper's knee)",
      "Achilles tendinopathy that won't heal",
      "Elbow tendinitis (tennis or golfer's elbow)",
      "Chronic myofascial trigger points and muscle knots",
    ],
    treatmentApproach:
      "Shockwave therapy delivers high-energy acoustic waves to the target tissue, triggering a natural healing response. It breaks down calcific deposits, stimulates collagen production, and promotes blood flow to chronic, poorly-healing areas.",
    treatmentMethods: [
      "Focused Shockwave (FSWT) for deep tissue targeting",
      "Radial Shockwave (RSWT) for broader treatment areas",
      "Guided palpation targeting for precision",
      "3–5 sessions typically required for most conditions",
      "Combined with manual therapy and exercise",
      "No anaesthesia or extended downtime required",
      "Post-treatment rehabilitation protocol",
    ],
    benefits: [
      "Effective for conditions that don't respond to conventional therapy",
      "Non-surgical, non-injection treatment",
      "Stimulates natural healing at the cellular level",
      "Breaks down painful calcium deposits",
      "Long-lasting pain relief proven by clinical studies",
      "Quick sessions with no recovery downtime",
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams({ from: "/services/$slug" });
  const detail = SERVICE_PAGES[slug];
  const serviceBase = SERVICES.find((s) => s.id === slug);
  const handleBooking = () => window.open(WHATSAPP_URL, "_blank");

  if (!detail) {
    return (
      <Layout>
        <div
          className="container mx-auto px-4 py-32 text-center"
          data-ocid="service.not_found.section"
        >
          <AlertCircle
            size={48}
            className="text-muted-foreground mx-auto mb-6"
          />
          <h1 className="font-display font-bold text-foreground text-3xl mb-4">
            Service Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the service you're looking for.
          </p>
          <Link
            to="/"
            className="text-primary hover:underline inline-flex items-center gap-2"
            data-ocid="service.back_home.link"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </Layout>
    );
  }

  const otherServices = SERVICES.filter((s) => s.id !== slug).slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative bg-foreground overflow-hidden py-20 md:py-28"
        data-ocid="service.hero.section"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={detail.image}
            alt={detail.title}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors duration-200"
            data-ocid="service.back_home.link"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            {detail.badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/40 mb-5">
                <Zap size={13} className="text-accent" />
                <span className="text-accent text-xs font-semibold tracking-wide uppercase">
                  {detail.badge}
                </span>
              </div>
            )}
            <h1 className="font-display font-bold text-white text-3xl md:text-4xl xl:text-5xl leading-tight mb-5">
              {detail.title}
            </h1>
            <p className="text-accent font-display font-semibold text-lg mb-5">
              {detail.tagline}
            </p>
            <p className="text-white/80 text-base font-body leading-relaxed max-w-2xl">
              {detail.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms + Treatment Approach */}
      <section
        className="py-20 bg-background"
        data-ocid="service.symptoms.section"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Symptoms */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <AlertCircle size={14} className="text-primary" />
                <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                  Common Symptoms
                </span>
              </div>
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-6 leading-tight">
                Do You Experience Any of These?
              </h2>
              <div className="flex flex-col gap-3">
                {detail.symptoms.map((symptom, i) => (
                  <div
                    key={symptom}
                    className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors duration-200"
                    data-ocid={`service.symptom.item.${i + 1}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-foreground text-sm font-body leading-relaxed">
                      {symptom}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Approach */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <CheckCircle2 size={14} className="text-accent" />
                <span className="text-accent text-xs font-semibold tracking-wide uppercase">
                  Our Approach
                </span>
              </div>
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-5 leading-tight">
                How We Treat It
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 font-body">
                {detail.treatmentApproach}
              </p>
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-display font-semibold text-foreground text-lg mb-5">
                  Treatment Methods Used
                </h3>
                <div className="flex flex-col gap-3">
                  {detail.treatmentMethods.map((method, i) => (
                    <div
                      key={method}
                      className="flex items-start gap-3"
                      data-ocid={`service.method.item.${i + 1}`}
                    >
                      <CheckCircle2
                        size={16}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-foreground text-sm font-body">
                        {method}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="service.benefits.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Zap size={14} className="text-primary" />
              <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                Treatment Benefits
              </span>
            </div>
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
              What You Can Expect
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
              Patients who complete their treatment plan report significant,
              lasting improvements in pain and daily function.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {detail.benefits.map((benefit, i) => (
              <div
                key={benefit}
                className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-subtle transition-smooth flex items-start gap-4"
                data-ocid={`service.benefit.item.${i + 1}`}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={16} className="text-primary" />
                </div>
                <p className="text-foreground text-sm font-body leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary" data-ocid="service.cta.section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-primary-foreground text-3xl md:text-4xl mb-4">
            Book Your {serviceBase?.title ?? "Treatment"} Appointment
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto font-body mb-10">
            Don't let pain hold you back. Book a consultation today and take the
            first step towards a pain-free life in Mansa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="font-semibold gap-2 transition-smooth"
              onClick={handleBooking}
              data-ocid="service.book_appointment.primary_button"
            >
              <Phone size={18} />
              Book Appointment Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 gap-2 transition-smooth"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              data-ocid="service.whatsapp.secondary_button"
            >
              <SiWhatsapp size={18} />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {otherServices.length > 0 && (
        <section
          className="py-20 bg-background"
          data-ocid="service.related.section"
        >
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-8 text-center">
              Other Treatments We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherServices.map((s, i) => (
                <Link
                  key={s.id}
                  to="/services/$slug"
                  params={{ slug: s.id }}
                  className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-elevated transition-smooth group flex items-start gap-4"
                  data-ocid={`service.related.item.${i + 1}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-200">
                    {s.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors duration-200">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed font-body line-clamp-2">
                      {s.shortDesc}
                    </p>
                    <div className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-2 group-hover:gap-2 transition-all duration-200">
                      Learn More <ChevronRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
