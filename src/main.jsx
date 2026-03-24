import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AccountContext from "./store/AccountContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AccountContext>
        <App />
      </AccountContext>
    </StrictMode>
    
  </BrowserRouter>
);
