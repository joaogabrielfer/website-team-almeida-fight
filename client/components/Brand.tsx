import { TEAM_ALMEIDA_FIGHT_EMBLEM_DATA_URL } from "../data/emblem";

type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <a
      aria-label="Academia Almeida Fight — página inicial"
      className="group inline-flex min-w-0 items-center gap-3 leading-none no-underline"
      href="/"
    >
      <img
        alt=""
        className={`${compact ? "h-10 w-10 sm:h-14 sm:w-14" : "h-14 w-14 sm:h-16 sm:w-16"} shrink-0 rounded-full border border-white/10 bg-[#070707] object-contain shadow-[0_0_0_3px_rgba(212,175,55,0.12)] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_0_3px_rgba(212,175,55,0.35)]`}
        src={TEAM_ALMEIDA_FIGHT_EMBLEM_DATA_URL}
      />
      <span className="flex min-w-0 flex-col">
        <span
          className={`${compact ? "text-[1.2rem] sm:text-[1.75rem]" : "text-[1.4rem] sm:text-[2rem]"} whitespace-nowrap font-['Teko'] font-bold uppercase tracking-[0.025em] text-white`}
        >
          Academia <span className="text-[#d4af37]">Almeida Fight</span>
        </span>
        <span className="mt-[-0.15rem] text-[0.42rem] font-black uppercase tracking-[0.24em] text-white/45 transition-colors group-hover:text-[#d4af37] sm:text-[0.52rem] sm:tracking-[0.32em]">
          Centro de treinamento
        </span>
      </span>
    </a>
  );
}
