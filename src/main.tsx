import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StickersApp } from "./StickersApp";
// import { MyCounterApp } from "./counter/components/MyCounterApp";
import './index.css'


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StickersApp />
    {/* <MyCounterApp /> */}
  </StrictMode>
);
