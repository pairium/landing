import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@/components/theme-provider";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="pairium-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
