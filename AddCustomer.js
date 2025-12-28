import API from "../api";
import { useState } from "react";

export default function AddCustomer() {
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });

  const addCustomer = async () => {
    await API.post("/customers", customer);
    alert("Customer Added");
  };

  return (
    <div>
      <h3>Add Customer</h3>
      <input placeholder="Name" onChange={e => setCustomer({...customer,name:e.target.value})} />
      <input placeholder="Email" onChange={e => setCustomer({...customer,email:e.target.value})} />
      <input placeholder="Phone" onChange={e => setCustomer({...customer,phone:e.target.value})} />
      <button onClick={addCustomer}>Add</button>
    </div>
  );
}
