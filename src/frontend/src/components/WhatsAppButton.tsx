import { WHATSAPP_URL } from "@/types";
import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-elevated transition-smooth hover:scale-110 hover:shadow-elevated"
      style={{ background: "#25D366" }}
      data-ocid="whatsapp.floating.button"
    >
      <SiWhatsapp size={28} color="white" />
    </a>
  );
}
