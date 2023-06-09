import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";

import App from "./App";
import "./index.css";
import { ContextProvider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ContextProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ContextProvider>
);
