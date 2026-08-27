import type { Modality } from "../../shared/types";
import { INSTRUCTOR_IMAGES } from "./instructorImages";

export const modalities: readonly Modality[] = [
  {
    slug: "boxe",
    path: "/boxe",
    number: "01",
    name: "Boxe",
    label: "A nobre arte",
    headline: "Precisão, ritmo e potência em cada golpe.",
    instructor: "Ismael Ninja",
    instructors: [
      {
        name: "Ismael Ninja",
        specialty: "Boxe",
        schedule: "Segunda, quarta e sexta · 19h",
        image: INSTRUCTOR_IMAGES.ismaelNinja,
      },
      {
        name: "Cesar Augusto",
        specialty: "Boxe",
        schedule: "Terça e quinta · 15h",
        image: INSTRUCTOR_IMAGES.cesarAugusto,
      },
    ],
    summary:
      "Uma escola completa de combate que transforma técnica, inteligência e preparo físico em confiança dentro e fora do ringue.",
    focus:
      "Movimentação de pés, esquiva, combate de alta intensidade e condicionamento físico supremo.",
    pillars: ["Footwork", "Defesa e esquiva", "Combinações", "Condicionamento"],
  },
  {
    slug: "jiu-jitsu",
    path: "/jiu-jitsu",
    number: "02",
    name: "Jiu-Jitsu",
    label: "A arte suave",
    headline: "Controle, estratégia e evolução constante.",
    instructor: "Ítalo Feijó",
    instructors: [
      {
        name: "William Gomes",
        specialty: "Jiu-Jitsu",
        schedule: "Segunda, quarta e sexta · 07h e 16h",
        image: INSTRUCTOR_IMAGES.williamGomes,
      },
      {
        name: "Ítalo Feijó",
        specialty: "Jiu-Jitsu",
        schedule: "Segunda, quarta e sexta · 20h",
        image: INSTRUCTOR_IMAGES.italoFeijo,
      },
      {
        name: "Caio Henrique",
        specialty: "Jiu-Jitsu",
        schedule: "Terça e quinta · 10h e 16h",
        image: INSTRUCTOR_IMAGES.caioHenrique,
      },
    ],
    summary:
      "Técnica e raciocínio aplicados ao combate para desenvolver domínio corporal, autocontrole e eficiência no chão.",
    focus:
      "Domínio da arte suave, raspagens, finalizações, defesa pessoal e conceitos avançados de luta no chão.",
    pillars: ["Raspagens", "Finalizações", "Defesa pessoal", "Luta no chão"],
  },
  {
    slug: "muay-thai",
    path: "/muay-thai",
    number: "03",
    name: "Muay Thai",
    label: "Muay Thai & Kickboxing",
    headline: "Oito armas. Uma disciplina sem atalhos.",
    instructor: "Thiago Almeida",
    instructors: [
      {
        name: "Thiago Almeida",
        specialty: "Muay Thai e Kickboxing",
        schedule: "Segunda, quarta e sexta · 10h e 17h30 · Terça e quinta · 19h",
        image: INSTRUCTOR_IMAGES.thiagoAlmeida,
      },
    ],
    summary:
      "Treinamento técnico e intenso para quem busca potência, resistência e domínio do combate completo em pé.",
    focus:
      "Combate completo em pé utilizando socos, chutes, joelhadas e cotoveladas com técnica apurada.",
    pillars: ["Boxe aplicado", "Chutes", "Joelhadas", "Cotoveladas"],
  },
  {
    slug: "mma",
    path: "/mma",
    number: "04",
    name: "MMA",
    label: "Artes marciais mistas",
    headline: "Todas as distâncias. Um atleta completo.",
    instructor: "Thiago Almeida",
    instructors: [
      {
        name: "Thiago Almeida",
        specialty: "MMA",
        schedule: "Segunda, quarta e sexta · 11h30",
        image: INSTRUCTOR_IMAGES.thiagoAlmeida,
      },
    ],
    summary:
      "Uma preparação multidisciplinar para dominar as transições e tomar as melhores decisões em qualquer cenário de luta.",
    focus:
      "Integração total de striking, wrestling e grappling para atletas de competição e praticantes avançados.",
    pillars: ["Striking", "Wrestling", "Grappling", "Transições"],
  },
] as const;

export function getModality(slug: Modality["slug"]): Modality {
  const modality = modalities.find((item) => item.slug === slug);

  if (!modality) {
    throw new Error(`Modalidade não encontrada: ${slug}`);
  }

  return modality;
}
