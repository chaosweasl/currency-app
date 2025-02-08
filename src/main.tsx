import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./components/App.css";
import "./components/Style.tsx";

// Import Bootstrap CSS and JS for responsive design
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./components/Interface.tsx";
import ReturnStyle from "./components/Style.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReturnStyle />
    <App />
  </StrictMode>
);
