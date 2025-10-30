import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { FrontPage } from "@pages/FrontPage.tsx";
import { PublicationsPage } from "@pages/publications/PublicationsPage.tsx";
import { TeachingPage } from "@pages/TeachingPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
