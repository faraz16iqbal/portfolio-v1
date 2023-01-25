import React, { StrictMode } from "react";
import App from "./App";
import * as ReactDOM from "react-dom/client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import customTheme from "./theme/index";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/chelsea-market/400.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <ColorModeScript />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
