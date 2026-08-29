import { STORE_IMAGES } from "../data/storeImages";
import { STORE_BACKDROP_DATA_URL } from "../data/storeBackdrop";

export function StoreShowcase() {
  return (
    <a
      aria-label="Abrir o catálogo da Almeida Fight Store"
      href="/loja"
      className="group relative aspect-[4/3] overflow-hidden border border-[#d4af37]/35 sm:aspect-auto sm:min-h-[27rem]"
      style={{ backgroundImage: `url(${STORE_BACKDROP_DATA_URL})`, backgroundPosition: "center", backgroundSize: "cover" }}
    >
      <div className="absolute left-0 top-0 z-10 h-1 w-32 bg-[#d4af37]" />
      <img alt="Camisa oficial preta Almeida Fight" className="absolute inset-0 h-full w-full object-contain sm:hidden" src={STORE_IMAGES.officialShirt} />
      <div className="absolute inset-0 hidden grid-cols-[1.14fr_0.86fr] gap-px bg-black/25 sm:grid">
        <img alt="Camisa oficial preta Almeida Fight" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.025]" src={STORE_IMAGES.officialShirt} />
        <div className="grid grid-rows-2 gap-px">
          <img alt="Short de Muay Thai Almeida Fight" className="h-full w-full object-contain transition-transform duration-700 delay-75 group-hover:scale-[1.035]" src={STORE_IMAGES.muayThaiShorts} />
          <img alt="Camisa oficial branca Almeida Fight" className="h-full w-full object-contain transition-transform duration-700 delay-100 group-hover:scale-[1.035]" src={STORE_IMAGES.personalizedShirt} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.5),transparent_65%),linear-gradient(0deg,rgba(0,0,0,0.65),transparent_45%)]" />
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
        <div><p className="text-[0.58rem] font-black uppercase tracking-[0.2em] text-[#f3e5ab]">Coleções oficiais</p><p className="mt-1 font-['Teko'] text-3xl font-bold uppercase leading-none text-white">Feito para treinar</p></div>
        <span className="border border-white/30 bg-black/50 px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-white/75">Ver catálogo</span>
      </div>
    </a>
  );
}
