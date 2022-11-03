import React from "react";
import ReactDOM from "react-dom/client";
// Bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
