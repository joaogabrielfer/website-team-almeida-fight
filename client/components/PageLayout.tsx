import type { ComponentChildren } from "preact";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppButton } from "./WhatsAppButton";

export function PageLayout({ children }: { children: ComponentChildren }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0d0d0d] font-['Montserrat'] text-white selection:bg-[#d4af37] selection:text-[#0d0d0d]">
      <a
        className="fixed left-4 top-[-5rem] z-[100] bg-[#d4af37] px-4 py-3 text-sm font-bold text-[#0d0d0d] focus:top-4"
        href="#conteudo"
      >
        Pular para o conteúdo
      </a>
      <Header />
      {children}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
