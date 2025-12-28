import API from "../api";
import { useState } from "react";

export default function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const register = async () => {
    await API.post("/auth/register", data);
    alert("Registered Successfully");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setData({...data,name:e.target.value})} />
      <input placeholder="Email" onChange={e => setData({...data,email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setData({...data,password:e.target.value})} />
      <button onClick={register}>Register</button>
    </div>
  );
}
