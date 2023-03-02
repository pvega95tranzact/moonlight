import { StyledEngineProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./theme/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("moonlight-root") as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <StyledThemeProvider theme={theme("light")}>
          <App />
      </StyledThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);