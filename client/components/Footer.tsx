import { Brand } from "./Brand";
import { PHONE_DISPLAY, WHATSAPP_URL } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#d4af37]/30 bg-[#090909]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Brand />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
            Disciplina para o corpo. Estratégia para a mente. Respeito em cada treino.
          </p>
        </div>

        <div className="md:text-right">
          <a
            className="block text-sm font-bold text-white/65 transition-colors hover:text-[#d4af37]"
            href={WHATSAPP_URL}
            rel="noreferrer"
            target="_blank"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#d4af37] transition-colors hover:text-[#f3e5ab]"
            href="/#inicio"
          >
            Voltar ao topo ↑
          </a>
          <p className="mt-4 text-xs text-white/35">
            © 2026 Academia Almeida Fight. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
