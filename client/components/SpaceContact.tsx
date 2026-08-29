import { SPACE_IMAGES } from "../data/spaceImages";
import {
  ACADEMY_ADDRESS,
  GOOGLE_MAPS_DIRECTIONS_URL,
  GOOGLE_MAPS_EMBED_URL,
  PHONE_DISPLAY,
  WAZE_DIRECTIONS_URL,
  WHATSAPP_URL,
} from "../data/site";

const spacePhotos = [
  { src: "/images/upscaled/space/1.png", alt: "Imagem ilustrativa da área principal de treino" },
  { src: SPACE_IMAGES[1], alt: "Imagem ilustrativa do ringue e equipamentos" },
  { src: SPACE_IMAGES[2], alt: "Imagem ilustrativa do tatame da academia" },
] as const;

function GoogleMapsIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7 shrink-0" viewBox="0 0 32 32">
      <path d="M16 3c-5.2 0-9.4 4.1-9.4 9.2C6.6 19 16 29 16 29s9.4-10 9.4-16.8C25.4 7.1 21.2 3 16 3Z" fill="#EA4335" />
      <path d="M16 3v12.3l-7.9 6.9C5.7 18.6 4.7 15.3 6 11c1.1-4.7 5.2-8 10-8Z" fill="#34A853" />
      <path d="m16 15.3 7.9 6.9C25.5 18.6 26.5 15.3 26 11c-1.1-4.7-5.2-8-10-8v12.3Z" fill="#4285F4" />
      <circle cx="16" cy="12.2" fill="white" r="4.3" />
      <circle cx="16" cy="12.2" fill="#FBBC04" r="2.5" />
    </svg>
  );
}

function WazeIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7 shrink-0" fill="none" viewBox="0 0 32 32">
      <path d="M25.4 14.3c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 1.8.5 3.4 1.4 4.8l-1.9 2.4 3.4-.8c1.7 1.7 3.9 2.8 6.4 2.8 5.2 0 9.4-4.1 9.4-9.2Z" fill="#33CCFF" />
      <path d="M16 8.5c-2.8 0-5.1 2.2-5.1 5 0 2.9 2.3 5.1 5.1 5.1s5.1-2.2 5.1-5.1c0-2.8-2.3-5-5.1-5Z" fill="white" />
      <circle cx="14" cy="13.1" fill="#15222A" r="1" />
      <circle cx="18" cy="13.1" fill="#15222A" r="1" />
      <path d="M13.3 16c1.6 1.3 3.8 1.3 5.4 0" stroke="#15222A" strokeLinecap="round" strokeWidth="1.2" />
      <path d="M10.5 24.4c.5 1.7 2 2.9 3.8 2.9M17.8 27.3c1.8 0 3.3-1.2 3.8-2.9M24.2 24.4c.5 1.7 2 2.9 3.8 2.9" stroke="#33CCFF" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

export function SpaceContact() {
  return (
    <section className="scroll-mt-20 border-y border-white/5 bg-[#111111] py-20 sm:py-28" id="contato">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] font-black uppercase tracking-[0.28em] text-[#d4af37]">Conheça o espaço</p>
            <h2 className="mt-3 font-['Teko'] text-[clamp(3.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.82]">
              Onde o treino acontece
            </h2>
          </div>
          <span className="w-fit border-l border-[#d4af37]/55 pl-3 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-white/35">
            Imagens ilustrativas
          </span>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {spacePhotos.map((photo) => (
            <figure className="group relative min-h-60 overflow-hidden border border-white/10 bg-black sm:h-72" key={photo.alt}>
              <img alt={photo.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" loading="lazy" src={photo.src} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </figure>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-[0.62rem] font-black uppercase tracking-[0.25em] text-[#d4af37]">Rotas</p>
          <h3 className="mt-2 font-['Teko'] text-4xl font-bold uppercase leading-none">Encontre a academia</h3>
        </div>

        <div className="mt-7 grid overflow-hidden border border-white/10 bg-[#0b0b0b] lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative min-h-[23rem] bg-[#171717]">
            <iframe
              allowFullScreen
              className="absolute inset-0 h-full w-full contrast-[1.03] saturate-[1.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={GOOGLE_MAPS_EMBED_URL}
              title="Localização da Academia Almeida Fight no Google Maps"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-9 sm:px-9 lg:px-10">
            <p className="text-[0.62rem] font-black uppercase tracking-[0.25em] text-[#d4af37]">Como chegar</p>
            <h4 className="mt-3 font-['Teko'] text-4xl font-bold uppercase leading-none">Venha treinar com a gente</h4>
            <p className="mt-5 text-sm leading-6 text-white/55">{ACADEMY_ADDRESS}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a aria-label="Traçar rota no Google Maps" className="flex min-h-16 items-center gap-3 bg-[#d4af37] px-5 text-[0.63rem] font-black uppercase tracking-[0.1em] text-[#0d0d0d] transition-colors hover:bg-[#f3e5ab]" href={GOOGLE_MAPS_DIRECTIONS_URL} rel="noreferrer" target="_blank">
                <GoogleMapsIcon />
                <span>Google<br />Maps</span>
              </a>
              <a aria-label="Abrir rota no Waze" className="flex min-h-16 items-center gap-3 border border-white/20 px-5 text-[0.63rem] font-black uppercase tracking-[0.1em] text-white transition-colors hover:border-[#33ccff] hover:text-[#33ccff]" href={WAZE_DIRECTIONS_URL} rel="noreferrer" target="_blank">
                <WazeIcon />
                <span>Waze</span>
              </a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="text-sm leading-6 text-white/50">Quer conhecer uma turma antes? Fale diretamente com nossa equipe.</p>
              <a className="mt-4 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-[#d4af37] transition-colors hover:text-[#f3e5ab]" href={WHATSAPP_URL} rel="noreferrer" target="_blank">
                Conversar no WhatsApp <span aria-hidden="true">→</span>
              </a>
              <p className="mt-3 text-xs font-bold tracking-[0.08em] text-white/35">{PHONE_DISPLAY}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
