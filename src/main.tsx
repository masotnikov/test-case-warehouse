import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "@/app/providers/StoreProviders";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <App/>
    </StoreProvider>
  </BrowserRouter>
);
