import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./Expenses";
import Invoices from "./Invoices";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <App/>
    </BrowserRouter>
  </React.StrictMode>
  
);

reportWebVitals();

