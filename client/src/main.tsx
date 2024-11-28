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

import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: true },
  lng: localStorage.getItem("lang")?.toString() || "en",
  resources: {
    en: {
      global: global_en,
      header: header_en,
    },
    fr: {
      global: global_fr,
      header: header_fr,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
);
