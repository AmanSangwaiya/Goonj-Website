import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // keep at the end if this is your Tailwind entry point
import App from "./app/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
