import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

     const handleSubmit = async (e) => {
     e.preventDefault();

     try {
        const response = await axios.post("http://localhost:9999/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      alert(response.data);
      navigate("/login");
     } catch (err) {
        if (err.response) {
            alert(err.response.data);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
        } else {
            alert("Error connecting to server");
        }
     }
  };



    return (
    <div className="min-h-screen bg-gradient-to-r from-teal-200 via-pink-200 to-purple-200 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
            <h2 className="text-3xl font-semibold text-center text-gray-800">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full py-3 bg-teal-400 text-white rounded-md hover:bg-teal-500 transition duration-300"
                >
                    Register
                </button>
            </form>
        </div>
    </div>
)
}

export default Register;