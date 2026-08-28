import { Link } from "lakebed/client";

import type { Modality } from "../../shared/types";

export function ModalityCard({ modality }: { modality: Modality }) {
  return (
    <article className="group relative flex min-h-[23rem] flex-col overflow-hidden border-t-4 border-[#d4af37] bg-[#171717] p-7 shadow-[0_22px_60px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(212,175,55,0.11)] sm:p-8">
      <div className="pointer-events-none absolute -right-5 -top-7 font-['Teko'] text-[9rem] font-bold leading-none text-white/[0.025] transition-colors group-hover:text-[#d4af37]/[0.055]">
        {modality.number}
      </div>
      <p className="relative text-[0.63rem] font-black uppercase tracking-[0.24em] text-[#d4af37]">
        {modality.label}
      </p>
      <h3 className="relative mt-8 font-['Teko'] text-[clamp(2.65rem,3.4vw,3.25rem)] font-bold uppercase leading-[0.92] text-white">
        {modality.name}
      </h3>
      <p className="relative mt-5 text-sm leading-6 text-white/50">{modality.summary}</p>
      <Link
        aria-label={`Conhecer a modalidade ${modality.name}`}
        className="group/action mt-auto flex min-h-20 items-center justify-between rounded-xl border border-[#d4af37]/30 bg-[linear-gradient(120deg,#0b0b0b,#141414)] px-5 py-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_30px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:border-[#f0ca48] hover:bg-[linear-gradient(120deg,#d4af37,#edcb55)] hover:text-[#0d0d0d] hover:shadow-[0_16px_35px_rgba(212,175,55,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f3e5ab]"
        to={modality.path}
      >
        <span className="flex flex-col gap-1">
          <span className="text-[0.5rem] font-black uppercase tracking-[0.2em] text-[#d4af37] transition-colors group-hover/action:text-[#0d0d0d]/60">Acessar página</span>
          <span className="text-xs font-black uppercase tracking-[0.17em]">Conhecer modalidade</span>
        </span>
        <span aria-hidden="true" className="text-xl text-[#d4af37] transition-all group-hover/action:translate-x-1 group-hover/action:text-[#0d0d0d]">
          →
        </span>
      </Link>
    </article>
  );
}
