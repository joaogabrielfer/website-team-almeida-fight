import { PHONE_NUMBER } from "./site";
import { STORE_IMAGES } from "./storeImages";

export type StoreItem = {
  id: string;
  collection: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const buyLink = (product: string) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Olá! Vim pela Almeida Fight Store e quero comprar: ${product}. Pode me informar os tamanhos disponíveis?`)}`;

export const storeItems: StoreItem[] = [
  { id: "short-muay-thai", collection: "Peças avulsas", name: "Short Muay Thai", description: "Corte tradicional, leve e livre para golpear.", price: 150, image: STORE_IMAGES.muayThaiShorts },
  { id: "bolsa-team-almeida-fight", collection: "Peças avulsas", name: "Bolsa Team Almeida Fight", description: "Bolsa esportiva Team Almeida Fight para levar seus equipamentos de treino.", price: 300, image: "/images/store/bolsa-team-almeida-fight.webp" },
];

export const storeSets = [
  {
    collection: "Personalizado",
    name: "Conjunto Personalizado Preto",
    description: "Conjunto preto com seu nome. A personalização é combinada pelo WhatsApp.",
    price: 370,
    images: ["/images/store/personalizados/camisa-preta-frente.webp", "/images/store/personalizados/short-preto-frente.webp"],
    pieces: [
      { id: "camisa-personalizada-preta", collection: "Personalizado preto", name: "Camisa personalizada preta", description: "Camisa preta personalizada com o nome aplicado. Combine o seu nome pelo WhatsApp.", price: 170, image: STORE_IMAGES.personalizedBlackShirt, views: ["/images/store/personalizados/camisa-preta-frente.webp", "/images/store/personalizados/camisa-preta-costas.webp"] },
      { id: "short-personalizado-preto", collection: "Personalizado preto", name: "Short personalizado preto", description: "Short preto personalizado com o nome aplicado. Combine o seu nome pelo WhatsApp.", price: 240, image: STORE_IMAGES.personalizedBlackShorts, views: ["/images/store/personalizados/short-preto-frente.webp", "/images/store/personalizados/short-preto-costas.webp"] },
    ],
  },
  {
    collection: "Personalizado",
    name: "Conjunto Personalizado Branco",
    description: "Conjunto branco com seu nome. A personalização é combinada pelo WhatsApp.",
    price: 370,
    images: ["/images/store/personalizados/camisa-branca-frente.webp", "/images/store/personalizados/short-branco-frente.webp"],
    pieces: [
      { id: "camisa-personalizada-branca", collection: "Personalizado branco", name: "Camisa personalizada branca", description: "Camisa branca personalizada com o nome aplicado. Combine o seu nome pelo WhatsApp.", price: 170, image: STORE_IMAGES.personalizedWhiteShirt, views: ["/images/store/personalizados/camisa-branca-frente.webp", "/images/store/personalizados/camisa-branca-costas.webp"] },
      { id: "short-personalizado-branco", collection: "Personalizado branco", name: "Short personalizado branco", description: "Short branco personalizado com o nome aplicado. Combine o seu nome pelo WhatsApp.", price: 240, image: STORE_IMAGES.personalizedWhiteShorts, views: ["/images/store/personalizados/short-branco-frente.webp", "/images/store/personalizados/short-branco-costas.webp"] },
    ],
  },
  {
    collection: "Edição exclusiva",
    name: "Conjunto Exclusivo ELITE",
    description: "Camisa e bermuda brancas da linha ELITE.",
    price: 350,
    images: [STORE_IMAGES.eliteShirt, STORE_IMAGES.eliteShorts],
    pieces: [
      { id: "camisa-elite", collection: "Conjunto Exclusivo ELITE", name: "Camisa ELITE", description: "Camisa branca oficial da linha ELITE.", price: 150, image: STORE_IMAGES.eliteShirt },
      { id: "bermuda-elite", collection: "Conjunto Exclusivo ELITE", name: "Bermuda ELITE", description: "Bermuda branca oficial da linha ELITE.", price: 250, image: STORE_IMAGES.eliteShorts },
    ],
  },
  {
    collection: "Padrão oficial",
    name: "Conjunto Oficial Team Almeida Fight",
    description: "Camisa dry-fit e bermuda oficiais em preto.",
    price: 235,
    images: ["/images/store/oficial/camisa-frente.webp", "/images/store/oficial/short-frente.webp"],
    pieces: [
      { id: "camisa-oficial", collection: "Padrão oficial", name: "Camisa oficial", description: "Camisa dry-fit oficial Team Almeida Fight.", price: 120, image: "/images/store/oficial/camisa-frente.webp", views: ["/images/store/oficial/camisa-frente.webp", "/images/store/oficial/camisa-costas.webp"] },
      { id: "bermuda-oficial", collection: "Padrão oficial", name: "Bermuda oficial", description: "Bermuda oficial de treino com cós elástico.", price: 140, image: "/images/store/oficial/short-frente.webp", views: ["/images/store/oficial/short-frente.webp", "/images/store/oficial/short-costas.webp"] },
    ],
  },
  {
    collection: "Compressão",
    name: "Conjunto Compressão",
    description: "Camisa e short de compressão para suporte e mobilidade no treino.",
    price: 275,
    images: [STORE_IMAGES.compressionShirtNew, STORE_IMAGES.compressionShortsNew],
    pieces: [
      { id: "camisa-compressao", collection: "Compressão", name: "Camisa de compressão", description: "Camisa de compressão Team Almeida Fight.", price: 165, image: STORE_IMAGES.compressionShirtNew },
      { id: "short-compressao", collection: "Compressão", name: "Short de compressão", description: "Short de compressão Team Almeida Fight.", price: 150, image: STORE_IMAGES.compressionShortsNew },
    ],
  },
] as const;

export const priceLabel = (price: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

export const storeWhatsAppLink = buyLink;
