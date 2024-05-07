import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, PreviewProvider } from "./providers/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PreviewProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </PreviewProvider>
  </React.StrictMode>
);
