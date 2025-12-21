import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ContextManagement from "./components/ContextManagement.tsx";

createRoot(document.getElementById("root")!).render(
  <ContextManagement>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextManagement>
);
