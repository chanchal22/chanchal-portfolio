import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = ({ setAuth }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", credentials);
      if (res.data.success) {
        localStorage.setItem("adminToken", res.data.token);
        setAuth(true);
      }
    } catch (err) {
      alert("अवैध एक्सेस!");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-navy">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-2xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-navy">Admin Access</h2>
        <input type="text" placeholder="Username" className="w-full p-2 mb-4 border rounded" 
               onChange={(e) => setCredentials({...credentials, username: e.target.value})} />
        <input type="password" placeholder="Password" className="w-full p-2 mb-6 border rounded" 
               onChange={(e) => setCredentials({...credentials, password: e.target.value})} />
        <button className="w-full bg-bhagwa text-white py-2 rounded font-bold">Login</button>
      </form>
    </div>
  );
};
export default AdminLogin;