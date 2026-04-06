import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER_E164_NO_PLUS = "96181821751";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER_E164_NO_PLUS}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 left-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/40"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}

