import { Link } from "lakebed/client";

import { TEAM_ALMEIDA_FIGHT_EMBLEM_DATA_URL } from "../data/emblem";

type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <Link
      aria-label="Academia Almeida Fight — página inicial"
      className="group inline-flex items-center gap-3 leading-none no-underline"
      to="/"
    >
      <img
        alt=""
        className={`${compact ? "h-12 w-12 sm:h-14 sm:w-14" : "h-16 w-16"} shrink-0 rounded-full border border-white/10 bg-[#070707] object-contain shadow-[0_0_0_3px_rgba(212,175,55,0.12)] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_0_3px_rgba(212,175,55,0.35)]`}
        src={TEAM_ALMEIDA_FIGHT_EMBLEM_DATA_URL}
      />
      <span className="flex flex-col">
        <span
          className={`${compact ? "text-[1.75rem] sm:text-[2rem]" : "text-[2rem]"} font-['Teko'] font-bold uppercase tracking-[0.04em] text-white`}
        >
          Almeida <span className="text-[#d4af37]">Fight</span>
        </span>
        <span className="mt-[-0.15rem] text-[0.52rem] font-black uppercase tracking-[0.32em] text-white/45 transition-colors group-hover:text-[#d4af37]">
          Centro de treinamento
        </span>
      </span>
    </Link>
  );
}
