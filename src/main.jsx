import { StrictMode } from "react";
import { createRoot } from "react-dom/client";  // createRoot만 임포트
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// createRoot만 사용
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
