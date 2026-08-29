import { TEAM_ALMEIDA_FIGHT_ELITE_KIT_DATA_URL } from "../data/eliteKit";

type ProductCardProps = {
  name: string;
  price?: string;
  imagePosition?: "left" | "right";
};

function ProductCard({ name, price, imagePosition }: ProductCardProps) {
  return (
    <article className="relative overflow-hidden border border-white/10 bg-[#151515]">
      {imagePosition ? (
        <div className="h-40 overflow-hidden border-b border-white/10 bg-[#090909] sm:h-48">
          <img
            alt={name}
            className={`h-full w-[200%] max-w-none object-cover ${imagePosition === "left" ? "object-left" : "object-right"}`}
            src={TEAM_ALMEIDA_FIGHT_ELITE_KIT_DATA_URL}
          />
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center border-b border-white/10 bg-[linear-gradient(135deg,#171717,#0b0b0b)] px-5 text-center sm:h-48">
          <span className="border border-[#d4af37]/40 px-3 py-2 text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#d4af37]/75">
            Foto não disponível
          </span>
        </div>
      )}
      <div className="p-4 sm:p-5">
        <h4 className="font-['Teko'] text-2xl font-bold uppercase leading-none text-white">{name}</h4>
        {price ? <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-[#d4af37]">{price}</p> : null}
      </div>
    </article>
  );
}

export function StoreShowcase() {
  return (
    <div aria-label="Produtos da Almeida Fight Store" className="space-y-8">
      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.58rem] font-black uppercase tracking-[0.22em] text-[#d4af37]">Conjuntos</p>
            <h3 className="mt-1 font-['Teko'] text-3xl font-bold uppercase leading-none text-white">Monte seu uniforme</h3>
          </div>
          <span className="hidden border border-white/10 px-3 py-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-white/45 sm:block">
            Frente
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1.12fr_0.88fr]">
          <article className="relative overflow-hidden border border-[#d4af37]/45 bg-[#0d0d0d]">
            <img
              alt="Conjunto Exclusivo ELITE com camisa e bermuda oficiais Team Almeida Fight"
              className="aspect-square w-full object-cover"
              src={TEAM_ALMEIDA_FIGHT_ELITE_KIT_DATA_URL}
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,rgba(0,0,0,0.95))] px-5 pb-5 pt-16">
              <span className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-[#d4af37]">Conjunto exclusivo</span>
              <h4 className="mt-1 font-['Teko'] text-3xl font-bold uppercase leading-none text-white">ELITE</h4>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-[#f3e5ab]">R$ 350,00</p>
            </div>
          </article>

          <div className="grid gap-4">
            <ProductCard imagePosition="left" name="Camisa oficial" price="R$ 150,00" />
            <ProductCard imagePosition="right" name="Bermuda oficial" price="R$ 250,00" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 pt-8">
        <p className="text-[0.58rem] font-black uppercase tracking-[0.22em] text-[#d4af37]">Peças avulsas</p>
        <h3 className="mt-1 font-['Teko'] text-3xl font-bold uppercase leading-none text-white">Outros uniformes</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <ProductCard name="Uniforme personalizado" />
          <ProductCard name="Uniforme de Muay Thai" />
        </div>
      </section>
    </div>
  );
}
