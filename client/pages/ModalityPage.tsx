import type { Modality } from "../../shared/types";
import { PageLayout } from "../components/PageLayout";
import { modalities } from "../data/modalities";
import { WHATSAPP_URL } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export function ModalityPage({ modality }: { modality: Modality; path?: string }) {
  usePageMeta(
    `${modality.label} | Academia Almeida Fight`,
    `${modality.label} com ${modality.instructor}. ${modality.focus}`,
  );

  return (
    <PageLayout>
      <main id="conteudo">
        <section className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_28%,rgba(212,175,55,0.17),transparent_28%),linear-gradient(120deg,#0d0d0d,#141414)]" />
          <span className="pointer-events-none absolute -right-6 bottom-[-4rem] font-['Teko'] text-[18rem] font-bold leading-none text-white/[0.025] sm:right-[6%] sm:text-[28rem]">
            {modality.number}
          </span>

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <a className="inline-flex items-center gap-2 text-[0.65rem] font-black uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-[#d4af37]" href="/">
              <span aria-hidden="true">←</span> Voltar para o início
            </a>
            <div className="mt-14 max-w-5xl">
              <p className="text-[0.7rem] font-black uppercase tracking-[0.3em] text-[#d4af37]">{modality.label}</p>
              <h1 className="mt-3 font-['Teko'] text-[clamp(5rem,16vw,12rem)] font-bold uppercase leading-[0.72] tracking-[-0.035em] text-white">
                {modality.name}
              </h1>
              <p className="mt-8 max-w-2xl text-lg font-bold uppercase leading-7 tracking-[0.08em] text-white/60 sm:text-xl">
                {modality.headline}
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#111111] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
              <div>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-[#d4af37]">Quem conduz o treino</p>
                <h2 className="mt-4 font-['Teko'] text-[clamp(3rem,7vw,5.5rem)] font-bold uppercase leading-[0.88]">Professores da modalidade</h2>
              </div>

              <div className={`order-2 grid gap-5 ${modality.instructors.length > 1 ? "md:grid-cols-2 xl:grid-cols-3" : "max-w-md"} lg:col-span-2`}>
                {modality.instructors.map((instructor) => (
                  <article className="group overflow-hidden border border-white/10 bg-[#171717]" key={instructor.name}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#111111]">
                      <img
                        alt={`Professor ${instructor.name}, ${instructor.specialty}`}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                        loading="lazy"
                        src={instructor.image}
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#111111] to-transparent" />
                    </div>
                    <div className="border-t-2 border-[#d4af37] p-6">
                      <p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#d4af37]">{instructor.specialty}</p>
                      <h3 className="mt-2 font-['Teko'] text-4xl font-bold uppercase leading-none text-white">{instructor.name}</h3>
                      <p className="mt-4 border-t border-white/10 pt-4 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/50">{instructor.schedule}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="order-3 lg:order-none">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-[#d4af37]">O treinamento</p>
                <h2 className="mt-4 font-['Teko'] text-[clamp(3rem,7vw,5.5rem)] font-bold uppercase leading-[0.88]">Construa sua melhor versão</h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">{modality.summary}</p>
                <div className="mt-9 border-l-2 border-[#d4af37] pl-6 sm:pl-8">
                  <p className="text-base font-bold leading-7 text-white sm:text-lg sm:leading-8">{modality.focus}</p>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-[#d4af37]">Fundamentos</p>
                <h2 className="mt-3 font-['Teko'] text-5xl font-bold uppercase leading-none sm:text-6xl">O que você vai dominar</h2>
              </div>
              <span className="font-['Teko'] text-5xl font-bold text-white/5">{modality.number}</span>
            </div>

            <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {modality.pillars.map((pillar, index) => (
                <article className="group min-h-52 bg-[#171717] p-7 transition-colors hover:bg-[#1d1d1d]" key={pillar}>
                  <span className="text-[0.62rem] font-black tracking-[0.2em] text-[#d4af37]">0{index + 1}</span>
                  <h3 className="mt-16 font-['Teko'] text-3xl font-bold uppercase leading-none text-white transition-colors group-hover:text-[#f3e5ab]">{pillar}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#d4af37] py-20 text-center text-[#0d0d0d]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-xs font-black uppercase tracking-[0.24em]">Aula experimental</p>
            <h2 className="mt-4 font-['Teko'] text-[clamp(3.5rem,9vw,7rem)] font-bold uppercase leading-[0.82]">O próximo round é seu</h2>
            <a
              className="mt-8 inline-flex min-h-14 items-center justify-center bg-[#0d0d0d] px-8 text-xs font-black uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#0d0d0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0d0d0d]"
              href={WHATSAPP_URL}
              rel="noreferrer"
              target="_blank"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </section>

        <section className="border-t border-white/5 bg-[#111111] py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="text-[0.63rem] font-black uppercase tracking-[0.24em] text-white/35">Conheça também</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {modalities.filter((item) => item.slug !== modality.slug).map((item) => (
                <a className="border border-white/15 px-5 py-3 font-['Teko'] text-xl font-semibold uppercase text-white transition-colors hover:border-[#d4af37] hover:text-[#d4af37]" key={item.slug} href={item.path}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
