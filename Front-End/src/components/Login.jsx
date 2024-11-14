import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9999/api/auth/login", { email, password });
      alert(response.data.message);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate("/homepage");
    } catch (err) {
        alert(err.response.data);
        if (err.response.data === "Invalid credentials") {
          setEmail("");  
          setPassword(""); 
        }
        else if (err.response.data === "Incorrect Password") {
        setPassword("");
      } else {
        alert("Error connecting to server");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-pink-200 to-purple-200 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
            <h2 className="text-3xl font-semibold text-center text-gray-800">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition duration-300"
                >
                    Login
                </button>
            </form>
        </div>
    </div>
)

};

export default Login;
