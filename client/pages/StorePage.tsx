import { PageLayout } from "../components/PageLayout";
import { SectionHeading } from "../components/SectionHeading";
import { priceLabel, storeItems, storeSets, storeWhatsAppLink } from "../data/store";
import { usePageMeta } from "../hooks/usePageMeta";

function WhatsAppMark() {
  return <span aria-hidden="true" className="text-base">◔</span>;
}

export function StorePage() {
  usePageMeta("Almeida Fight Store | Uniformes e equipamentos oficiais", "Conheça as coleções de vestuário oficial Almeida Fight e compre diretamente pelo WhatsApp.");

  return (
    <PageLayout>
      <main id="conteudo">
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_82%_16%,rgba(212,175,55,0.18),transparent_22%),linear-gradient(120deg,#0a0a0a,#13110d_55%,#080808)] pb-16 pt-32 sm:pb-20 sm:pt-40">
          <div className="pointer-events-none absolute right-[8%] top-20 font-['Teko'] text-[clamp(12rem,27vw,26rem)] font-bold leading-none text-white/[0.025]">AF</div>
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <a className="inline-flex items-center gap-2 text-[0.65rem] font-black uppercase tracking-[0.18em] text-[#d4af37] transition-colors hover:text-[#f3e5ab]" href="/#loja">← Voltar ao site</a>
            <div className="mt-8 max-w-4xl">
              <p className="text-[0.67rem] font-black uppercase tracking-[0.28em] text-[#d4af37]">Almeida Fight Store</p>
              <h1 className="mt-3 font-['Teko'] text-[clamp(4rem,10vw,8.5rem)] font-bold uppercase leading-[0.76] tracking-[-0.025em] text-white">Vista a sua <span className="text-[#d4af37]">equipe</span></h1>
              <p className="mt-7 max-w-2xl text-sm font-medium leading-7 text-white/65 sm:text-base">Peças para treino, competição e o dia a dia. Escolha seu artigo ou monte seu conjunto e finalize o pedido diretamente com nossa equipe pelo WhatsApp.</p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="Peças avulsas" title="Escolha seu equipamento" description="Cada peça foi criada para acompanhar sua rotina dentro e fora do tatame." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {storeItems.map((item) => (
                <article className="group overflow-hidden border border-white/10 bg-[#141414] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/55 hover:shadow-[0_22px_55px_rgba(0,0,0,0.4)]" key={item.id}>
                  <div className="relative aspect-[3/2] overflow-hidden bg-black">
                    <img alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" src={item.image} />
                    <span className="absolute left-4 top-4 border border-[#d4af37]/50 bg-[#0d0d0d]/90 px-2.5 py-1 text-[0.56rem] font-black uppercase tracking-[0.13em] text-[#f3e5ab]">{item.collection}</span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h2 className="font-['Teko'] text-3xl font-bold uppercase leading-none text-white">{item.name}</h2>
                    <p className="mt-3 min-h-10 text-xs leading-5 text-white/55">{item.description}</p>
                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                      <strong className="font-['Teko'] text-3xl font-bold leading-none text-[#d4af37]">{priceLabel(item.price)}</strong>
                      <a className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#d4af37] px-4 text-[0.6rem] font-black uppercase tracking-[0.1em] text-[#0d0d0d] transition-colors hover:bg-[#f3e5ab]" href={storeWhatsAppLink(item.name)} rel="noreferrer" target="_blank"><WhatsAppMark />Comprar no WhatsApp</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#111111] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="Melhor em conjunto" title="Kits da equipe" description="Monte o uniforme completo com preço especial para cada coleção." />
            <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
              {storeSets.map((set) => (
                <article className="overflow-hidden border border-[#d4af37]/25 bg-[#0d0d0d]" key={set.name}>
                  <div className="grid aspect-[16/8] grid-cols-2 bg-black">
                    {set.images.map((image, index) => <img alt={`${set.name} — ${index === 0 ? "camisa" : "bermuda"}`} className="h-full w-full object-cover" key={image} src={image} />)}
                  </div>
                  <div className="p-6">
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#d4af37]">{set.collection}</p>
                    <h2 className="mt-2 font-['Teko'] text-4xl font-bold uppercase leading-none">{set.name}</h2>
                    <p className="mt-3 text-xs leading-5 text-white/55">{set.description}</p>
                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5"><strong className="font-['Teko'] text-3xl font-bold leading-none text-[#d4af37]">{priceLabel(set.price)}</strong><a className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#d4af37]/60 px-4 text-[0.6rem] font-black uppercase tracking-[0.1em] text-[#f3e5ab] transition-colors hover:bg-[#d4af37] hover:text-[#0d0d0d]" href={storeWhatsAppLink(set.name)} rel="noreferrer" target="_blank"><WhatsAppMark />Comprar no WhatsApp</a></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#d4af37] py-20 text-[#0d0d0d] sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="text-[0.67rem] font-black uppercase tracking-[0.26em]">Tabela de preços</p>
            <h2 className="mt-3 font-['Teko'] text-[clamp(3.5rem,8vw,6rem)] font-bold uppercase leading-[0.8]">Todas as coleções</h2>
            <div className="mt-10 overflow-x-auto border-y-2 border-[#0d0d0d]">
              <table className="w-full min-w-[40rem] text-left"><thead className="border-b border-[#0d0d0d]/30 text-[0.62rem] font-black uppercase tracking-[0.14em]"><tr><th className="py-4">Coleção</th><th className="py-4">Camisa</th><th className="py-4">Bermuda / short</th><th className="py-4">Conjunto</th></tr></thead><tbody className="text-sm font-bold"><tr className="border-b border-[#0d0d0d]/20"><td className="py-5 font-['Teko'] text-2xl uppercase">Personalizado</td><td>R$ 170,00</td><td>R$ 240,00</td><td>R$ 370,00</td></tr><tr className="border-b border-[#0d0d0d]/20"><td className="py-5 font-['Teko'] text-2xl uppercase">Compressão</td><td>R$ 165,00</td><td>R$ 150,00</td><td>R$ 275,00</td></tr><tr className="border-b border-[#0d0d0d]/20"><td className="py-5 font-['Teko'] text-2xl uppercase">Padrão oficial</td><td>R$ 120,00</td><td>R$ 140,00</td><td>R$ 235,00</td></tr><tr><td className="py-5 font-['Teko'] text-2xl uppercase">Short Muay Thai</td><td>—</td><td>R$ 150,00</td><td>—</td></tr></tbody></table>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
