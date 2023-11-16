import React from "react";
import ReactDOM from "react-dom/client";
import App from "../screens/app/App";
import "../../styles/global.css";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
