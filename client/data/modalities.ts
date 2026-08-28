import type { Instructor, Modality } from "../../shared/types";
import { INSTRUCTOR_IMAGES } from "./instructorImages";

const thiagoAlmeida: Instructor = {
  name: "Thiago Almeida",
  specialty: "Muay Thai + Kickboxing · MMA",
  schedule: "Muay Thai: seg., qua. e sex. · 10h e 17h30; ter. e qui. · 19h · MMA: seg., qua. e sex. · 11h30",
  image: INSTRUCTOR_IMAGES.thiagoAlmeida,
  achievements: [
    "5x campeão de Muay Thai",
    "Campeão regional de Kickboxing",
    "Campeão de MMA profissional",
    "Invicto no MMA profissional",
  ],
};

const ismaelNinja: Instructor = {
  name: "Ismael Ninja",
  specialty: "Boxe",
  schedule: "Segunda, quarta e sexta · 19h",
  image: INSTRUCTOR_IMAGES.ismaelNinja,
  achievements: ["10 anos de Boxe", "10 vitórias", "3x campeão regional de Boxe"],
};

const cesarAugusto: Instructor = {
  name: "Cesar Augusto",
  specialty: "Boxe",
  schedule: "Terça e quinta · 15h",
  image: INSTRUCTOR_IMAGES.cesarAugusto,
  achievements: [
    "Medalhista de Boxe no Campeonato Brasileiro",
    "Campeão pernambucano de Boxe",
  ],
};

const williamGomes: Instructor = {
  name: "William Gomes",
  specialty: "Jiu-Jitsu",
  schedule: "Segunda, quarta e sexta · 07h e 16h",
  image: INSTRUCTOR_IMAGES.williamGomes,
  achievements: [
    "15 anos de Jiu-Jitsu",
    "2 anos de faixa preta",
    "2x campeão pernambucano",
  ],
};

const italoFeijo: Instructor = {
  name: "Ítalo Feijó",
  specialty: "Jiu-Jitsu",
  schedule: "Segunda, quarta e sexta · 20h",
  image: INSTRUCTOR_IMAGES.italoFeijo,
  achievements: [
    "16 anos de Jiu-Jitsu",
    "5 anos de faixa preta",
    "3x campeão pernambucano",
    "Campeão Norte e Nordeste",
  ],
};

const caioHenrique: Instructor = {
  name: "Caio Henrique",
  specialty: "Jiu-Jitsu",
  schedule: "Terça e quinta · 08h e 16h",
  image: INSTRUCTOR_IMAGES.caioHenrique,
  achievements: [
    "11 anos de Jiu-Jitsu",
    "Experiência em campeonatos estaduais e interestaduais",
  ],
};

export const professionals = [
  thiagoAlmeida,
  ismaelNinja,
  cesarAugusto,
  williamGomes,
  italoFeijo,
  caioHenrique,
] as const;

export const modalities: readonly Modality[] = [
  {
    slug: "muay-thai",
    path: "/muay-thai",
    number: "01",
    name: "Muay Thai + Kickboxing",
    label: "Combate completo em pé",
    headline: "Oito armas. Uma disciplina sem atalhos.",
    instructor: "Thiago Almeida",
    instructors: [
      {
        ...thiagoAlmeida,
        specialty: "Muay Thai + Kickboxing",
        schedule: "Segunda, quarta e sexta · 10h e 17h30 · Terça e quinta · 19h",
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
    number: "02",
    name: "MMA",
    label: "Artes marciais mistas",
    headline: "Todas as distâncias. Um atleta completo.",
    instructor: "Thiago Almeida",
    instructors: [
      {
        ...thiagoAlmeida,
        specialty: "MMA",
        schedule: "Segunda, quarta e sexta · 11h30",
      },
    ],
    summary:
      "Uma preparação multidisciplinar para dominar as transições e tomar as melhores decisões em qualquer cenário de luta.",
    focus:
      "Integração total de striking, wrestling e grappling para atletas de competição e praticantes avançados.",
    pillars: ["Striking", "Wrestling", "Grappling", "Transições"],
  },
  {
    slug: "jiu-jitsu",
    path: "/jiu-jitsu",
    number: "03",
    name: "Jiu-Jitsu",
    label: "A arte suave",
    headline: "Controle, estratégia e evolução constante.",
    instructor: "Ítalo Feijó",
    instructors: [williamGomes, italoFeijo, caioHenrique],
    summary:
      "Técnica e raciocínio aplicados ao combate para desenvolver domínio corporal, autocontrole e eficiência no chão.",
    focus:
      "Domínio da arte suave, raspagens, finalizações, defesa pessoal e conceitos avançados de luta no chão.",
    pillars: ["Raspagens", "Finalizações", "Defesa pessoal", "Luta no chão"],
  },
  {
    slug: "boxe",
    path: "/boxe",
    number: "04",
    name: "Boxe",
    label: "A nobre arte",
    headline: "Precisão, ritmo e potência em cada golpe.",
    instructor: "Ismael Ninja",
    instructors: [ismaelNinja, cesarAugusto],
    summary:
      "Uma escola completa de combate que transforma técnica, inteligência e preparo físico em confiança dentro e fora do ringue.",
    focus:
      "Movimentação de pés, esquiva, combate de alta intensidade e condicionamento físico supremo.",
    pillars: ["Footwork", "Defesa e esquiva", "Combinações", "Condicionamento"],
  },
] as const;

export function getModality(slug: Modality["slug"]): Modality {
  const modality = modalities.find((item) => item.slug === slug);

  if (!modality) {
    throw new Error(`Modalidade não encontrada: ${slug}`);
  }

  return modality;
}
