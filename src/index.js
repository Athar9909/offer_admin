import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
if (window.location.href.includes("admin")) {
  require("./assets/css/style.css");
} else {
  require("./assets/css/responsive.css");
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "assets/lang/{{lng}}.json",
    },
    react: {
      useSuspense: false,
    },
  });

// function App() {
//   const { t } = useTranslation();

//   return <h2>{t("Welcome_to_React")}</h2>;
// }

const loading = () => {
  <h1 className="text-center">Loading..</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={loading}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
