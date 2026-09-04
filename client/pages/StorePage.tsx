import { PageLayout } from "../components/PageLayout";
import { useEffect, useState } from "preact/hooks";
import { SectionHeading } from "../components/SectionHeading";
import { priceLabel, storeItems, storeSets, storeWhatsAppLink } from "../data/store";
import { STORE_BACKDROP_DATA_URL } from "../data/storeBackdrop";
import { usePageMeta } from "../hooks/usePageMeta";

function WhatsAppMark() { return <span aria-hidden="true" className="text-base">◔</span>; }

function BuyButton({ product, dark = false }: { product: string; dark?: boolean }) {
  return <a className={`inline-flex min-h-11 items-center justify-center gap-2 px-4 text-[0.6rem] font-black uppercase tracking-[0.1em] transition-colors ${dark ? "border border-[#d4af37]/60 text-[#f3e5ab] hover:bg-[#d4af37] hover:text-[#0d0d0d]" : "bg-[#d4af37] text-[#0d0d0d] hover:bg-[#f3e5ab]"}`} href={storeWhatsAppLink(product)} rel="noreferrer" target="_blank"><WhatsAppMark />Comprar</a>;
}

function ProductCarousel({ activeView, alt, onSelect, views }: { activeView: number; alt: string; onSelect: (view: number) => void; views: readonly string[] }) {
  const visibleView = activeView % views.length;
  return <div className="relative h-full w-full">
    {views.map((view, index) => <img alt={`${alt} — ${index === 0 ? "frente" : "costas"}`} className={`absolute inset-0 h-full w-full object-contain p-2 transition-opacity duration-500 ${index === visibleView ? "opacity-100" : "opacity-0"}`} key={view} src={view} />)}
    {views.length > 1 && <><span className="absolute left-3 top-3 border border-[#d4af37]/65 bg-[#090909]/95 px-2.5 py-1.5 text-[0.52rem] font-black uppercase tracking-[0.14em] text-[#f3e5ab]">{visibleView === 0 ? "Frente" : "Costas"}</span><div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">{views.map((view, index) => <button aria-label={`Mostrar ${index === 0 ? "frente" : "costas"} de ${alt}`} aria-pressed={index === visibleView} className={`h-1.5 rounded-full transition-all ${index === visibleView ? "w-5 bg-[#d4af37]" : "w-1.5 bg-white/50 hover:bg-white"}`} key={view} onClick={() => onSelect(index)} type="button" />)}</div></>}
  </div>;
}

export function StorePage({ path }: { path?: string }) {
  const [activeProductView, setActiveProductView] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveProductView((current) => (current + 1) % 2), 3200);
    return () => window.clearInterval(timer);
  }, []);

  usePageMeta("Almeida Fight Store | Uniformes e equipamentos oficiais", "Conheça os conjuntos e equipamentos oficiais Almeida Fight e compre diretamente pelo WhatsApp.");

  return <PageLayout><main id="conteudo">
    <section className="pt-32 sm:pt-36"><div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-7"><SectionHeading eyebrow="Loja da academia" title="Conjuntos" description="Escolha o conjunto completo ou compre cada peça separadamente." /><a className="mb-1 text-[0.62rem] font-black uppercase tracking-[0.15em] text-[#d4af37] hover:text-[#f3e5ab]" href="/#loja">← Voltar ao site</a></div>
      <div className="mt-10 space-y-8">{storeSets.map((set) => <article className="overflow-hidden border border-white/10 bg-[#141414]" key={set.name}>
        <div className="grid lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)]">
          <div className="overflow-hidden bg-[#0b0b0b]" style={{ backgroundImage: `url(${STORE_BACKDROP_DATA_URL})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className="grid h-56 grid-cols-2 items-center gap-2 p-5 sm:h-64 sm:p-8"><img alt={`${set.name} — camisa`} className="h-full w-full object-contain" src={set.images[0]} /><img alt={`${set.name} — bermuda`} className="h-full w-full object-contain" src={set.images[1]} /></div>
            <div className="border-t border-white/15 bg-[#0d0d0d] p-5 sm:p-8"><div className="flex items-center gap-1.5"><p className={set.collection === "Edição exclusiva" ? "inline-flex shrink-0 bg-[#d4af37] px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#0d0d0d]" : "shrink-0 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#f3d66b]"} style={set.collection === "Personalizado" ? { textShadow: "-1px -1px 0 #050505, 1px -1px 0 #050505, -1px 1px 0 #050505, 1px 1px 0 #050505" } : undefined}>{set.collection}</p>{set.collection === "Personalizado" && <span className="inline-flex shrink-0 whitespace-nowrap bg-[#d4af37] px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.1em] text-[#0d0d0d] shadow-[0_5px_18px_rgba(212,175,55,0.16)]">Coloque o seu nome</span>}</div><h2 className="mt-5 max-w-sm font-['Teko'] text-5xl font-bold uppercase leading-[0.82] text-white sm:text-6xl">{set.name}</h2><div className="mt-6 flex items-end justify-between gap-4 border-t border-white/20 pt-5"><div><p className="text-xs text-white/70">{set.description}</p><strong className="mt-2 block font-['Teko'] text-4xl font-bold leading-none text-[#e3c03b]">{priceLabel(set.price)}</strong></div><BuyButton dark product={set.name} /></div></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2">{set.pieces.map((item) => <article className="group flex flex-col border-l border-t border-white/10 bg-[#111111] first:border-t-0 sm:first:border-t lg:first:border-t" key={item.id}>
            <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#0b0b0b] sm:h-60 lg:h-64" style={{ backgroundImage: `url(${STORE_BACKDROP_DATA_URL})`, backgroundPosition: "center", backgroundSize: "cover" }}><ProductCarousel activeView={activeProductView} alt={item.name} onSelect={setActiveProductView} views={"views" in item ? item.views : [item.image]} /></div>
            <div className="p-5">{item.collection.startsWith("Personalizado") && <span className="mb-4 inline-flex bg-[#d4af37] px-3 py-2 text-[0.6rem] font-black uppercase tracking-[0.12em] text-[#0d0d0d]">Coloque o seu nome</span>}<h3 className="font-['Teko'] text-3xl font-bold uppercase leading-none text-white">{item.name}</h3><p className="mt-2 text-xs leading-5 text-white/65">{item.description}</p><div className="mt-4 flex items-center justify-between gap-3 border-t border-white/15 pt-4"><strong className="font-['Teko'] text-3xl font-bold leading-none text-[#d4af37]">{priceLabel(item.price)}</strong><BuyButton product={item.name} /></div></div>
          </article>)}</div>
        </div>
      </article>)}</div>
    </div></section>

    <section className="mt-16 border-y border-white/10 bg-[#111111] py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading eyebrow="Peças avulsas" title="Sem conjunto" description="Short de Muay Thai e bolsa esportiva para levar seus equipamentos." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2">{storeItems.map((item) => <article className="group overflow-hidden border border-white/10 bg-[#141414] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/55" key={item.id}>
        <div className="relative aspect-[4/5] overflow-hidden bg-[#0b0b0b]" style={{ backgroundImage: `url(${STORE_BACKDROP_DATA_URL})`, backgroundPosition: "center", backgroundSize: "cover" }}><img alt={item.name} className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.025]" src={item.image} /><span className="absolute left-4 top-4 border border-[#d4af37]/50 bg-[#0d0d0d]/90 px-2.5 py-1 text-[0.56rem] font-black uppercase tracking-[0.13em] text-[#f3e5ab]">{item.collection}</span></div>
        <div className="p-5 sm:p-6"><h2 className="font-['Teko'] text-3xl font-bold uppercase leading-none text-white">{item.name}</h2><p className="mt-3 text-xs leading-5 text-white/55">{item.description}</p><div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-5"><strong className="font-['Teko'] text-3xl font-bold leading-none text-[#d4af37]">{priceLabel(item.price)}</strong><BuyButton product={item.name} /></div></div>
      </article>)}</div>
    </div></section>

    <section className="bg-[#d4af37] py-20 text-[#0d0d0d] sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="text-[0.67rem] font-black uppercase tracking-[0.26em]">Tabela de preços</p><h2 className="mt-3 font-['Teko'] text-[clamp(3.5rem,8vw,6rem)] font-bold uppercase leading-[0.8]">Todas as coleções</h2>
      <div className="mt-10 space-y-3 md:hidden">
        {[{ name: "Exclusivo ELITE", shirt: "R$ 150,00", shorts: "R$ 250,00", set: "R$ 350,00" }, { name: "Padrão oficial", shirt: "R$ 120,00", shorts: "R$ 140,00", set: "R$ 235,00" }, { name: "Compressão", shirt: "R$ 165,00", shorts: "R$ 150,00", set: "R$ 275,00" }, { name: "Personalizado preto", shirt: "R$ 170,00", shorts: "R$ 240,00", set: "R$ 370,00" }, { name: "Personalizado branco", shirt: "R$ 170,00", shorts: "R$ 240,00", set: "R$ 370,00" }, { name: "Short Muay Thai", shirt: "—", shorts: "R$ 150,00", set: "—" }].map((row) => <article className="border-y border-[#0d0d0d]/30 py-4" key={row.name}><h3 className="font-['Teko'] text-3xl font-bold uppercase leading-none">{row.name}</h3><dl className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm font-bold"><div><dt className="text-[0.55rem] font-black uppercase tracking-[0.14em] opacity-60">Camisa</dt><dd className="mt-1">{row.shirt}</dd></div><div><dt className="text-[0.55rem] font-black uppercase tracking-[0.14em] opacity-60">Bermuda / short</dt><dd className="mt-1">{row.shorts}</dd></div><div><dt className="text-[0.55rem] font-black uppercase tracking-[0.14em] opacity-60">Conjunto</dt><dd className="mt-1">{row.set}</dd></div></dl></article>)}
      </div>
      <div className="mt-10 hidden overflow-x-auto border-y-2 border-[#0d0d0d] md:block"><table className="w-full min-w-[40rem] text-left"><thead className="border-b border-[#0d0d0d]/30 text-[0.62rem] font-black uppercase tracking-[0.14em]"><tr><th className="py-4">Coleção</th><th className="py-4">Camisa</th><th className="py-4">Bermuda / short</th><th className="py-4">Conjunto</th></tr></thead><tbody className="text-sm font-bold"><tr className="border-b border-[#0d0d0d]/20"><td className="py-5 font-['Teko'] text-2xl uppercase">Exclusivo ELITE</td><td>R$ 150,00</td><td>R$ 250,00</td><td>R$ 350,00</td></tr><tr className="border-b border-[#0d0d0d]/20"><td className="py-5 font-['Teko'] text-2xl uppercase">Padrão oficial</td><td>R$ 120,00</td><td>R$ 140,00</td><td>R$ 235,00</td></tr><tr className="border-b border-[#0d0d0d]/20"><td className="py-5 font-['Teko'] text-2xl uppercase">Compressão</td><td>R$ 165,00</td><td>R$ 150,00</td><td>R$ 275,00</td></tr><tr className="border-b border-[#0d0d0d]/20"><td className="py-5 font-['Teko'] text-2xl uppercase">Personalizado preto</td><td>R$ 170,00</td><td>R$ 240,00</td><td>R$ 370,00</td></tr><tr className="border-b border-[#0d0d0d]/20"><td className="py-5 font-['Teko'] text-2xl uppercase">Personalizado branco</td><td>R$ 170,00</td><td>R$ 240,00</td><td>R$ 370,00</td></tr><tr><td className="py-5 font-['Teko'] text-2xl uppercase">Short Muay Thai</td><td>—</td><td>R$ 150,00</td><td>—</td></tr></tbody></table></div></div></section>
  </main></PageLayout>;
}
