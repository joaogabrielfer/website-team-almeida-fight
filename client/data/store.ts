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
];

export const storeSets = [
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
    images: [STORE_IMAGES.officialShirtNew, STORE_IMAGES.officialShortsNew],
    pieces: [
      { id: "camisa-oficial", collection: "Padrão oficial", name: "Camisa oficial", description: "Camisa dry-fit oficial Team Almeida Fight.", price: 120, image: STORE_IMAGES.officialShirtNew },
      { id: "bermuda-oficial", collection: "Padrão oficial", name: "Bermuda oficial", description: "Bermuda oficial de treino com cós elástico.", price: 140, image: STORE_IMAGES.officialShortsNew },
    ],
  },
] as const;

export const priceLabel = (price: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

export const storeWhatsAppLink = buyLink;
