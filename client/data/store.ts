import { PHONE_NUMBER } from "./site";
import { STORE_IMAGES } from "./storeImages";

export type StoreItem = {
  id: string;
  collection: "Compressão" | "Padrão Oficial" | "Personalização" | "Short Muay Thai";
  name: string;
  description: string;
  price: number;
  image: string;
};

const buyLink = (product: string) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Olá! Vim pela Almeida Fight Store e quero comprar: ${product}. Pode me informar os tamanhos disponíveis?`)}`;

export const storeItems: StoreItem[] = [
  { id: "camisa-compressao", collection: "Compressão", name: "Camisa de compressão", description: "Modelo técnico de alta performance.", price: 165, image: STORE_IMAGES.compressionShirt },
  { id: "short-compressao", collection: "Compressão", name: "Short de compressão", description: "Short técnico para mobilidade e suporte.", price: 150, image: STORE_IMAGES.compressionShorts },
  { id: "camisa-oficial-preta", collection: "Padrão Oficial", name: "Camisa oficial preta", description: "Camisa dry-fit oficial Team Almeida Fight.", price: 120, image: STORE_IMAGES.officialShirt },
  { id: "camisa-oficial-branca", collection: "Padrão Oficial", name: "Camisa oficial branca", description: "A mesma camisa oficial, em versão branca.", price: 120, image: STORE_IMAGES.personalizedShirt },
  { id: "camisa-oficial-personalizada", collection: "Personalização", name: "Camisa oficial com nome", description: "Sua camisa oficial com seu nome aplicado.", price: 170, image: STORE_IMAGES.personalizedShirt },
  { id: "bermuda-personalizada", collection: "Personalização", name: "Bermuda personalizada", description: "Bermuda de treino com acabamento personalizado.", price: 240, image: STORE_IMAGES.personalizedShorts },
  { id: "bermuda-oficial-preta", collection: "Padrão Oficial", name: "Bermuda oficial preta", description: "Bermuda oficial de treino com cós elástico.", price: 140, image: STORE_IMAGES.officialShorts },
  { id: "bermuda-oficial-branca", collection: "Padrão Oficial", name: "Bermuda oficial branca", description: "A mesma bermuda oficial, em versão branca.", price: 140, image: STORE_IMAGES.personalizedShorts },
  { id: "short-muay-thai", collection: "Short Muay Thai", name: "Short Muay Thai", description: "Corte tradicional, leve e livre para golpear.", price: 150, image: STORE_IMAGES.muayThaiShorts },
];

export const storeSets = [
  { collection: "Personalização", name: "Conjunto personalizado", description: "Camisa com nome e bermuda personalizada.", price: 370, images: [STORE_IMAGES.personalizedShirt, STORE_IMAGES.personalizedShorts] },
  { collection: "Compressão", name: "Conjunto compressão", description: "Camisa e short de compressão.", price: 275, images: [STORE_IMAGES.compressionShirt, STORE_IMAGES.compressionShorts] },
  { collection: "Padrão Oficial", name: "Conjunto oficial preto", description: "Camisa e bermuda oficiais pretas.", price: 235, images: [STORE_IMAGES.officialShirt, STORE_IMAGES.officialShorts] },
  { collection: "Padrão Oficial", name: "Conjunto oficial branco", description: "Camisa e bermuda oficiais brancas.", price: 235, images: [STORE_IMAGES.personalizedShirt, STORE_IMAGES.personalizedShorts] },
] as const;

export const priceLabel = (price: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

export const storeWhatsAppLink = buyLink;
