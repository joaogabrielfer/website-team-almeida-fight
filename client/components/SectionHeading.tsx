type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-[0.67rem] font-black uppercase tracking-[0.3em] text-[#d4af37]">
        {eyebrow}
      </p>
      <h2 className="font-['Teko'] text-[clamp(2.75rem,7vw,5.5rem)] font-bold uppercase leading-[0.86] tracking-[-0.025em] text-white">
        {title}
      </h2>
      {description ? (
        <p className={`mt-6 text-base leading-7 text-white/55 sm:text-lg ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
