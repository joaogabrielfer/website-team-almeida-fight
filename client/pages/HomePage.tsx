import { useState } from "preact/hooks";

import { ModalityCard } from "../components/ModalityCard";
import { PageLayout } from "../components/PageLayout";
import { ProfessionalCard } from "../components/ProfessionalCard";
import { SectionHeading } from "../components/SectionHeading";
import { SpaceContact } from "../components/SpaceContact";
import { StoreShowcase } from "../components/StoreShowcase";
import { TEAM_ALMEIDA_FIGHT_EMBLEM_DATA_URL } from "../data/emblem";
import { modalities, professionals } from "../data/modalities";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const schedule = [
  {
    modality: "Muay Thai + Kickboxing",
    classes: [
      { days: "Segunda, quarta e sexta", times: ["08h", "10h", "15h"], exclusiveTime: "15h", instructor: null },
      { days: "Terça e quinta", times: ["19h", "20h"], exclusiveTime: null, instructor: null },
    ],
  },
  {
    modality: "MMA",
    classes: [
      { days: "Segunda, quarta e sexta", times: ["11h"], exclusiveTime: null, instructor: null },
      { days: "Terça e quinta", times: ["10h", "20h"], exclusiveTime: null, instructor: null },
    ],
  },
  {
    modality: "Jiu-Jitsu",
    classes: [
      { days: "Segunda, quarta e sexta", times: ["07h", "16h", "20h"], exclusiveTime: null, instructor: null },
      { days: "Terça e quinta", times: ["08h", "16h"], exclusiveTime: null, instructor: null },
    ],
  },
  {
    modality: "Boxe",
    classes: [
      { days: "Segunda, quarta e sexta", times: ["19h"], exclusiveTime: null, instructor: null },
      { days: "Terça e quinta", times: ["15h"], exclusiveTime: null, instructor: null },
    ],
  },
] as const;

const values = ["Disciplina", "Foco", "Respeito", "Superação", "Academia Almeida Fight"] as const;

function InstagramIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[0.55rem] bg-[radial-gradient(circle_at_32%_102%,#ffd600_0%,#ff7a00_28%,#ff0169_52%,#d300c5_72%,#7638fa_100%)] shadow-[0_4px_12px_rgba(211,0,197,0.25)]">
      <svg aria-hidden="true" className="h-[1.35rem] w-[1.35rem]" fill="none" viewBox="0 0 24 24">
        <rect height="18" rx="5.2" stroke="white" strokeWidth="2.1" width="18" x="3" y="3" />
        <circle cx="12" cy="12" r="4.2" stroke="white" strokeWidth="2.1" />
        <circle cx="17.25" cy="6.75" fill="white" r="1.25" />
      </svg>
    </span>
  );
}

export function HomePage() {
  const [openProfessional, setOpenProfessional] = useState<string | null>(null);

  usePageMeta(
    "Academia Almeida Fight | Disciplina, foco e superação",
    "Treinamento de Boxe, Jiu-Jitsu, Muay Thai, Kickboxing e MMA com a equipe Almeida Fight.",
  );

  return (
    <PageLayout>
      <main id="conteudo">
        <style>{`
          @keyframes values-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .values-marquee { animation-play-state: paused !important; }
          }
        `}</style>
        <section
          className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 sm:pb-20 lg:min-h-[min(100svh,54rem)] lg:items-center lg:pb-8 lg:pt-28"
          id="inicio"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(212,175,55,0.16),transparent_25%),linear-gradient(115deg,#0d0d0d_15%,#111111_55%,#090909_100%)]" />
          <img
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 w-[min(92vw,34rem)] -translate-x-1/2 -translate-y-1/2 grayscale opacity-[0.07] lg:hidden"
            src={TEAM_ALMEIDA_FIGHT_EMBLEM_DATA_URL}
          />
          <div className="pointer-events-none absolute -right-24 top-20 h-[34rem] w-[34rem] rounded-full border border-[#d4af37]/10 sm:right-0 lg:right-[8%] lg:h-[42rem] lg:w-[42rem]" />
          <div className="pointer-events-none absolute right-[-5rem] top-[10rem] h-[25rem] w-[25rem] rounded-full border-[4rem] border-white/[0.018] sm:right-[4rem] lg:right-[14%] lg:h-[32rem] lg:w-[32rem]" />
          <div className="pointer-events-none absolute bottom-0 right-[10%] hidden font-['Teko'] text-[24rem] font-bold leading-[0.7] text-white/[0.018] lg:block">
            AF
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div className="max-w-5xl">
                <div className="mb-7 flex items-center gap-4 lg:mb-5">
                  <span className="h-px w-10 bg-[#d4af37] sm:w-16" />
                  <p className="text-[0.64rem] font-black uppercase tracking-[0.22em] text-[#d4af37] sm:text-xs">
                    Centro de treinamento Almeida Fight
                  </p>
                </div>

                <h1 className="font-['Teko'] text-[clamp(3.8rem,10vw,8rem)] font-bold uppercase leading-[0.76] tracking-[-0.035em] text-white">
                  Disciplina <span className="text-[#d4af37]">•</span> Foco <span className="text-[#d4af37]">•</span>
                  <br />
                  Respeito <span className="text-[#d4af37]">•</span> Superação
                </h1>

                <p className="mt-8 max-w-2xl text-sm font-bold uppercase leading-6 tracking-[0.12em] text-white/65 sm:text-base sm:leading-7 lg:mt-5">
                  A verdadeira academia de combate premia os fortes
                </p>

                <div className="mt-5 flex flex-nowrap items-center gap-2 sm:flex-wrap sm:gap-3">
                  <a
                    aria-label={`Abrir Instagram ${INSTAGRAM_HANDLE}`}
                    className="group/instagram inline-flex min-h-12 min-w-0 flex-1 items-center gap-3 rounded-xl border border-white/15 bg-[#171717]/95 px-3 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#d4af37]/65 hover:bg-[#1c1a14] hover:shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_25px_rgba(212,175,55,0.08)] sm:flex-none sm:px-4"
                    href={INSTAGRAM_URL}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <InstagramIcon />
                    <span className="truncate text-[0.7rem] font-black tracking-[0.02em] text-[#d4af37] transition-colors group-hover/instagram:text-[#f3e5ab] sm:text-sm sm:tracking-[0.04em]">
                      {INSTAGRAM_HANDLE}
                    </span>
                  </a>
                  <span className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full border border-[#d4af37]/55 bg-[#0b0b0b]/90 px-1 text-center font-['Teko'] text-[0.62rem] font-bold uppercase leading-[0.88] tracking-[0.02em] text-[#e5c44f] shadow-[0_10px_24px_rgba(0,0,0,0.48)] sm:h-20 sm:w-20 sm:text-[0.72rem] sm:tracking-[0.03em]">
                    <span>A melhor</span>
                    <span>da cidade</span>
                  </span>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-6">
                  <a
                    className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#d4af37] px-7 text-xs font-black uppercase tracking-[0.15em] text-[#0d0d0d] transition-colors hover:bg-[#f3e5ab] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3e5ab]"
                    href={WHATSAPP_URL}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Agende sua aula
                    <span aria-hidden="true" className="text-lg">→</span>
                  </a>
                  <a
                    className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition-colors hover:border-[#d4af37] hover:text-[#d4af37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37]"
                    href="#modalidades"
                  >
                    Ver modalidades
                  </a>
                </div>
              </div>

              <div className="pointer-events-none relative mx-auto hidden w-[min(27vw,22rem)] shrink-0 lg:block">
                <div className="absolute inset-[10%] rounded-full bg-[#d4af37]/20 blur-3xl" />
                <img
                  alt="Emblema Team Almeida Fight"
                  className="relative w-full rounded-full border border-[#d4af37]/45 bg-[#080808] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
                  src={TEAM_ALMEIDA_FIGHT_EMBLEM_DATA_URL}
                />
              </div>
            </div>
          </div>
        </section>

        <div aria-label="Valores da Academia Almeida Fight" className="border-y border-[#0d0d0d] bg-[#d4af37] py-3 text-[#0d0d0d]">
          <div className="overflow-hidden sm:hidden">
            <div
              className="values-marquee flex w-max font-['Teko'] text-xl font-bold uppercase tracking-[0.13em]"
              style={{ animation: "values-marquee 18s linear infinite" }}
            >
              {[0, 1].map((copy) => (
                <div aria-hidden={copy === 1} className="flex shrink-0 items-center" key={copy}>
                  {values.map((word) => (
                    <span className="flex items-center whitespace-nowrap px-7" key={`${copy}-${word}`}>
                      {word}<span className="ml-7 text-[#0d0d0d]/35">•</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto hidden max-w-7xl items-center justify-between gap-4 px-8 font-['Teko'] text-2xl font-bold uppercase tracking-[0.13em] sm:flex">
            {values.map((word, index) => (
              <span className="whitespace-nowrap" key={word}>
                {word}{index < values.length - 1 && <span className="ml-4 text-[#0d0d0d]/35">•</span>}
              </span>
            ))}
          </div>
        </div>

        <section className="scroll-mt-20 border-y border-white/5 bg-[#101010] py-20 sm:py-28" id="sobre">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
            <SectionHeading eyebrow="Nossa essência" title="Forjamos mais que atletas" />
            <div className="border-l-2 border-[#d4af37] pl-6 sm:pl-9">
              <p className="text-lg leading-8 text-white/70 sm:text-xl sm:leading-9">
                Na Almeida Fight, cada treino constrói técnica, caráter e confiança. Aqui, iniciantes e atletas encontram orientação séria, ambiente respeitoso e uma equipe comprometida com evolução real.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-7">
                {[
                  ["04", "Modalidades"],
                  ["06", "Profissionais"],
                  ["01", "Propósito"],
                ].map(([number, label]) => (
                  <div key={label}>
                    <strong className="block font-['Teko'] text-4xl text-[#d4af37]">{number}</strong>
                    <span className="text-[0.6rem] font-bold uppercase tracking-wider text-white/40">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-20 py-20 sm:py-28" id="modalidades">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Escolha seu desafio"
              title="Modalidades"
              description="Do primeiro treino à preparação competitiva: encontre a disciplina que combina com seu objetivo."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              {modalities.map((modality) => (
                <ModalityCard key={modality.slug} modality={modality} />
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-20 bg-[#d4af37] py-20 text-[#0d0d0d] sm:py-24" id="horarios">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-[0.67rem] font-black uppercase tracking-[0.3em]">Grade semanal</p>
                <h2 className="mt-3 font-['Teko'] text-[clamp(3rem,7vw,5.5rem)] font-bold uppercase leading-[0.85]">
                  Hora de entrar em ação
                </h2>
              </div>
              <div className="border-t-2 border-[#0d0d0d]">
                {schedule.map((item) => (
                  <article className="grid gap-5 border-b border-[#0d0d0d]/25 py-6 sm:grid-cols-[0.7fr_1.3fr] sm:items-start" key={item.modality}>
                    <h3 className="font-['Teko'] text-3xl font-bold uppercase leading-none">{item.modality}</h3>
                    <div className="grid gap-3">
                      {item.classes.map((training) => (
                        <div
                          className="grid gap-1 border-l-2 border-[#0d0d0d]/20 pl-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-5"
                          key={`${training.days}-${training.times.join("-")}-${training.instructor ?? ""}`}
                        >
                          <span className="text-[0.68rem] font-bold uppercase leading-5 tracking-wider text-[#0d0d0d]/65">
                            {training.days}{training.instructor ? ` · ${training.instructor}` : ""}
                          </span>
                          <div className="flex flex-wrap gap-2 sm:justify-end">
                            {training.times.map((time) => {
                              const exclusive = training.exclusiveTime === time;

                              return (
                                <strong
                                  className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 font-['Teko'] text-xl uppercase leading-none ${exclusive ? "border-[#0d0d0d] bg-[#0d0d0d] text-[#f3e5ab]" : "border-[#0d0d0d]/25 bg-[#f3e5ab]/30"}`}
                                  key={time}
                                >
                                  {time}
                                  {exclusive && <span className="font-sans text-[0.52rem] font-black tracking-[0.08em]">EXCLUSIVO</span>}
                                </strong>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-14 grid gap-px border-t-2 border-[#0d0d0d] bg-[#0d0d0d]/25 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#d4af37] py-8 pr-5 sm:py-10 lg:pr-12">
                <p className="text-[0.67rem] font-black uppercase tracking-[0.25em] text-[#0d0d0d]/65">Plano de treino</p>
                <h3 className="mt-3 font-['Teko'] text-4xl font-bold uppercase leading-none sm:text-5xl">Treine sem limites</h3>
                <p className="mt-5 max-w-xl text-base font-bold leading-7 text-[#0d0d0d]/75 sm:text-lg">
                  Escolheu a modalidade? Treine quantas vezes quiser por dia e quantas vezes quiser na semana.
                </p>
              </div>
              <div className="grid gap-px bg-[#0d0d0d]/25 sm:grid-cols-2">
                <div className="bg-[#d4af37] px-5 py-8 sm:px-7 sm:py-10">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#0d0d0d]/60">01 modalidade</p>
                  <p className="mt-3 font-['Teko'] text-5xl font-bold leading-none">R$ 100</p>
                  <p className="mt-1 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#0d0d0d]/60">por mês</p>
                </div>
                <div className="bg-[#d4af37] px-5 py-8 sm:px-7 sm:py-10">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#0d0d0d]/60">02 modalidades</p>
                  <p className="mt-3 font-['Teko'] text-5xl font-bold leading-none">R$ 180</p>
                  <p className="mt-1 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#0d0d0d]/60">por mês</p>
                </div>
                <div className="bg-[#0d0d0d] px-5 py-5 text-[#f3e5ab] sm:col-span-2 sm:px-7">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#d4af37]">Horários exclusivos</p>
                  <p className="mt-2 text-sm font-bold leading-6">Acréscimo de R$ 30 por mês para a turma exclusiva.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-20 py-20 sm:py-28" id="equipe">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              centered
              eyebrow="Quem guia o caminho"
              title="Equipe de elite"
              description="Experiência prática, didática e compromisso com cada etapa da sua evolução."
            />
            <div className="mx-auto mt-12 grid max-w-6xl justify-items-center gap-7 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {professionals.map((professional, index) => (
                <ProfessionalCard
                  index={index}
                  key={professional.name}
                  onToggle={() => setOpenProfessional((current) => current === professional.name ? null : professional.name)}
                  open={openProfessional === professional.name}
                  professional={professional}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-20 border-y border-white/5 bg-[#111111] py-20 sm:py-28" id="loja">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
            <StoreShowcase />
            <div>
              <SectionHeading
                eyebrow="Almeida Fight Store"
                title="Uniformes oficiais"
                description="Camisas, bermudas, short de Muay Thai e conjuntos da equipe. Escolha sua peça e compre diretamente pelo WhatsApp."
              />
              <a className="mt-8 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-[#d4af37] transition-colors hover:text-[#f3e5ab]" href="/loja">
                Ver produtos e preços <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <SpaceContact />
      </main>
    </PageLayout>
  );
}
