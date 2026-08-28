import { Route, Router, Routes } from "lakebed/client";
import { useEffect } from "preact/hooks";

import { FAVICON_DATA_URL, FAVICON_TYPE } from "./data/favicon";
import { getModality } from "./data/modalities";
import { HomePage } from "./pages/HomePage";
import { ModalityPage } from "./pages/ModalityPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function GlobalBrowserSetup() {
  useEffect(() => {
    document.documentElement.lang = "pt-BR";

    const fontId = "almeida-fight-google-fonts";
    if (!document.getElementById(fontId)) {
      const preconnect = document.createElement("link");
      preconnect.rel = "preconnect";
      preconnect.href = "https://fonts.googleapis.com";

      const fonts = document.createElement("link");
      fonts.id = fontId;
      fonts.rel = "stylesheet";
      fonts.href =
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Teko:wght@600;700&display=swap";

      document.head.append(preconnect, fonts);
    }

    const faviconId = "almeida-fight-favicon";
    if (!document.getElementById(faviconId)) {
      const favicon = document.createElement("link");
      favicon.id = faviconId;
      favicon.rel = "icon";
      favicon.type = FAVICON_TYPE;
      favicon.href = FAVICON_DATA_URL;
      document.head.appendChild(favicon);
    }

    const themeColorId = "almeida-fight-theme-color";
    if (!document.getElementById(themeColorId)) {
      const themeColor = document.createElement("meta");
      themeColor.id = themeColorId;
      themeColor.name = "theme-color";
      themeColor.content = "#0d0d0d";
      document.head.appendChild(themeColor);
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!reduceMotion.matches) {
      document.documentElement.style.scrollBehavior = "smooth";
    }

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return null;
}

export function App() {
  return (
    <Router>
      <GlobalBrowserSetup />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/boxe" element={<ModalityPage modality={getModality("boxe")} />} />
        <Route path="/jiu-jitsu" element={<ModalityPage modality={getModality("jiu-jitsu")} />} />
        <Route path="/muay-thai" element={<ModalityPage modality={getModality("muay-thai")} />} />
        <Route path="/mma" element={<ModalityPage modality={getModality("mma")} />} />
        <Route path="/boxe.html" element={<ModalityPage modality={getModality("boxe")} />} />
        <Route path="/jiu-jitsu.html" element={<ModalityPage modality={getModality("jiu-jitsu")} />} />
        <Route path="/muay-thai.html" element={<ModalityPage modality={getModality("muay-thai")} />} />
        <Route path="/mma.html" element={<ModalityPage modality={getModality("mma")} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
