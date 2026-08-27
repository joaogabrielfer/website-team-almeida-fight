const message = encodeURIComponent(
  "Olá! Vim pelo site da Academia Almeida Fight e quero agendar uma aula experimental.",
);

export const PHONE_NUMBER = "5581984415187";
export const PHONE_DISPLAY = "+55 (81) 98441-5187";
export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${message}`;

export const navigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Modalidades", href: "/#modalidades" },
  { label: "Horários", href: "/#horarios" },
  { label: "Equipe", href: "/#equipe" },
  { label: "Loja", href: "/#loja" },
  { label: "Galeria", href: "/#galeria" },
  { label: "Contato", href: "/#contato" },
] as const;
