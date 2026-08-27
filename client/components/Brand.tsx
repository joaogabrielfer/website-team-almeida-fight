import { Link } from "lakebed/client";

type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <Link
      aria-label="Academia Almeida Fight — página inicial"
      className="group inline-flex flex-col leading-none no-underline"
      to="/"
    >
      <span
        className={`${compact ? "text-[1.75rem]" : "text-[2rem]"} font-['Teko'] font-bold uppercase tracking-[0.04em] text-white`}
      >
        Almeida <span className="text-[#d4af37]">Fight</span>
      </span>
      <span className="mt-[-0.15rem] text-[0.52rem] font-black uppercase tracking-[0.39em] text-white/45 transition-colors group-hover:text-[#d4af37]">
        Centro de treinamento
      </span>
    </Link>
  );
}
