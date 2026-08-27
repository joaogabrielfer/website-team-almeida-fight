import { Link } from "lakebed/client";

import type { Modality } from "../../shared/types";

export function ModalityCard({ modality }: { modality: Modality }) {
  return (
    <article className="group relative flex min-h-[23rem] flex-col overflow-hidden border-t-4 border-[#d4af37] bg-[#171717] p-7 shadow-[0_22px_60px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(212,175,55,0.11)] sm:p-8">
      <div className="pointer-events-none absolute -right-5 -top-7 font-['Teko'] text-[9rem] font-bold leading-none text-white/[0.025] transition-colors group-hover:text-[#d4af37]/[0.055]">
        {modality.number}
      </div>
      <p className="relative text-[0.63rem] font-black uppercase tracking-[0.24em] text-[#d4af37]">
        {modality.label}
      </p>
      <h3 className="relative mt-8 font-['Teko'] text-5xl font-bold uppercase leading-none text-white">
        {modality.name}
      </h3>
      <p className="relative mt-5 text-sm leading-6 text-white/50">{modality.summary}</p>
      <div className="mt-auto pt-9">
        <Link
          aria-label={`Conhecer a modalidade ${modality.name}`}
          className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.17em] text-white transition-colors group-hover:text-[#f3e5ab] focus-visible:outline-none focus-visible:text-[#f3e5ab]"
          to={modality.path}
        >
          Conhecer modalidade
          <span aria-hidden="true" className="text-lg text-[#d4af37] transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
