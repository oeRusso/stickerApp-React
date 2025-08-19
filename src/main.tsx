import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StickersApp } from "./StickersApp";
import './index.css'


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StickersApp />
  </StrictMode>
);
