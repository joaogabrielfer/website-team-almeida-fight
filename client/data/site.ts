const message = encodeURIComponent(
  "Olá! Vim pelo site da Academia Almeida Fight e quero agendar uma aula experimental.",
);

export const PHONE_NUMBER = "5581984415187";
export const PHONE_DISPLAY = "+55 (81) 98441-5187";
export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${message}`;
export const INSTAGRAM_HANDLE = "@academia_almeida_fight";
export const INSTAGRAM_URL = "https://www.instagram.com/academia_almeida_fight/";

export const ACADEMY_ADDRESS = "Rua Frei Miguelinho, 425 · Recife, PE";
const encodedAddress = encodeURIComponent("Rua Frei Miguelinho, 425, Recife, PE");
export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
export const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
export const WAZE_DIRECTIONS_URL = `https://www.waze.com/ul?q=${encodedAddress}&navigate=yes`;

export const navigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Modalidades", href: "/#modalidades" },
  { label: "Horários", href: "/#horarios" },
  { label: "Equipe", href: "/#equipe" },
  { label: "Loja", href: "/#loja" },
  { label: "Contato", href: "/#contato" },
] as const;
