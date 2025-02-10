import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./components/App.css";
import "./components/Background.tsx";

// Import Bootstrap CSS and JS for responsive design
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import UI from "./components/UI.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UI />
  </StrictMode>
);
