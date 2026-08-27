import { WHATSAPP_URL } from "../data/site";

export function WhatsAppButton() {
  return (
    <a
      aria-label="Agendar aula experimental pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/20 bg-[#25d366] text-2xl shadow-[0_12px_35px_rgba(37,211,102,0.32)] transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25d366] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      href={WHATSAPP_URL}
      rel="noreferrer"
      target="_blank"
    >
      <span aria-hidden="true">💬</span>
    </a>
  );
}
