import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/custom.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AppProvider } from "./contexts/AppProvider";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
