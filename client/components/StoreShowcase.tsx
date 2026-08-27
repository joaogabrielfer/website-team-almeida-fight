export function StoreShowcase() {
  return (
    <div
      aria-label="Ilustração de produtos da Almeida Fight Store"
      className="group relative min-h-[24rem] overflow-hidden border border-[#d4af37]/30 bg-[radial-gradient(circle_at_50%_42%,rgba(212,175,55,0.14),transparent_52%),#0d0d0d]"
      role="img"
    >
      <div className="absolute left-0 top-0 h-1 w-28 bg-[#d4af37]" />
      <div className="absolute right-5 top-5 border border-white/10 px-3 py-1 text-[0.55rem] font-bold uppercase tracking-[0.18em] text-white/40">
        Equipamentos oficiais
      </div>

      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.025]"
        fill="none"
        viewBox="0 0 620 420"
      >
        <defs>
          <pattern id="store-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0v32" stroke="#fff" strokeOpacity=".025" />
          </pattern>
          <linearGradient id="store-gold" x1="120" x2="500" y1="80" y2="350" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f3e5ab" />
            <stop offset="1" stopColor="#d4af37" />
          </linearGradient>
        </defs>
        <rect width="620" height="420" fill="url(#store-grid)" />
        <path
          d="m179 102-67 36 31 70 38-17v146h168V191l38 17 31-70-67-36c-21 25-53 37-86 37s-65-12-86-37Z"
          fill="#171717"
          stroke="url(#store-gold)"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <path d="M243 161h44v18h-24v15h21v18h-21v31h-20v-82Z" fill="#fff" />
        <path d="m289 243 30-82h20l31 82h-23l-6-18h-27l-6 18h-19Zm31-36h15l-7-25-8 25Z" fill="#d4af37" />
        <path
          d="M422 247c22-15 37-19 52-8 13 10 16 28 10 46l-16 48c-4 13-15 21-28 20l-27-2c-15-1-24-16-20-30l11-37c4-15 3-29 18-37Z"
          fill="#171717"
          stroke="#d4af37"
          strokeWidth="4"
        />
        <path d="m416 301 59 19M425 276l50 17" stroke="#f3e5ab" strokeOpacity=".55" strokeWidth="3" />
        <circle cx="99" cy="306" r="47" stroke="#fff" strokeDasharray="3 10" strokeOpacity=".12" />
        <path d="M63 306h72M99 270v72" stroke="#d4af37" strokeOpacity=".45" />
      </svg>

      <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2 border-t border-[#d4af37]/30 pt-4">
        {['Vestuário', 'Luvas', 'Acessórios'].map((item) => (
          <span className="bg-[#171717] px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#d4af37]" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
