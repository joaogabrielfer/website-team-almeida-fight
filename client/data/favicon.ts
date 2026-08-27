const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#0d0d0d"/>
  <path d="M32 5 57 19v26L32 59 7 45V19L32 5Z" fill="none" stroke="#d4af37" stroke-width="3"/>
  <path d="M14 47 28 14h8l14 33H39l-2.5-7h-11L23 47H14Zm14.5-15h5L31 24l-2.5 8Z" fill="#d4af37"/>
  <path d="M35 17h15v7H42v5h7v7h-7v11h-7V17Z" fill="#fff"/>
</svg>`;

export const FAVICON_DATA_URL = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;
