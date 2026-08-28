import { PHONE_NUMBER } from "./site";
import { STORE_IMAGES } from "./storeImages";

export type StoreItem = {
  id: string;
  collection: "Personalizado" | "Compressão" | "Padrão Oficial" | "Short Muay Thai";
  name: string;
  description: string;
  price: number;
  image: string;
};

const buyLink = (product: string) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Olá! Vim pela Almeida Fight Store e quero comprar: ${product}. Pode me informar os tamanhos disponíveis?`)}`;

export const storeItems: StoreItem[] = [
  { id: "camisa-personalizada", collection: "Personalizado", name: "Camisa personalizada", description: "Dry-fit com acabamento personalizado da equipe.", price: 170, image: STORE_IMAGES.personalizedShirt },
  { id: "bermuda-personalizada", collection: "Personalizado", name: "Bermuda personalizada", description: "Bermuda de treino com caimento esportivo.", price: 240, image: STORE_IMAGES.personalizedShorts },
  { id: "camisa-compressao", collection: "Compressão", name: "Camisa de compressão", description: "Modelo técnico de alta performance.", price: 165, image: STORE_IMAGES.compressionShirt },
  { id: "short-compressao", collection: "Compressão", name: "Short de compressão", description: "Short técnico para mobilidade e suporte.", price: 150, image: STORE_IMAGES.compressionShorts },
  { id: "camisa-oficial", collection: "Padrão Oficial", name: "Camisa oficial", description: "Camisa dry-fit oficial Team Almeida Fight.", price: 120, image: STORE_IMAGES.officialShirt },
  { id: "bermuda-oficial", collection: "Padrão Oficial", name: "Bermuda oficial", description: "Bermuda oficial de treino com cós elástico.", price: 140, image: STORE_IMAGES.officialShorts },
  { id: "short-muay-thai", collection: "Short Muay Thai", name: "Short Muay Thai", description: "Corte tradicional, leve e livre para golpear.", price: 150, image: STORE_IMAGES.muayThaiShorts },
];

export const storeSets = [
  { collection: "Personalizado", name: "Conjunto personalizado", description: "Camisa e bermuda personalizadas.", price: 370, images: [STORE_IMAGES.personalizedShirt, STORE_IMAGES.personalizedShorts] },
  { collection: "Compressão", name: "Conjunto compressão", description: "Camisa e short de compressão.", price: 275, images: [STORE_IMAGES.compressionShirt, STORE_IMAGES.compressionShorts] },
  { collection: "Padrão Oficial", name: "Conjunto oficial", description: "Camisa e bermuda oficiais Team Almeida Fight.", price: 235, images: [STORE_IMAGES.officialShirt, STORE_IMAGES.officialShorts] },
] as const;

export const priceLabel = (price: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

export const storeWhatsAppLink = buyLink;
