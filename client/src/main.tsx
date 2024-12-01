import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import i18next from "i18next";

import global_en from "./translations/en/global.json";
import global_fr from "./translations/fr/global.json";

import header_en from "./translations/en/header.json";
import header_fr from "./translations/fr/header.json";

import footer_en from "./translations/en/footer.json";
import footer_fr from "./translations/fr/footer.json";

import { I18nextProvider } from "react-i18next";
import { Toaster } from "sonner";

i18next.init({
  interpolation: { escapeValue: true },
  lng: localStorage.getItem("lang")?.toString() || "en",
  resources: {
    en: {
      global: global_en,
      header: header_en,
      footer: footer_en,
    },
    fr: {
      global: global_fr,
      header: header_fr,
      footer: footer_fr,
    },
  },
});


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <Toaster position="top-center" richColors />
          <App />
        </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
);
