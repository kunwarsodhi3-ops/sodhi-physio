export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  review: string;
  condition: string;
}

export const CLINIC_NAME = "Sodhi Physiotherapy Clinic";
export const PHONE_PRIMARY = "+91 8567957674";
export const PHONE_SECONDARY = "+91 7889014549";
export const PHONE_PRIMARY_RAW = "918567957674";
export const PHONE_SECONDARY_RAW = "917889014549";
export const LOCATION = "Mansa, Punjab, India";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I would like to book an appointment at Sodhi Physiotherapy Clinic.",
);
export const WHATSAPP_URL = `https://wa.me/${PHONE_PRIMARY_RAW}?text=${WHATSAPP_MESSAGE}`;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "back-pain",
    title: "Back Pain Treatment",
    shortDesc:
      "Evidence-based therapy to relieve acute & chronic back pain using advanced electrotherapy, manual therapy & shockwave techniques.",
    icon: "🦴",
    color: "text-primary",
  },
  {
    id: "cervical-pain",
    title: "Cervical Pain Treatment",
    shortDesc:
      "Targeted neck & cervical spine rehabilitation to restore mobility, reduce stiffness, and eliminate radiating arm pain.",
    icon: "🔬",
    color: "text-accent",
  },
  {
    id: "knee-arthritis",
    title: "Knee Pain & Arthritis",
    shortDesc:
      "Non-surgical knee pain management with TENS, ultrasound therapy & personalised exercise programs for lasting relief.",
    icon: "🦵",
    color: "text-primary",
  },
  {
    id: "sports-injury",
    title: "Sports Injury Rehabilitation",
    shortDesc:
      "Rapid return-to-sport programs for ligament injuries, muscle strains & overuse conditions using cutting-edge physiotherapy.",
    icon: "⚡",
    color: "text-accent",
  },
  {
    id: "slip-disc-sciatica",
    title: "Slip Disc / Sciatica",
    shortDesc:
      "Specialised spinal decompression & neural mobilisation protocols for disc herniation and sciatic nerve pain.",
    icon: "🌟",
    color: "text-primary",
  },
  {
    id: "shockwave-therapy",
    title: "Shockwave Therapy",
    shortDesc:
      "State-of-the-art extracorporeal shockwave therapy — the gold standard for chronic tendinopathies & calcific conditions.",
    icon: "💫",
    color: "text-accent",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajinder Singh",
    location: "Mansa, Punjab",
    rating: 5,
    review:
      "I had severe back pain for 3 years. After just 10 sessions at Sodhi Physiotherapy Clinic, I'm 90% pain-free. The doctor is highly skilled and the machines are very advanced. Best physiotherapy in Mansa!",
    condition: "Chronic Back Pain",
  },
  {
    name: "Gurpreet Kaur",
    location: "Mansa",
    rating: 5,
    review:
      "Excellent treatment for my cervical spondylosis. The shockwave therapy was a game changer. I had given up hope after trying many places, but this clinic gave me my life back. Highly recommended!",
    condition: "Cervical Spondylosis",
  },
  {
    name: "Harpreet Kumar",
    location: "Near Mansa",
    rating: 5,
    review:
      "Suffered a sports knee injury playing cricket. The personalised rehab plan here was outstanding. Fully recovered in 6 weeks and playing again. The staff is very professional and caring.",
    condition: "Sports Knee Injury",
  },
  {
    name: "Sukhwinder Dhaliwal",
    location: "Mansa, Punjab",
    rating: 5,
    review:
      "My mother had terrible sciatica pain. After treatment at Sodhi Physiotherapy, she walks without pain now. The doctor explained everything clearly and the clinic is very hygienic and modern.",
    condition: "Sciatica",
  },
  {
    name: "Manpreet Brar",
    location: "Mansa District",
    rating: 5,
    review:
      "Best physiotherapist near me! Very affordable compared to city hospitals. The BCM therapy and electrotherapy combination worked wonders for my knee arthritis. Will recommend to everyone.",
    condition: "Knee Arthritis",
  },
];
