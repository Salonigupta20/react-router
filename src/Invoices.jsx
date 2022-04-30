// // import { Link } from "react-router-dom";
// // import { getInvoices } from "../data";
// // export default function Invoices() {
// //     return (
// //       <main style={{ padding: "1rem 0" }}>
// //         <h2>Invoices</h2>
// //        <a href= "/">
// //         <span>back</span>
// //        </a>
// //       </main>
// //     );
// //   }
// import { Link, Outlet } from "react-router-dom";
// import { getInvoices } from "./data";

// export default function Invoices() {
//   let invoices = getInvoices();
//   return (
//     <div style={{ display: "flex" }}>
//       <nav
//         style={{
//           borderRight: "solid 1px",
//           padding: "1rem",
//         }}
//       >
//         {invoices.map((invoice) => (
//           <NavLink
//             style={{ display: "block", margin: "1rem 0" }}
//             to={`/invoices/${invoice.number}`}
//             key={invoice.number}
//           >
//             {invoice.name}
//           </NavLink>
//         ))}
//       </nav>
//       <Outlet />
//       <a href= "/">
//        <span>back</span>
//        </a>
//     </div>
//   );
// }
import { NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "./data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}