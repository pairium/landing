import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import ogImage from "./assets/og-image.png";

const updateOgImage = () => {
  const ogImageUrl = new URL(ogImage, window.location.origin).href;
  const ogImageMeta = document.querySelector('meta[property="og:image"]');
  if (ogImageMeta) {
    ogImageMeta.setAttribute("content", ogImageUrl);
  }
};

updateOgImage();

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
