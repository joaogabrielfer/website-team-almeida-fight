function FighterLineArt() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      fill="none"
      viewBox="0 0 760 500"
    >
      <defs>
        <linearGradient id="fighter-gold" x1="180" x2="570" y1="80" y2="430" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f3e5ab" />
          <stop offset="1" stopColor="#d4af37" stopOpacity=".35" />
        </linearGradient>
        <pattern id="training-grid" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M36 0H0v36" stroke="#fff" strokeOpacity=".035" />
        </pattern>
      </defs>
      <rect width="760" height="500" fill="url(#training-grid)" />
      <path d="M58 395h644M82 421h596" stroke="#d4af37" strokeOpacity=".25" />
      <path d="M102 145h556M86 225h588M70 305h620" stroke="#fff" strokeOpacity=".1" strokeWidth="3" />
      <path d="M122 102v258M638 102v258" stroke="#d4af37" strokeOpacity=".45" strokeWidth="5" />

      <circle cx="348" cy="132" r="36" stroke="url(#fighter-gold)" strokeWidth="10" />
      <path
        d="M327 174c-26 16-38 52-35 93l8 76m73-168c25 24 31 59 19 101l-20 67m-60-113 65 8m-76 13-58 40m141-75 51-39 54 7m-145 158-47 82m83-82 50 81"
        stroke="url(#fighter-gold)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="14"
      />
      <path d="m231 281 20-20 23 10-2 24-22 13-19-27Zm245-111 30 2 8 22-21 18-27-9 10-33Z" fill="#d4af37" />
      <circle cx="348" cy="228" r="92" stroke="#fff" strokeDasharray="4 16" strokeOpacity=".13" />
      <circle cx="348" cy="228" r="126" stroke="#d4af37" strokeDasharray="2 22" strokeOpacity=".12" />
    </svg>
  );
}

function PrecisionGraphic() {
  return (
    <svg aria-hidden="true" className="h-full w-full" fill="none" viewBox="0 0 320 220">
      <circle cx="224" cy="78" r="94" stroke="#fff" strokeOpacity=".05" strokeWidth="22" />
      <circle cx="224" cy="78" r="64" stroke="#d4af37" strokeOpacity=".2" />
      <circle cx="224" cy="78" r="37" stroke="#d4af37" strokeOpacity=".5" />
      <circle cx="224" cy="78" r="7" fill="#d4af37" />
      <path d="m116 181 105-99M206 81l19-4-5 19" stroke="#f3e5ab" strokeLinecap="round" strokeWidth="3" />
      <path d="M18 190h284" stroke="#fff" strokeOpacity=".08" />
    </svg>
  );
}

const principles = [
  { number: "01", title: "Técnica", text: "Repetir certo até o movimento virar instinto." },
  { number: "02", title: "Intensidade", text: "Treinar com propósito em cada minuto do round." },
  { number: "03", title: "Respeito", text: "Evoluir junto, honrando a equipe e o adversário." },
  { number: "04", title: "Superação", text: "Sair melhor do que entrou, todos os dias." },
] as const;

export function TrainingGallery() {
  return (
    <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-12 lg:grid-rows-[20rem_17rem]">
      <article className="group relative min-h-[28rem] overflow-hidden border border-[#d4af37]/30 bg-[#141414] lg:col-span-7 lg:row-span-2 lg:min-h-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(212,175,55,0.12),transparent_42%),linear-gradient(135deg,#171717,#0d0d0d)]" />
        <div className="absolute inset-x-0 bottom-0 top-[18%] opacity-90 transition-transform duration-700 group-hover:scale-[1.025]">
          <FighterLineArt />
        </div>
        <div className="absolute left-0 top-0 h-1 w-28 bg-[#d4af37]" />
        <div className="relative flex h-full min-h-[28rem] flex-col justify-between p-6 sm:p-9 lg:min-h-0">
          <div className="flex items-start justify-between gap-5">
            <span className="text-[0.62rem] font-black uppercase tracking-[0.24em] text-[#d4af37]">Almeida Fight / 2026</span>
            <span className="border border-white/15 px-3 py-1 text-[0.55rem] font-bold uppercase tracking-[0.18em] text-white/45">Dentro do treino</span>
          </div>
          <div className="relative max-w-xl bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent pb-1 pt-16">
            <p className="font-['Teko'] text-[clamp(2.5rem,5vw,4.75rem)] font-bold uppercase leading-[0.86] text-white">
              Quando a técnica encontra a coragem, <span className="text-[#d4af37]">o limite muda.</span>
            </p>
          </div>
        </div>
      </article>

      <article className="group relative min-h-80 overflow-hidden border-t-4 border-[#d4af37] bg-[#171717] p-7 lg:col-span-5 lg:min-h-0 sm:p-8">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <PrecisionGraphic />
        </div>
        <div className="relative flex h-full max-w-[16rem] flex-col justify-between">
          <span className="text-[0.6rem] font-black uppercase tracking-[0.24em] text-[#d4af37]">Precisão acima da pressa</span>
          <div>
            <h3 className="font-['Teko'] text-4xl font-bold uppercase leading-none">Cada detalhe importa</h3>
            <p className="mt-3 text-sm leading-6 text-white/45">Base, distância, tempo e leitura: evolução construída round após round.</p>
          </div>
        </div>
      </article>

      <article className="relative overflow-hidden border border-white/10 bg-[#d4af37] p-7 text-[#0d0d0d] lg:col-span-5 sm:p-8">
        <span className="absolute -right-2 -top-8 font-['Teko'] text-[9rem] font-bold leading-none text-[#0d0d0d]/[0.06]">4X</span>
        <p className="relative text-[0.6rem] font-black uppercase tracking-[0.24em]">Nossa cultura em movimento</p>
        <div className="relative mt-7 grid grid-cols-2 gap-x-5 gap-y-6">
          {principles.map((principle) => (
            <div className="border-t border-[#0d0d0d]/30 pt-3" key={principle.title}>
              <div className="flex items-baseline gap-2">
                <span className="text-[0.55rem] font-black">{principle.number}</span>
                <h3 className="font-['Teko'] text-2xl font-bold uppercase leading-none">{principle.title}</h3>
              </div>
              <p className="mt-2 hidden text-[0.68rem] font-medium leading-4 text-[#0d0d0d]/65 sm:block">{principle.text}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
