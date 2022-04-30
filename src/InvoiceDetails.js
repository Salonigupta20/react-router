import { useParams } from "react-router-dom";

export default function InvoiceDetails() {
  let params = useParams();
  console.log(params.invoiceNumber);
  return <h2>Invoice: {params.invoiceNumber}</h2>;
}