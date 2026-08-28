import type { ComponentChildren } from "preact";
import { useLocation } from "lakebed/client";
import { useEffect } from "preact/hooks";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppButton } from "./WhatsAppButton";

export function PageLayout({ children }: { children: ComponentChildren }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0d0d0d] font-['Montserrat'] text-white selection:bg-[#d4af37] selection:text-[#0d0d0d]">
      <style>{`
        html { scroll-padding-top: 5rem; }
        #inicio, #sobre, #modalidades, #horarios, #equipe, #loja, #contato {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
        @media (max-width: 767px) {
          html { scroll-snap-type: y proximity; }
        }
        @media (min-width: 768px) {
          html { scroll-snap-type: y mandatory; }
        }
      `}</style>
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
