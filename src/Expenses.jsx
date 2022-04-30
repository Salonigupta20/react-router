import { Link, Outlet } from "react-router-dom";

export default function Expenses() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Expenses</h2>
        <a href="/"><span> back </span></a>
        <Link to="/expenses/expense-child"> |Child</Link>
        <Outlet />
      </main>
    );  
  }