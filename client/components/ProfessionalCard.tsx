import { useState } from "preact/hooks";

import type { Instructor } from "../../shared/types";

type ProfessionalCardProps = {
  index: number;
  professional: Instructor;
};

const restingTilt = { x: 0, y: 0, spotX: "50%", spotY: "50%", hovering: false };

export function ProfessionalCard({ index, professional }: ProfessionalCardProps) {
  const [open, setOpen] = useState(false);
  const [tilt, setTilt] = useState(restingTilt);

  const scale = tilt.hovering ? 1.012 : 1;
  const tabletAlignment = index % 2 === 0 ? "sm:justify-self-start" : "sm:justify-self-end";
  const desktopColumn = index % 3;
  const desktopAlignment = desktopColumn === 0
    ? "lg:justify-self-start"
    : desktopColumn === 1
      ? "lg:justify-self-center"
      : "lg:justify-self-end";

  return (
    <article
      className={`group relative z-0 w-full max-w-[20rem] border bg-[#141414] transition-[width,background-color,border-color,box-shadow,filter] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 sm:w-[min(var(--professional-card-width),calc(100vw-3rem))] sm:max-w-none ${open ? `z-30 border-[#e2bd3d] bg-[#080808] shadow-[0_85px_190px_rgba(0,0,0,1),0_35px_90px_rgba(0,0,0,1),0_0_0_1px_rgba(226,189,61,0.48),0_0_105px_rgba(212,175,55,0.25)] ${tabletAlignment} ${desktopAlignment}` : "border-white/15 shadow-[0_18px_45px_rgba(0,0,0,0.32)] hover:border-[#d4af37]/65 hover:shadow-[0_28px_75px_rgba(0,0,0,0.72)]"}`}
      onPointerLeave={() => setTilt(restingTilt)}
      onPointerMove={(event) => {
        if (event.pointerType === "touch") return;
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        setTilt({
          x: (0.5 - py) * 2.4,
          y: (px - 0.5) * 2.4,
          spotX: `${px * 100}%`,
          spotY: `${py * 100}%`,
          hovering: true,
        });
      }}
      style={{
        "--professional-card-width": open ? "36rem" : "20rem",
        transform: open
          ? "translateY(-10px)"
          : `perspective(1000px) scale(${scale}) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformOrigin: "center",
        filter: open ? "drop-shadow(0 32px 30px rgba(0, 0, 0, 0.82))" : "none",
        transition: open
          ? "transform 600ms cubic-bezier(0.16, 1, 0.3, 1), width 600ms cubic-bezier(0.16, 1, 0.3, 1), max-width 600ms cubic-bezier(0.16, 1, 0.3, 1), border-color 450ms ease, box-shadow 600ms ease, filter 600ms ease"
          : `transform ${tilt.hovering ? "180ms ease-out" : "600ms cubic-bezier(0.16, 1, 0.3, 1)"}, width 600ms cubic-bezier(0.16, 1, 0.3, 1), max-width 600ms cubic-bezier(0.16, 1, 0.3, 1), border-color 450ms ease, box-shadow 600ms ease, filter 600ms ease`,
      }}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-7 -z-10 bg-black/70 blur-3xl transition-opacity duration-[600ms] ${open ? "opacity-100" : "opacity-0"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-30 ring-1 ring-inset transition-colors duration-[600ms] ${open ? "ring-[#f0ca48]/70" : "ring-white/15"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 ${tilt.hovering || open ? "opacity-100" : "opacity-0"}`}
        style={{
          background: `radial-gradient(16rem circle at ${tilt.spotX} ${tilt.spotY}, rgba(212,175,55,0.16), transparent 58%)`,
        }}
      />

      <div className="relative z-20 overflow-hidden sm:grid sm:grid-cols-[20rem_16rem]">
        <button
          aria-expanded={open}
          className="block w-full shrink-0 cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37] sm:w-80"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <div className="relative aspect-square overflow-hidden bg-[#0d0d0d]">
            <img
              alt={`Professor ${professional.name}, ${professional.specialty}`}
              className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              loading="lazy"
              src={professional.image}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#151515] to-transparent" />
            <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af37]/55 bg-[#0d0d0d]/80 text-lg text-[#d4af37] backdrop-blur-sm transition-transform duration-500" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
              +
            </span>
          </div>

          <div className="border-t-2 border-[#d4af37] px-5 py-4">
            <p className="text-[0.56rem] font-black uppercase tracking-[0.18em] text-[#d4af37]">{professional.specialty}</p>
            <h3 className="mt-1 font-['Teko'] text-3xl font-bold uppercase leading-none">{professional.name}</h3>
            <span className="mt-3 block text-[0.55rem] font-black uppercase tracking-[0.16em] text-white/50 transition-colors hover:text-white/80">
              {open ? "Fechar detalhes" : "Conheça o professor"}
            </span>
          </div>
        </button>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:block sm:w-64 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className={`overflow-hidden transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:h-full sm:min-w-64 ${open ? "translate-y-0 sm:translate-x-0" : "-translate-y-3 sm:-translate-x-5 sm:translate-y-0"}`}>
            <div className="h-full border-t border-[#d4af37]/45 bg-[radial-gradient(circle_at_20%_15%,rgba(212,175,55,0.09),transparent_35%),#060606] px-5 pb-5 pt-4 sm:border-l sm:border-t-0 sm:px-6 sm:py-7">
              <p className="text-[0.56rem] font-black uppercase tracking-[0.18em] text-[#d4af37]">Horários</p>
              <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-[0.07em] text-white/60">{professional.schedule}</p>
              <p className="mt-5 text-[0.56rem] font-black uppercase tracking-[0.18em] text-[#d4af37] sm:mt-7">Trajetória</p>
              <ul className="mt-3 grid gap-2">
                {professional.achievements.map((achievement) => (
                  <li className="flex gap-3 text-xs leading-5 text-white/65" key={achievement}>
                    <span aria-hidden="true" className="text-[#d4af37]">•</span>{achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
