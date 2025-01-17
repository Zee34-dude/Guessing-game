import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import AssemblyApp from "./AssemblyApp.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AssemblyApp/>
  </StrictMode>
)