import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { FrontPage } from "@pages/FrontPage.tsx";
import { PublicationsPage } from "@pages/publications/PublicationsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
