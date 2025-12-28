import API from "../api";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const login = async () => {
    const res = await API.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    alert("Login successful");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setData({...data,email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setData({...data,password:e.target.value})} />
      <button onClick={login}>Login</button>
    </div>
  );
}
