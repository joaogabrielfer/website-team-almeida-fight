import { Link } from "lakebed/client";

import { PageLayout } from "../components/PageLayout";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFoundPage() {
  usePageMeta("Página não encontrada | Almeida Fight", "A página solicitada não foi encontrada.");

  return (
    <PageLayout>
      <main className="flex min-h-[80svh] items-center justify-center px-5 pb-20 pt-36 text-center" id="conteudo">
        <div>
          <p className="font-['Teko'] text-[10rem] font-bold leading-none text-[#d4af37]">404</p>
          <h1 className="font-['Teko'] text-5xl font-bold uppercase">Esse round não existe</h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-white/50">A página que você procura mudou de endereço ou nunca esteve por aqui.</p>
          <Link className="mt-8 inline-flex bg-[#d4af37] px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-[#0d0d0d] transition-colors hover:bg-[#f3e5ab]" to="/">
            Voltar para o início
          </Link>
        </div>
      </main>
    </PageLayout>
  );
}
