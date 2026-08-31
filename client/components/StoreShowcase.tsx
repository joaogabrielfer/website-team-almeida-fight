import { useEffect, useState } from "preact/hooks";
import { STORE_IMAGES } from "../data/storeImages";
import { STORE_BACKDROP_DATA_URL } from "../data/storeBackdrop";

const storeSlides = [
  { eyebrow: "Coleção oficial", title: "Team Almeida Fight", images: [{ alt: "Camisa oficial Team Almeida Fight", src: STORE_IMAGES.officialShirtNew, className: "left-[3%] top-[7%] h-[67%] w-[43%]" }, { alt: "Bermuda oficial Team Almeida Fight", src: STORE_IMAGES.officialShortsNew, className: "right-[2%] top-[13%] h-[58%] w-[43%]" }] },
  { eyebrow: "Edição exclusiva", title: "Conjunto ELITE", images: [{ alt: "Camisa ELITE branca", src: STORE_IMAGES.eliteShirt, className: "left-[4%] top-[8%] h-[65%] w-[42%]" }, { alt: "Bermuda ELITE branca", src: STORE_IMAGES.eliteShorts, className: "right-[3%] top-[13%] h-[55%] w-[43%]" }] },
  { eyebrow: "Performance", title: "Linha Compressão", images: [{ alt: "Camisa de compressão", src: STORE_IMAGES.compressionShirtNew, className: "left-[4%] top-[7%] h-[67%] w-[42%]" }, { alt: "Short de compressão", src: STORE_IMAGES.compressionShortsNew, className: "right-[3%] top-[14%] h-[53%] w-[43%]" }] },
  { eyebrow: "Peça avulsa", title: "Short Muay Thai", images: [{ alt: "Short de Muay Thai Almeida Fight", src: STORE_IMAGES.muayThaiShorts, className: "left-1/2 top-[3%] h-[70%] w-[68%] -translate-x-1/2" }] },
] as const;

export function StoreShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % storeSlides.length), 4200);
    return () => window.clearInterval(timer);
  }, []);

  return <div className="group relative aspect-[4/3] overflow-hidden border border-[#d4af37]/35 sm:aspect-auto sm:min-h-[27rem]" style={{ backgroundImage: `url(${STORE_BACKDROP_DATA_URL})`, backgroundPosition: "center", backgroundSize: "cover" }}>
    <div className="absolute left-0 top-0 z-20 h-1 w-32 bg-[#d4af37]" />
    <a aria-label={`Abrir o catálogo: ${storeSlides[activeSlide].title}`} className="absolute inset-0" href="/loja">
      {storeSlides.map((slide, index) => <article aria-hidden={index !== activeSlide} className={`absolute inset-0 transition-opacity duration-700 ${index === activeSlide ? "opacity-100" : "pointer-events-none opacity-0"}`} key={slide.title}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.13),transparent_48%),linear-gradient(0deg,rgba(0,0,0,0.86),transparent_60%)]" />
        {slide.images.map((image) => <img alt={image.alt} className={`absolute z-10 object-contain drop-shadow-[0_12px_15px_rgba(0,0,0,0.5)] ${image.className}`} src={image.src} />)}
        <div className="absolute bottom-5 left-5 right-16 z-20"><p className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-[#f3e5ab]">{slide.eyebrow}</p><p className="mt-1 font-['Teko'] text-3xl font-bold uppercase leading-none text-white sm:text-4xl">{slide.title}</p></div>
        <span className="absolute bottom-5 right-5 z-20 border border-white/30 bg-black/50 px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-white/75">Ver catálogo</span>
      </article>)}
    </a>
    <div aria-label="Selecionar coleção da loja" className="absolute right-5 top-5 z-30 flex gap-1.5">
      {storeSlides.map((slide, index) => <button aria-label={`Mostrar ${slide.title}`} aria-pressed={index === activeSlide} className={`h-1.5 rounded-full transition-all ${index === activeSlide ? "w-6 bg-[#d4af37]" : "w-1.5 bg-white/45 hover:bg-white"}`} onClick={() => setActiveSlide(index)} type="button" />)}
    </div>
  </div>;
}
