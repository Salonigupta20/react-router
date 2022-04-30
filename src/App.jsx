import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Expenses from "./Expenses";
import Invoices from "./Invoices";
import Home from "./Home";
import InvoiceDetails from "./InvoiceDetails";
import Hooks from "./Hooks";


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="expenses" element={<Expenses />}>
        <Route path="expense-child" element={<h1>expense-child</h1>} />
        </Route>
        <Route path="invoices" element={<Invoices />} >
        <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
        
          <Route path=":invoiceNumber" element={<InvoiceDetails />} /> 
        </Route>
      {/* </Route> */}
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
    </Routes>
    <Hooks/> 
    </>

  );
};
export default App; 
