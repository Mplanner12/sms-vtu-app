"use client";

import { useState } from "react";
import axios from "axios";

export default function AuthForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/auth", { username, password });
      if (response.data.success) {
        setMessage("Login successful!");
        window.location.href = "/recharge";
      } else {
        setMessage("Invalid credentials.");
      }
    } catch {
      setMessage("Login failed.");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
