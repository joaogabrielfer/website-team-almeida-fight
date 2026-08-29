import { PageLayout } from "../components/PageLayout";
import { SectionHeading } from "../components/SectionHeading";
import { priceLabel, storeItems, storeSets, storeWhatsAppLink } from "../data/store";
import { STORE_BACKDROP_DATA_URL } from "../data/storeBackdrop";
import { usePageMeta } from "../hooks/usePageMeta";

function WhatsAppMark() { return <span aria-hidden="true" className="text-base">◔</span>; }

function BuyButton({ product, dark = false }: { product: string; dark?: boolean }) {
  return <a className={`inline-flex min-h-11 items-center justify-center gap-2 px-4 text-[0.6rem] font-black uppercase tracking-[0.1em] transition-colors ${dark ? "border border-[#d4af37]/60 text-[#f3e5ab] hover:bg-[#d4af37] hover:text-[#0d0d0d]" : "bg-[#d4af37] text-[#0d0d0d] hover:bg-[#f3e5ab]"}`} href={storeWhatsAppLink(product)} rel="noreferrer" target="_blank"><WhatsAppMark />Comprar</a>;
}

export function StorePage({ path }: { path?: string }) {
  usePageMeta("Almeida Fight Store | Uniformes e equipamentos oficiais", "Conheça os conjuntos e equipamentos oficiais Almeida Fight e compre diretamente pelo WhatsApp.");

  return <PageLayout><main id="conteudo">
    <section className="pt-32 sm:pt-36"><div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-7"><SectionHeading eyebrow="Loja da academia" title="Conjuntos" description="Escolha o conjunto completo ou compre cada peça separadamente." /><a className="mb-1 text-[0.62rem] font-black uppercase tracking-[0.15em] text-[#d4af37] hover:text-[#f3e5ab]" href="/#loja">← Voltar ao site</a></div>
      <div className="mt-10 space-y-8">{storeSets.map((set) => <article className="overflow-hidden border border-white/10 bg-[#141414]" key={set.name}>
        <div className="grid lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)]">
          <div className="relative overflow-hidden bg-[#0b0b0b] p-5 sm:p-8 lg:min-h-[23rem]" style={{ backgroundImage: `url(${STORE_BACKDROP_DATA_URL})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className="relative z-10 flex h-full flex-col justify-between"><div><p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#d4af37]">{set.collection}</p><h2 className="mt-3 max-w-sm font-['Teko'] text-5xl font-bold uppercase leading-[0.82] text-white sm:text-6xl">{set.name}</h2></div><div className="mt-8 flex items-end justify-between gap-4 border-t border-white/15 pt-5"><div><p className="text-xs text-white/55">{set.description}</p><strong className="mt-2 block font-['Teko'] text-4xl font-bold leading-none text-[#d4af37]">{priceLabel(set.price)}</strong></div><BuyButton dark product={set.name} /></div></div>
            <div className="pointer-events-none relative mt-5 grid h-44 grid-cols-2 items-center gap-2 opacity-95 sm:h-52 lg:absolute lg:inset-x-10 lg:bottom-16 lg:top-16 lg:mt-0 lg:h-auto"><img alt={`${set.name} — camisa`} className="h-full w-full object-contain" src={set.images[0]} /><img alt={`${set.name} — bermuda`} className="h-full w-full object-contain" src={set.images[1]} /></div><div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(0deg,rgba(10,10,10,0.9),transparent_52%)] lg:block" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2">{set.pieces.map((item) => <article className="group flex flex-col border-l border-t border-white/10 bg-[#111111] first:border-t-0 sm:first:border-t lg:first:border-t" key={item.id}>
            <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#0b0b0b] lg:h-52" style={{ backgroundImage: `url(${STORE_BACKDROP_DATA_URL})`, backgroundPosition: "center", backgroundSize: "cover" }}><img alt={item.name} className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.035]" src={item.image} /></div>
            <div className="p-5"><h3 className="font-['Teko'] text-3xl font-bold uppercase leading-none text-white">{item.name}</h3><p className="mt-2 text-xs leading-5 text-white/55">{item.description}</p><div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4"><strong className="font-['Teko'] text-3xl font-bold leading-none text-[#d4af37]">{priceLabel(item.price)}</strong><BuyButton product={item.name} /></div></div>
          </article>)}</div>
        </div>
      </article>)}</div>
    </div></section>

    <section className="mt-16 border-y border-white/10 bg-[#111111] py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading eyebrow="Peças avulsas" title="Sem conjunto" description="Por enquanto, o short de Muay Thai é a única peça disponível fora dos conjuntos." />
      <div className="mt-12 grid max-w-sm gap-4">{storeItems.map((item) => <article className="group overflow-hidden border border-white/10 bg-[#141414] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/55" key={item.id}>
        <div className="relative aspect-[4/5] overflow-hidden bg-[#0b0b0b]" style={{ backgroundImage: `url(${STORE_BACKDROP_DATA_URL})`, backgroundPosition: "center", backgroundSize: "cover" }}><img alt={item.name} className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.025]" src={item.image} /><span className="absolute left-4 top-4 border border-[#d4af37]/50 bg-[#0d0d0d]/90 px-2.5 py-1 text-[0.56rem] font-black uppercase tracking-[0.13em] text-[#f3e5ab]">{item.collection}</span></div>
        <div className="p-5 sm:p-6"><h2 className="font-['Teko'] text-3xl font-bold uppercase leading-none text-white">{item.name}</h2><p className="mt-3 text-xs leading-5 text-white/55">{item.description}</p><div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-5"><strong className="font-['Teko'] text-3xl font-bold leading-none text-[#d4af37]">{priceLabel(item.price)}</strong><BuyButton product={item.name} /></div></div>
      </article>)}</div>
      <div className="mt-8 border border-dashed border-white/20 bg-[#0d0d0d] px-6 py-5 sm:flex sm:items-center sm:justify-between"><div><p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#d4af37]">Personalizadas</p><p className="mt-1 text-sm font-bold text-white">Não disponíveis no momento.</p></div><p className="mt-3 text-xs text-white/50 sm:mt-0">As fotos e a disponibilidade serão atualizadas aqui quando essa linha retornar.</p></div>
    </div></section>

    <section className="bg-[#d4af37] py-20 text-[#0d0d0d] sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="text-[0.67rem] font-black uppercase tracking-[0.26em]">Tabela de preços</p><h2 className="mt-3 font-['Teko'] text-[clamp(3.5rem,8vw,6rem)] font-bold uppercase leading-[0.8]">Todas as coleções</h2><div className="mt-10 overflow-x-auto border-y-2 border-[#0d0d0d]"><table className="w-full min-w-[40rem] text-left"><thead className="border-b border-[#0d0d0d]/30 text-[0.62rem] font-black uppercase tracking-[0.14em]"><tr><th className="py-4">Coleção</th><th className="py-4">Camisa</th><th className="py-4">Bermuda / short</th><th className="py-4">Conjunto</th></tr></thead><tbody className="text-sm font-bold"><tr className="border-b border-[#0d0d0d]/20"><td className="py-5 font-['Teko'] text-2xl uppercase">Exclusivo ELITE</td><td>R$ 150,00</td><td>R$ 250,00</td><td>R$ 350,00</td></tr><tr className="border-b border-[#0d0d0d]/20"><td className="py-5 font-['Teko'] text-2xl uppercase">Padrão oficial</td><td>R$ 120,00</td><td>R$ 140,00</td><td>R$ 235,00</td></tr><tr className="border-b border-[#0d0d0d]/20"><td className="py-5 font-['Teko'] text-2xl uppercase">Personalizadas</td><td colSpan={3}>Não disponível no momento</td></tr><tr><td className="py-5 font-['Teko'] text-2xl uppercase">Short Muay Thai</td><td>—</td><td>R$ 150,00</td><td>—</td></tr></tbody></table></div></div></section>
  </main></PageLayout>;
}
