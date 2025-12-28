import API from "../api";
import { useEffect, useState } from "react";
import AddCustomer from "./AddCustomer";

export default function Dashboard() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    API.get("/customers").then(res => setCustomers(res.data));
  }, []);

  return (
    <div>
      <h2>CRM Dashboard</h2>
      <AddCustomer />
      <ul>
        {customers.map(c => (
          <li key={c._id}>{c.name} - {c.email}</li>
        ))}
      </ul>
    </div>
  );
}
