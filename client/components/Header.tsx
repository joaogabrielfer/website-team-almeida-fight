import { useEffect, useState } from "preact/hooks";

import { navigation } from "../data/site";
import { Brand } from "./Brand";

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-[#d4af37]/45 bg-[#0d0d0d]/95 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "border-[#d4af37]/25 bg-[#0d0d0d]/75 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
        <Brand compact />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="relative py-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/70 transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[#d4af37] after:transition-transform hover:text-white hover:after:scale-x-100 focus-visible:text-[#f3e5ab] focus-visible:outline-none focus-visible:after:scale-x-100"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center border border-[#d4af37]/50 text-[#d4af37] transition-colors hover:border-[#f3e5ab] hover:text-[#f3e5ab] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3e5ab] lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? "max-h-[calc(100vh-4.75rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-navigation"
      >
        <nav aria-label="Navegação para dispositivos móveis" className="border-t border-white/10 px-5 pb-8 pt-4">
          <ul className="mx-auto grid max-w-7xl gap-1">
            {navigation.map((item, index) => (
              <li key={item.href}>
                <a
                  className="flex items-center justify-between border-b border-white/10 py-3.5 font-['Teko'] text-2xl font-semibold uppercase tracking-wide text-white transition-colors hover:border-[#d4af37]/50 hover:text-[#d4af37] focus-visible:outline-none focus-visible:text-[#f3e5ab]"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  <span className="font-['Montserrat'] text-[0.6rem] text-[#d4af37]/70">
                    0{index + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
