import { ModalityCard } from "../components/ModalityCard";
import { PageLayout } from "../components/PageLayout";
import { SectionHeading } from "../components/SectionHeading";
import { StoreShowcase } from "../components/StoreShowcase";
import { TrainingGallery } from "../components/TrainingGallery";
import { modalities } from "../data/modalities";
import { PHONE_DISPLAY, WHATSAPP_URL } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const schedule = [
  { day: "Segunda e quarta", time: "06h · 12h · 18h · 20h", className: "Boxe e Jiu-Jitsu" },
  { day: "Terça e quinta", time: "06h · 12h · 18h · 20h", className: "Muay Thai e MMA" },
  { day: "Sexta e sábado", time: "07h · 10h · 19h", className: "Treino técnico e open mat" },
] as const;

export function HomePage() {
  usePageMeta(
    "Academia Almeida Fight | Disciplina, foco e superação",
    "Treinamento de Boxe, Jiu-Jitsu, Muay Thai, Kickboxing e MMA com a equipe Almeida Fight.",
  );

  return (
    <PageLayout>
      <main id="conteudo">
        <section
          className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 sm:pb-24 lg:items-center lg:pb-12"
          id="inicio"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(212,175,55,0.16),transparent_25%),linear-gradient(115deg,#0d0d0d_15%,#111111_55%,#090909_100%)]" />
          <div className="pointer-events-none absolute -right-24 top-20 h-[34rem] w-[34rem] rounded-full border border-[#d4af37]/10 sm:right-0 lg:right-[8%] lg:h-[42rem] lg:w-[42rem]" />
          <div className="pointer-events-none absolute right-[-5rem] top-[10rem] h-[25rem] w-[25rem] rounded-full border-[4rem] border-white/[0.018] sm:right-[4rem] lg:right-[14%] lg:h-[32rem] lg:w-[32rem]" />
          <div className="pointer-events-none absolute bottom-0 right-[10%] hidden font-['Teko'] text-[24rem] font-bold leading-[0.7] text-white/[0.018] lg:block">
            AF
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="max-w-5xl">
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d4af37] sm:w-16" />
                <p className="text-[0.64rem] font-black uppercase tracking-[0.22em] text-[#d4af37] sm:text-xs">
                  Centro de treinamento Almeida Fight
                </p>
              </div>

              <h1 className="font-['Teko'] text-[clamp(3.8rem,11vw,9.5rem)] font-bold uppercase leading-[0.76] tracking-[-0.035em] text-white">
                Disciplina <span className="text-[#d4af37]">•</span> Foco <span className="text-[#d4af37]">•</span>
                <br />
                Respeito <span className="text-[#d4af37]">•</span> Superação
              </h1>

              <p className="mt-8 max-w-2xl text-sm font-bold uppercase leading-6 tracking-[0.12em] text-white/65 sm:text-base sm:leading-7">
                A verdadeira academia de combate premia os fortes
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
          </div>
        </section>

        <div aria-label="Valores Almeida Fight" className="overflow-hidden border-y border-[#0d0d0d] bg-[#d4af37] py-3 text-[#0d0d0d]">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-hidden px-5 font-['Teko'] text-lg font-bold uppercase tracking-[0.13em] sm:px-8 sm:text-2xl">
            {[
              "Disciplina",
              "Foco",
              "Respeito",
              "Superação",
              "Almeida Fight",
            ].map((word, index) => (
              <span className={`${index > 1 ? "hidden sm:inline" : "inline"} whitespace-nowrap`} key={word}>
                {word} <span className="ml-4 text-[#0d0d0d]/35">•</span>
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
                  ["03", "Especialistas"],
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
                <p className="mt-6 max-w-md text-sm font-medium leading-6 text-[#0d0d0d]/65">
                  Consulte a equipe para confirmar turmas, níveis e disponibilidade antes da primeira aula.
                </p>
              </div>
              <div className="border-t-2 border-[#0d0d0d]">
                {schedule.map((item) => (
                  <div className="grid gap-2 border-b border-[#0d0d0d]/25 py-6 sm:grid-cols-[1fr_1fr] sm:items-center" key={item.day}>
                    <div>
                      <strong className="block font-['Teko'] text-2xl uppercase leading-none">{item.day}</strong>
                      <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-[#0d0d0d]/55">{item.className}</span>
                    </div>
                    <span className="font-['Teko'] text-2xl font-semibold sm:text-right">{item.time}</span>
                  </div>
                ))}
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
            <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3 lg:mt-16">
              {[
                ["Thiago Almeida", "Muay Thai, Kickboxing & MMA", "TA"],
                ["Ítalo Feijó", "Jiu-Jitsu Brasileiro", "IF"],
                ["Ninja do Boxe", "Boxe / Nobre Arte", "NB"],
              ].map(([name, specialty, initials]) => (
                <article className="group border-t-4 border-[#d4af37] bg-[#171717] p-7 text-center shadow-[0_20px_50px_rgba(0,0,0,0.25)]" key={name}>
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#0d0d0d] font-['Teko'] text-4xl font-bold text-[#d4af37] transition-colors group-hover:bg-[#d4af37] group-hover:text-[#0d0d0d]">
                    {initials}
                  </div>
                  <h3 className="mt-7 font-['Teko'] text-3xl font-bold uppercase">{name}</h3>
                  <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#d4af37]">{specialty}</p>
                </article>
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
                title="Dentro e fora do treino"
                description="Uniformes, luvas e acessórios selecionados para acompanhar sua rotina de combate. Consulte disponibilidade diretamente com nossa equipe."
              />
              <a className="mt-8 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-[#d4af37] transition-colors hover:text-[#f3e5ab]" href={WHATSAPP_URL} rel="noreferrer" target="_blank">
                Consultar produtos <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="scroll-mt-20 py-20 sm:py-28" id="galeria">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Dentro do tatame"
              title="Treino é verdade"
              description="Aqui não existe pose: existe presença, repetição e vontade de sair melhor do que entrou."
            />
            <TrainingGallery />
          </div>
        </section>

        <section className="scroll-mt-20 bg-[#171717] py-20 sm:py-28" id="contato">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
            <p className="text-[0.67rem] font-black uppercase tracking-[0.3em] text-[#d4af37]">Seu primeiro passo começa agora</p>
            <h2 className="mt-4 font-['Teko'] text-[clamp(3.5rem,9vw,7.5rem)] font-bold uppercase leading-[0.8]">
              Você está pronto para superar seus limites?
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/55">
              Fale com nossa equipe, encontre a turma ideal e venha viver a experiência Almeida Fight.
            </p>
            <a
              className="mt-6 inline-block text-sm font-bold tracking-[0.08em] text-[#d4af37] transition-colors hover:text-[#f3e5ab]"
              href={WHATSAPP_URL}
              rel="noreferrer"
              target="_blank"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              className="mx-auto mt-6 flex min-h-14 w-fit items-center justify-center bg-[#d4af37] px-8 text-xs font-black uppercase tracking-[0.15em] text-[#0d0d0d] transition-colors hover:bg-[#f3e5ab] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3e5ab]"
              href={WHATSAPP_URL}
              rel="noreferrer"
              target="_blank"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
